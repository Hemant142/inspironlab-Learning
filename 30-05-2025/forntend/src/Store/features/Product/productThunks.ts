import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { CartsItem, ProductData } from "../../../TypeScript/constrain";
import type { AppDispatch } from "../../store";

const api: string = "http://localhost:8080";

// const dispatch= useDispatch()

export const fetchProducts = createAsyncThunk("products/get", async () => {
  const response = await axios.get(`${api}/products`);
  return response.data;
});

export const fetchSingleProduct = createAsyncThunk(
  "products/singleproduct",
  async ({ token, id }: { token: string; id: string }) => {
    const response = await axios.get(`${api}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const getMyOrder = createAsyncThunk(
  "products/myorder",
  async ({token}:{token:string}) => {

    const response = await axios.get(`${api}/orders/my`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
);

export const myOrderPlaced = createAsyncThunk(
  "products/orderplaced",
  async ({
    token,
    productsForOrder,
  }: {
    token: string;
    productsForOrder: {
      _id: string | number | null | undefined;
      product: ProductData;
      quantity: number;
    }[];
  }) => {
    const response = await axios.post(
      `${api}/orders/place`,
      { products: productsForOrder },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

export const getCarts=createAsyncThunk(
    'cart/get',
    async({token}:{token:string})=>{
        const response=await axios.get(`${api}/carts/my`,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
)

export const updateQuantityCarts= createAsyncThunk(
    'carts/update',
    async({token,id,quantity}:{token:string,id:string,quantity:number})=>{
        const response=await axios.patch(`${api}/carts/update/${id}`,{quantity},{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    }
)



// export const addToCart=createAsyncThunk(
//     'cart/added',
//     async({token,cartData}:{token:string,cartData:CartsItem})=>{
//       console.log(token,cartData,"Add To Cart")
//  await axios.post(
//       `${api}/carts/place`,
//       cartData ,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return { message: "Product added to cart successfully." };
//     }
// )



// export const deleteCarts= createAsyncThunk(
//     'carts/delete',
//     async({token,id}:{token:string,id:string})=>{
//         const response=await axios.delete(`${api}/carts/delete/${id}`,{
//             headers:{
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         return response.data
//     }
// )





export const addToCart = createAsyncThunk<
  { message: string },
  { token: string; cartData: CartsItem },
  { dispatch: AppDispatch }
>(
  'cart/added',
  async ({ token, cartData }, { dispatch }) => {
    await axios.post(`${api}/carts/place`, cartData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(getCarts({ token }));
    return { message: "Product added to cart successfully." };
  }
);

export const deleteCarts = createAsyncThunk<
  { message: string },
  { token: string; id: string },
  { dispatch: AppDispatch }
>(
  'carts/delete',
  async ({ token, id }, { dispatch }) => {
    await axios.delete(`${api}/carts/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    await dispatch(getCarts({ token }));
    return { message: "Product deleted from cart." };
  }
);
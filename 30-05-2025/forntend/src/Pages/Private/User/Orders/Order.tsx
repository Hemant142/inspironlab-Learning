import  { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { PurchaseItem, SingleOrderItem } from '../../../../TypeScript/constrain'
import "./Order.css"
import OrderContainreBody from '../../../../Components/OrderContainerBody/OrderContainreBody'
import { getMyOrder } from '../../../../Store/features/Product/productThunks'
import type { AppDispatch } from '../../../../Store/store'

export default function Order() {
  const dispatch=  useDispatch<AppDispatch>();
  const token = useSelector((state:{auth:{token:string}})=>state.auth.token)
  const orderedProducts =useSelector((state:{products:{orderedProducts:Array<PurchaseItem>}})=>state.products.orderedProducts)

  useEffect(()=>{
    if(orderedProducts.length==0){

  dispatch(getMyOrder({token}))
    }
  },[token, dispatch, orderedProducts.length])

  const handleDate=(date:string)=>{
    const d= new Date(date)
    return d.toDateString()
  }
  const handlePrice=(products:SingleOrderItem[])=>{
  return products.reduce((acc,curr)=>{
        acc+=curr.quantity*curr.product.price
        return acc
    },0)
  }


  return (
    <div className='order-main-container'>
      {orderedProducts.length>0?(
        orderedProducts.map((ele)=>(
             <div className='order-container' key={ele._id}>
      <div className='order-container-head'>
        <p>Order Placed<span>
          {handleDate(ele.orderDate)}
          </span>
          </p>
        <p>Total Items <span>{ele.products.length}</span></p>
         <p>Total Price <span>₹ {" "} {handlePrice(ele.products)}</span></p>

      </div>

      <div className='order-container-body'>
{ele.products.map((item) => (
  <OrderContainreBody key={item._id} order={item} />
))}
      </div>
      </div>
        ))
       
      ):(<h1>No Order</h1>)}
    

    </div>
  )
}

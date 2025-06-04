export type ProductData = {
  description?: string;
  _id: string;
  id?: number;
  name: string;
  price: number;
  about: string;
  category: string;
  brand: string;
  rating: number;
  avatar: string;
};

export type UserData = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

export type PurchaseItem = {
  _id: string;
  products: {
    product: ProductData;
    quantity: number;
    purchasedAt: string;
    _id: string; // Also exists in each product item
  }[];
  orderDate: string;
};

export type SingleOrderItem = {
  product: ProductData;
  quantity: number;
  purchasedAt: string;
  _id: string;
};
export type CartsItem = {
  product: ProductData;
  quantity: number;
  cartDate?: string;
  _id?: string;
};

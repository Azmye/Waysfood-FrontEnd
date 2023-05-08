import { useEffect, useState } from 'react';
import OrderItem from '../components/OrderItem';
import { useQuery } from 'react-query';
import { API } from '../api/Api';

const Cart = () => {
  const [pendingOrder, setPendingOrder] = useState(null);

  const { data: carts, isLoading } = useQuery('cartsIncCached', async () => {
    const response = await API.get(`/carts`);
    return response.data.data;
  });

  useEffect(() => {
    carts && setPendingOrder(carts.filter((cart) => cart.Status === 'pending'));
    console.log(carts);
  }, [isLoading]);
  return (
    <div className="container mx-auto pt-36 lg:px-44 ">
      <h2 className="text-3xl font-bold">Geprek Bensu</h2>
      <form>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-zinc-800">Delivery Location</h3>
          <div className="flex gap-x-3">
            <input type="text" name="" id="" className="w-4/5 p-2 rounded-md" placeholder="Belitung Darat" />
            <button className="w-1/5 bg-zinc-800 px-3 text-white rounded-md">Select on Map</button>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold text-zinc-800 mb-1">Review Your Order</h3>
          <div className="flex gap-x-5">
            <div className="w-3/5">
              <div className="h-0.5 w-full bg-zinc-800">{pendingOrder && pendingOrder.map((order) => <OrderItem name={order.Product.Name} image={order.Product.ImageURL} qty={order.Quantity} />)}</div>
            </div>
            <div className="w-2/5">
              <div className="h-0.5 w-full bg-zinc-800">
                <div className="flex justify-between mb-2 pt-3">
                  <p>Subtotal</p>
                  <p>35.000,00</p>
                </div>
                <div className="flex justify-between mb-2 mt-2">
                  <p>Qty</p>
                  <p>3</p>
                </div>
                <div className="flex justify-between mb-2">
                  <p>Delivery Fee</p>
                  <p>10.000,00</p>
                </div>
                <div className="mt-3 h-0.5 w-full bg-zinc-800"></div>
                <div className="flex justify-between mb-3">
                  <p>Total</p>
                  <p>45.000,00</p>
                </div>
                <div className="text-end">
                  <button className="w-2/3 py-1 bg-zinc-800 text-white rounded-md">Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Cart;

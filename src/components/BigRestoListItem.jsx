import { Link, useLocation } from 'react-router-dom';
import geprekBensuPic from '../assets/img/geprek-bensu.png';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useMutation, useQuery } from 'react-query';
import { API } from '../api/Api';
import { FaTrash } from 'react-icons/fa';

const BigRestoListItem = (props) => {
  const [userState, userDispatch] = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [checkItem, setCheckItem] = useState(null);
  const location = useLocation();
  const currentLoc = location.pathname;

  const [form, setForm] = useState({
    ProductID: props.id,
    CustomerID: userState.user.id,
    Quantity: 1,
    Status: 'pending',
  });

  const { data: product, isLoading: productLoading } = useQuery('productDiffCached', async () => {
    const response = await API.get(`/product/${props.id}`);
    return response.data.data;
  });

  const { data: carts, isLoading } = useQuery('cartsIncCached', async () => {
    const response = await API.get(`/carts`);
    return response.data.data;
  });

  const handleOnClick = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set('product_id', form.ProductID);
      formData.set('customer_id', form.CustomerID);
      formData.set('qty', form.Quantity);
      formData.set('status', form.Status);

      const pendingCartItems = carts.map((cart) => cart).filter((cart) => cart.Product.Name === props.name && cart.Status === 'pending');
      if (pendingCartItems.length > 0) {
        alert('Item is already added!');
      } else {
        const response = await API.post('/cart', formData);
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div key={props.id} className="w-1/4 p-2">
      <div className="shadow-xl bg-white p-2 flex flex-col gap-x-5 items-left rounded-md">
        <Link to={currentLoc.includes('menu') ? null : userState.user.role === 'partner' ? `/menu/${userState.user.id}` : `/menu/${props.id}`}>
          <img src={props.image ? props.image : geprekBensuPic} alt="" className="w-full object-cover" />
        </Link>
        <p className="font-bold text-lg mt-2">{props.name}</p>
        {props.landing ? <p className="mb-3">{props.distance}</p> : <p className="mb-3">{props.price}</p>}
        {props.landing ? null : (
          <div className={`flex ${userState.user.role === 'partner' ? 'gap-x-3' : ''}`}>
            <button
              type="button"
              disabled={userState.user.role === 'partner' ? true : isLoading.valueOf(true)}
              onClick={(e) => handleOnClick.mutate(e)}
              className={`disabled:bg-yellow-300/30 bg-yellow-300 text-black rounded-sm py-1 ${userState.user.role === 'partner' ? 'w-4/5 ' : 'w-full'}`}
            >
              Order
            </button>
            {userState.user.role === 'partner' ? (
              <button className="w-1/5 bg-red-700 rounded-sm text-black/80 px-2">
                <FaTrash className="mx-auto" />
              </button>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default BigRestoListItem;

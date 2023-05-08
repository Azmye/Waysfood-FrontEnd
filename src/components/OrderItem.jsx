import { FaMinus, FaPlus, FaTrash, FaTrashAlt } from 'react-icons/fa';
import geprekBensuPics from '/img/geprek-bensu.png';

const OrderItem = (props) => {
  return (
    <>
      <div className="flex justify-between pt-3">
        <div className="flex gap-x-3">
          <div className="w-36">
            <img src={props.image ? props.image : geprekBensuPics} alt="" className="object-cover w-full" />
          </div>
          <div className="flex flex-col justify-around">
            <p className="text-xl font-bold">{props.name}</p>
            <div className="flex gap-x-3">
              <button>
                <FaMinus />
              </button>
              <p>{props.qty}</p>
              <button>
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around items-end">
          <p>{props.price}</p>
          <button>
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="mt-3 h-0.5 w-full bg-zinc-800"></div>
    </>
  );
};

export default OrderItem;

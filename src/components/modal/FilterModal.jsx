import { useContext, useState } from 'react';
import { DropdownContext } from '../../context/DropdownContext';
import { FoodContext } from '../../context/FoodContext';

const FilterModal = () => {
  const [foodState, foodDispatch] = useContext(FoodContext);

  const [form, setForm] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    foodDispatch({ type: 'SET_FOOD_FILTER', payload: form });
  };

  return (
    <div className="absolute">
      <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/30 z-40" onClick={() => foodDispatch({ type: 'CLOSE_FILTER_MODAL' })}></div>
      <div className="fixed z-50 ">
        <div className="fixed mt-44 ml-[24rem] w-1/2 z-50 bg-white p-5 rounded-md font-sans">
          <h2 className="font-semibold text-lg mb-3">Filter Food</h2>
          <form onSubmit={(e) => handleOnSubmit(e)}>
            <div className="bg-yellow-300 w-full p-4 rounded-md">
              <div className="mb-3">
                <input type="text" onChange={handleOnChange} value={form.name} name="name" className="w-full outline-none rounded-md border-0" placeholder="Food Name" />
              </div>
              <div className="flex gap-x-3">
                <input type="text" onChange={handleOnChange} value={form.minPrice} name="minPrice" className="w-1/2 outline-none rounded-md border-0" placeholder="Rp. Terendah" />
                <input type="text" onChange={handleOnChange} value={form.maxPrice} name="maxPrice" className="w-1/2 outline-none rounded-md border-0" placeholder="Rp. Tertinggi" />
              </div>
            </div>
            <div className="mt-3 text-end">
              <button className="bg-sky-500 text-white px-4 py-2 rounded-md">Filter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

import BigRestoListItem from './BigRestoListItem';
import { useContext, useEffect, useState } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import { FoodContext } from '../context/FoodContext';

const BigRestoList = (props) => {
  const [foodState, foodDispatch] = useContext(FoodContext);
  const [foodList, setFoodList] = useState(null);

  const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(number);
  };

  useEffect(() => {
    props.data && setFoodList(props.data);
  }, [props.data]);

  useEffect(() => {
    if (foodState.filter) {
      if (foodState.filter.name && foodState.filter.minPrice && foodState.filter.maxPrice) {
        const filteredFood = props.data.filter((food) => food.Name.toLowerCase().includes(foodState.filter.name.toLowerCase()) && food.Price >= foodState.filter.minPrice && food.Price <= foodState.filter.maxPrice);
        setFoodList(filteredFood);
      } else if (foodState.filter.name && foodState.filter.maxPrice) {
        const filteredFood = props.data.filter((food) => food.Name.toLowerCase().includes(foodState.filter.name.toLowerCase()) && food.Price <= foodState.filter.maxPrice);
        setFoodList(filteredFood);
      } else if (foodState.filter.name && foodState.filter.minPrice) {
        const filteredFood = props.data.filter((food) => food.Name.toLowerCase().includes(foodState.filter.name.toLowerCase()) && food.Price <= foodState.filter.minPrice);
        setFoodList(filteredFood);
      } else if (foodState.filter.name) {
        const filteredFood = props.data.filter((food) => food.Name.toLowerCase().includes(foodState.filter.name.toLowerCase()));
        setFoodList(filteredFood);
      }
    }
  }, [foodState]);

  return (
    <>
      {props.loading && <div>Loading...</div>}
      {foodList && (
        <div className={`${props.className}`}>
          <div className="container mx-auto px-44 pb-20">
            <div className="flex justify-between">
              <h2 className="px-2 text-3xl font-bold">{props.listTitle}</h2>
              <button className="font-bold bg-yellow-300 px-4 font-sans rounded-md flex items-center gap-3" onClick={() => foodDispatch({ type: 'OPEN_FILTER_MODAL' })}>
                Filter <IoMdArrowDropdownCircle size={24} />
              </button>
            </div>
            <div className="flex flex-wrap">
              {foodList.length <= 0 ? (
                <div className="w-full font-sans text-3xl text-center font-bold text-yellow-400">
                  <p>This Restaurant Doesn't have any menu yet!</p>
                </div>
              ) : (
                foodList.map((resto) => (
                  <BigRestoListItem
                    key={resto.id ? resto.id : resto.ID}
                    id={resto.id ? resto.id : resto.ID}
                    image={resto.image_url ? resto.image_url : resto.ImageURL}
                    name={resto.name ? resto.name : resto.Name}
                    distance={'0,6 Km'}
                    landing={props.landing}
                    price={resto.Price == '0' ? 'Free' : rupiah(resto.Price)}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BigRestoList;

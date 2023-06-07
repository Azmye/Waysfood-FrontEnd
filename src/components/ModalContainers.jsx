import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from './modal/Login';
import Register from './modal/Register';
import MapContainer from './modal/MapContainer';
import ActiveCartConfirmation from './modal/ActiveCartConfirmation';
import { DropdownContext } from '../context/DropdownContext';
import FilterModal from './modal/FilterModal';
import { FoodContext } from '../context/FoodContext';

const ModalContainers = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  const [modalState, modalDispatch] = useContext(DropdownContext);
  const [foodState, foodDispatch] = useContext(FoodContext);
  return (
    <>
      {/* Login Modal */}
      {authState.isLogin && <Login />}
      {/* Register Modal */}
      {authState.isRegister && <Register />}
      {/* Confirmation Pen Order */}
      {modalState.isPenOrder && <ActiveCartConfirmation />}
      {/* Filter Modal */}
      {foodState.isFilterModal && <FilterModal />}
    </>
  );
};

export default ModalContainers;

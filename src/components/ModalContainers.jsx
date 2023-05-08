import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Login from './modal/Login';
import Register from './modal/Register';
import MapContainer from './modal/MapContainer';

const ModalContainers = () => {
  const [authState, authDispatch] = useContext(AuthContext);
  return (
    <>
      {/* Login Modal */}
      {authState.isLogin && <Login />}
      {/* Register Modal */}
      {authState.isRegister && <Register />}
      {/* Maps Modal */}
    </>
  );
};

export default ModalContainers;

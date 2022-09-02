import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'Redux/authSlice';

export const PrivatRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
};

import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';





const PrivateRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);

        if (loading) {
            return <div className="w-1/2 mx-auto"><span className="loading loading-spinner loading-lg h-screen"></span></div>
        }
    
        if (user) {
            return children;
        }
        return <Navigate to="/login"></Navigate>
  
    
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}
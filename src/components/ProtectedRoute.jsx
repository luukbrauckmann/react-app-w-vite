import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute({ children }) {
    const { authenticated } = useAuth();
    const location = useLocation();

    if (!authenticated) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}

export default ProtectedRoute;
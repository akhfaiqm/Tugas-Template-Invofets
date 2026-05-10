import { useAuthStore } from "../store/useAuthStore";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes(){
    const isAuthenticated = useAuthStore((state: { isAuthenticated: any; }) => state.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
}
    

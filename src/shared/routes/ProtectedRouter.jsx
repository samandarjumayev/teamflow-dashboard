import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRouter({ children }){
    const { isAuth } = useSelector(state => state.auth);

    if(!isAuth){
        return <Navigate to={'/login'} />
    }

    return children;
}
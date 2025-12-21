import { useSelector } from "react-redux";
import StartHomePage from "../../pages/public/StartHomePage";
import Home from "../../pages/dashboard/Home";

export default function AuthLayout(){
    const { isAuth } = useSelector(state => state.auth);

    if(!isAuth) {
        return <StartHomePage />
    }

    return <Home />
}
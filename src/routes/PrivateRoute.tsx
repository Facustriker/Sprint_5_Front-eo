import { Navigate } from "react-router-dom";

type PrivateRouteProps = {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({element}) => {

    const token = localStorage.getItem("tokenLogIn");

    if (token) {
        return element;
    }

    

    return <Navigate to="/" />
}

export default PrivateRoute;
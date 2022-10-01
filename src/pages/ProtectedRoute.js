
import {Navigate} from "react-router-dom";

const ProtectedRoute = ({children, user} )=> {

    if (!user) {
        return <Navigate to={'/'}/>;
    }
    return children;


    return(
        <div>protected route</div>
    )
}


export default ProtectedRoute;
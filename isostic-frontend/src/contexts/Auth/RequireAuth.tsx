import { useContext } from "react";
import Login from "../../Screens/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {

    const auth = useContext(AuthContext);

    if (!auth.user) {
        return <Login />;
    }
    return children;
}
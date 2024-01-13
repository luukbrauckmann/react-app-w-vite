import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")) || false);

    console.log(authenticated);

    const handleLogin = (username, password) => {
        // Check if username and password are not correct so they can display error messages
        if (username !== "uncinc") return;
        if (password !== "letmein") return;

        // Set login to true if username and password are correct
        if (username === "uncinc", password === "letmein") {
            setAuthenticated(true);
            localStorage.setItem("authenticated", true);

            let origin = location.state?.from?.pathname || '/';
            if (origin === "/logout") origin = "/";
            navigate(origin);
        };
    };

    const handleLogout = () => {
        setAuthenticated(false);
        localStorage.setItem("authenticated", false);
        navigate("/login");
    };

    const value = {
        authenticated,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
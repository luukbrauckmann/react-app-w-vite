import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState(JSON.parse(localStorage.getItem("authenticated")) || false);

    const handleLogin = (username, password) => {
        return new Promise((resolve, reject) => {
            // Set login to true if username and password are correct
            if (username === "uncinc" && password === "letmein") {
                setAuthenticated(true);
                localStorage.setItem("authenticated", true);
                resolve();
            } else {
                // Return error message if username or password are incorrect
                reject({
                    showUsernameMessage: username !== "uncinc",
                    showPasswordMessage: password !== "letmein"
                });
            };
        });
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
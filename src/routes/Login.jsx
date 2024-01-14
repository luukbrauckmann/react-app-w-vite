import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function Login() {
    const { onLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showUsernameMessage, setShowUsernameMessage] = useState(false);
    const [showPasswordMessage, setShowPasswordMessage] = useState(false);

    // Required to update the DOM when the state changes
    useEffect(() => { }, [showUsernameMessage, showPasswordMessage]);

    /**
     * Handle the login form submission
     * @param {React.FormEventHandler<HTMLFormElement>} event 
     */
    async function handleSubmit(event) {
        event.preventDefault();

        await onLogin(username, password)
            .then(() => {
                let origin = location.state?.from?.pathname || '/';
                if (origin === "/logout") origin = "/";
                navigate(origin);
            })
            .catch((error) => {
                setShowUsernameMessage(error.showUsernameMessage);
                setShowPasswordMessage(error.showPasswordMessage);
            })
    };

    return (
        <main>
            <header>
                <h1>Login</h1>
            </header>

            <div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__field">
                        <label htmlFor="username">Username</label>

                        <input
                            type="text"
                            id="username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        {showUsernameMessage && <small>Username is incorrect</small>}
                    </div>

                    <div className="form__field">
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {showPasswordMessage && <small>Password is incorrect</small>}
                    </div>

                    <div className="form__field">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login
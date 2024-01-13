import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

function Login() {
    const { onLogin } = useAuth();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [showUsernameMessage, setShowUsernameMessage] = useState(false);
    const [showPasswordMessage, setShowPasswordMessage] = useState(false);

    /**
     * Handle the login form submission
     * @param {React.FormEventHandler<HTMLFormElement>} event 
     */
    function handleSubmit(event) {
        event.preventDefault();
        onLogin(username, password);
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
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" />
                        {showUsernameMessage ?? (<small>Username is incorrect</small>)}
                    </div>

                    <div className="form__field">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                        {showPasswordMessage ?? (<small>Password is incorrect</small>)}
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
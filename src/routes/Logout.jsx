import { useEffect } from "react"
import { useAuth } from "../hooks/useAuth"

function Logout() {
    const { onLogout } = useAuth();

    useEffect(() => {
        onLogout();
    });

    return (
        <main>
            <header>
                <h1>Logout</h1>
            </header>

            <div>
                <p>You have been logged out.</p>
            </div>
        </main>
    );
};

export default Logout;
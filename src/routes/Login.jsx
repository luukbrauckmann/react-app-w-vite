function Login() {
    return (
        <main>
            <header>
                <h1>Login</h1>
            </header>

            <div>
                <form className="form">
                    <div className="form__field">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" />
                    </div>

                    <div className="form__field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
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
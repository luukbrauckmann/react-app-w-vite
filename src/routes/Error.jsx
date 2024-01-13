import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <main>
        <header>
            <h1>Oops!</h1>
        </header>

        <div>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    </main>
  )
}
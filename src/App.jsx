import { Routes, Route } from 'react-router-dom';


import AuthProvider from './providers/AuthProvider'

import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute';

import Home from "./routes/Home"
import Login from "./routes/Login"
import Logout from "./routes/Logout"
import Dashboard from "./routes/Dashboard"
import NotFound from "./routes/NotFound"

function App() {
    return (
        <AuthProvider>
            <Nav />

            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="dashboard" element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                } />
                <Route path="logout" element={
                    <ProtectedRoute>
                        <Logout />
                    </ProtectedRoute>
                } />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    )
}

export default App
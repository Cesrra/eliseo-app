import { Navigate, Route, Routes } from "react-router"
import { Login } from "../pages"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <Login /> } />
        {/* <Route path="register" element={ <RegisterPage /> } /> */}

        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}

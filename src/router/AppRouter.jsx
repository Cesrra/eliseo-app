import { Navigate, Route, Routes } from "react-router"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { CompanyRoutes } from "../company/routes/CompanyRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <CompanyRoutes /> } />
        <Route path="/auth/*" element={ <AuthRoutes /> } />
        <Route path="/*" element={ <Navigate to="/auth/login" /> } />
    </Routes>
  )
}

import { Navigate, Route, Routes } from "react-router"
import { Home } from "../pages"

export const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

import { Navigate, Route, Routes } from "react-router"
import { Articles, Reflections } from "../pages/blog"

export const BlogRoutes = () => {
  return (
    <Routes>
      <Route path="/articles" element={ <Articles /> } />
      <Route path="/reflections" element={ <Reflections /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

import { Navigate, Route, Routes } from "react-router"
import { Vision, Mision, Philosophy, Courses, Mentoring, Coaching, Consulting, PoliticalMarketing } from "../pages/corporation"

export const CorporationRoutes = () => {
  return (
    <Routes>
      <Route path="/vision" element={ <Vision /> } />
      <Route path="/mision" element={ <Mision /> } />
      <Route path="/philosophy" element={ <Philosophy /> } />
      <Route path="/courses" element={ <Courses /> } />
      <Route path="/mentoring" element={ <Mentoring /> } />
      <Route path="/coaching" element={ <Coaching /> } />
      <Route path="/consulting" element={ <Consulting /> } />
      <Route path="/political-marketing" element={ <PoliticalMarketing /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

import { Navigate, Route, Routes } from "react-router"
import { Conferences, Interviews, Podcast, Politics, Travels, Videos } from "../pages/events"

export const EventsRoutes = () => {
  return (
    <Routes>
      <Route path="/videos" element={ <Videos /> } />
      <Route path="/interviews" element={ <Interviews /> } />
      <Route path="/conferences" element={ <Conferences /> } />
      <Route path="/politics" element={ <Politics /> } />
      <Route path="/podcast" element={ <Podcast /> } />
      <Route path="/travels" element={ <Travels /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

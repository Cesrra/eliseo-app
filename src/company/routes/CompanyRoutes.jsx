import { Navigate, Route, Routes } from "react-router"
import { Home } from "../pages"
import { CorporationRoutes } from "./CorporationRoutes"
import { EventsRoutes } from "./EventsRoutes"
import { BlogRoutes } from "./BlogRoutes"
import { Books } from "../pages/books/Books"
import { About } from "../pages/About"
import { Team } from "../pages/Team"
import { Contacts } from "../pages/Contacts"

export const CompanyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/corporation/*" element={ <CorporationRoutes /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/events/*" element={ <EventsRoutes /> } />
      <Route path="/blog/*" element={ <BlogRoutes /> } />
      <Route path="/books" element={ <Books /> } />
      <Route path="/team" element={ <Team /> } />
      <Route path="/contacts" element={ <Contacts /> } />
      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}

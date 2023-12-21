import { Navbar } from "../../UI/navbar/Navbar";

export const CompanyLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
        { children }
    </div>
  )
}

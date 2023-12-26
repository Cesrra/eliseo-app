import { Navbar } from "../../UI/navbar/Navbar";

export const CompanyLayout = ({ children }) => {
  return (
    <>
    <Navbar />
    <div className="h-screen p-8">
      { children }
    </div>
    </>
  )
}

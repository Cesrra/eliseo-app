/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import { LogoCompany } from "../LogoCompany";
import { NavbarELements } from "./NavbarElements";
import { HandleMobileMenu } from "../HandleMobileMenu";

const navbar_elements = [
  {key: "Empresa", path: '/company', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Visión", path: '/company/vision'},
      {key: "Misión", path: '/company/mision'},
      {key: "Filosofía", path: '/company/philosophy'},
      {key: "Cursos", path: '/company/courses'},
      {key: "Mentorías", path: '/company/mentorships'},
      {key: "Coaching", path: '/company/coaching'},
      {key: "Consultorías", path: '/company/consultancies'},
      {key: "Marketing Político", path: '/company/political-marketing'},
    ]
  },
  {key: "Sobre Mí", path: '/about-us', hasDropDownMenu: false}, 
  {key: "Eventos", path: '/events', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Vídeos", path: '/events/videos'},
      {key: "Entrevistas", path: '/events/interviews'},
      {key: "Conferencias", path: '/events/conferences'},
      {key: "Política", path: '/events/politics'},
      {key: "Podcast", path: '/events/podcast'},
      {key: "Viajes", path: '/events/travel'},
    ]
  },
  {key: "Blog", path: '/about-us', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Artículos ", path: '/about-us/articles'},
      {key: "Pensamientos", path: '/about-us/reflections'},
    ]
  },
  {key: "Libros", path: '/books', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Vida Efectiva", path: '/books/effective-living'},
      {key: "Emprende", path: '/books/entrepreneurship'},
      {key: "Pensamientos", path: '/books/reflections'},
      {key: "Creciendo", path: '/books/growing'},
      {key: "Vivir con alegría", path: '/books/living-joy'},
      {key: "Liderazgo en Acción", path: '/books/leadership-action'},
    ]
  },
  {key: "Equipo", path: '/team', hasDropDownMenu: false},
  {key: "Contactos", path: '/contact-us', hasDropDownMenu: false}
]

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <nav className="bg-white h-20 w-screen">
        <div className="flex items-center h-full mr-4 font-medium justify-around p-4">
          <div
            aria-label="Company"
            title="Company"
            className="flex justify-between z-50 py-4 px-0  md:w-auto w-full"
          >
            <LogoCompany />
            <div className="text-3xl md:hidden">
              <HandleMobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            </div>
          </div>
          <NavbarELements navbar_elements={navbar_elements} isMobile={isMenuOpen} />
        </div>
      </nav>
    );
  };
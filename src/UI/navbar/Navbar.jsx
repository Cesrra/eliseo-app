/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react"
import { LogoCompany } from "../LogoCompany";
import { NavbarELements } from "./NavbarElements";
import { HandleMobileMenu } from "../HandleMobileMenu";

const navbar_elements = [
  {key: "Empresa", path: '/corporation', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Visión", path: '/corporation/vision'},
      {key: "Misión", path: '/corporation/mision'},
      {key: "Filosofía", path: '/corporation/philosophy'},
      {key: "Cursos", path: '/corporation/courses'},
      {key: "Mentorías", path: '/corporation/mentoring'},
      {key: "Coaching", path: '/corporation/coaching'},
      {key: "Consultorías", path: '/corporation/consulting'},
      {key: "Marketing Político", path: '/corporation/political-marketing'},
    ]
  },
  {key: "Sobre Mí", path: '/about', hasDropDownMenu: false}, 
  {key: "Eventos", path: '/events', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Vídeos", path: '/events/videos'},
      {key: "Entrevistas", path: '/events/interviews'},
      {key: "Conferencias", path: '/events/conferences'},
      {key: "Política", path: '/events/politics'},
      {key: "Podcast", path: '/events/podcast'},
      {key: "Viajes", path: '/events/travels'},
    ]
  },
  {key: "Blog", path: '/blog', hasDropDownMenu: true,
    dropDownMenus: [
      {key: "Artículos ", path: '/blog/articles'},
      {key: "Pensamientos", path: '/blog/reflections'},
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
  {key: "Contactos", path: '/contacts', hasDropDownMenu: false}
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
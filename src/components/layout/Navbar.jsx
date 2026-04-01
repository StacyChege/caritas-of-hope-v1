import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiMenu, HiX, HiHeart } from 'react-icons/hi'

const navLinks = [
    {name: "Home", path: "/"    },
    {name: "About", path: "/about"    },
    {name: "Programs", path: "/programs"    },
    {name: "Team", path: "/team"    },
    {name: "LatestNews", path: "/latest-news"    },
    {name: "Contact", path: "/contact"    },
]


export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)


    const[scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, []) // Empty array means "run this effect only once on mount"

    const closeMenu = () => setIsOpen(false)

    return (
        <nav className={"fixed top-0 left-0 right-0 z-50 transition-all duration-300" + (scrolled? "bg-white shadow" : "bg-transparent")}>

            {/* Inner Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-centerjustify-button h-16 md:h-20">

                    {/* Lefts: LOGO + ORG Name */}
                    <Link 
                    to="/"
                    className="flex items-center gap-3">
                        <div className="bg-caritas-magenta p-2 rounded-full text-white shrink-0">
                            <HiHeart className="w-5 h-5 " />
                        </div>

                        {/* Organisation Name. 
                             The colour changes based on scrollstate */}
                             <span className={"text-lg font-bold leading-tight  " + (scrolled ? "text-caritas-blue" : "text-white")}>
                                Caritas of <br /> Hope <br /> Foundation
                             </span>
                    </Link>

                    {/* Centre: Desktop Nav Links */}
                    <div className="hidden md:flex flex-1 justify-center items-center p-4 gap-10">
                        {navLinks.map((link) => (
                    
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                className={({ isActive}) => 
                                    "text-sm font-medium transition pb-1" + 
                                    (isActive ? "text-caritas-magenta border-b-2 border-caritas-magenta" 
                                    : (scrolled ? "text-gray-700 hover:text-caritas-magenta" : 
                                        "text-white hover:text-caritas-magenta"
                                    ))}>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right: Donate Button + Humburger */}
                    <div className="flex flex-col justify-center w-10 h-10 ml-auto md:hidden items-center gap-4">

                        {/* Donate Button */}
                        <Link 
                          to="/contact"
                          className="hidden md:flex bg-caritas-blue hover:bg-opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
                            Donate Now
                        </Link>

                        {/* Hamburger/ Close Button */}
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className={"flex flex-col items-center justify-center w-10 h-10 ml-auto md:hidden p-2 rounded-md transition " + 
                            (scrolled ? "text-caritas-blue " : "text-white")
                          }
                           // aria-label tells screen readers what this button does
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                           >
                             {isOpen ? (
                                <Hix className="w-6 h-6" />
                             ) : (
                                <HiMenu className="w-6 h-6" />
                             )}
                           </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute z-50 text-gray-800">
                    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">

                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                end={link.path === "/"}
                                onClick={closeMenu} 
                                className={({ isActive }) => 
                                    "block px-4 py-3 rounded-lg text-sm font-medium transition " + 
                                    (isActive ? 
                                        "bg-caritas-magenta text-white" 
                                        : "text-gray-700 hover:bg-gray-50 hover:text-caritas-magenta"
                                    )}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        {/* Mobile Donate Button */}
                        <Link
                        to="/contact"
                        onClick ={closeMenu}
                        className="mt-2 block text-center bg-caritas-blue hover:bg-opacity-90
                         text-white px-6 py-3 rounded-full text-sm font-semibold transition "
                           >
                            Donate Now
                        </Link>
                    </div>
                </div>
            )}

        </nav>
    )

   
}
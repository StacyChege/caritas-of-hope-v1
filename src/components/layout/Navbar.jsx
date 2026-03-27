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
                             <span className={"text-lg font-bold leading-tight " + (scrolled ? "text-caritas-blue" : "text-white")}>
                                Caritas of <br /> Hope <br /> Foundation
                             </span>
                    </Link>

                    {/* Centre: Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
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
                    <div className="flex items-center gap-4">

                        {/* Donate Button */}
                        <Link 
                          to="/contact"
                          className="hidden md:flex bg-caritas-blue hover:bg-opacity-90 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
                            Donate Now
                        </Link>

                        {/* Hamburger/ Close Button */}
                        <button
                          onClick={() => setIsOpen(!isOpen)}
                          className={"md:hidden p-2 rounded-md transition " + 
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
            
        </nav>
    )

   
}
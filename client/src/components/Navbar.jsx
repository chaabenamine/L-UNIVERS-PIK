import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { useAppContext } from "../context/AppContext";

// SVG icon for the "Mes Réservations" dropdown item
const BookIcon = () => (
  <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
  </svg>
)

const Navbar = () => {
    // 1. Updated NavLinks for the restaurant
    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'Le Menu', path: '/menu' }, // Changed from /rooms
        { name: "L'Art des Épices", path: '/experience' },
        { name: 'Notre Histoire', path: '/about-us' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { openSignIn } = useClerk()
    const location = useLocation()

    // Removed setShowHouseReg as we no longer register houses
    const { user, navigate, isOwner } = useAppContext()

    useEffect(() => {
        if (location.pathname !== '/') {
            setIsScrolled(true);
            return;
        } else {
            setIsScrolled(false)
        }
        setIsScrolled(prev => location.pathname !== '/' ? true : prev);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/90 shadow-md text-gray-800 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link to="/">
                <img src={assets.logo} alt="logo" className={`h-14 transition-all duration-300 ${isScrolled ? "opacity-90" : "invert"}`} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 font-medium">
                {navLinks.map((link, i) => (
                    // 2. Swapped <a> for <Link> to prevent full page reloads in React
                    <Link key={i} to={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-800 hover:text-[#C53030]" : "text-white hover:text-gray-200"} transition-colors`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-[#C53030]" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </Link>
                ))}

                {user && (
                    // 3. Changed "List Your House" to "Réserver"
                    <button 
                        className={`border px-5 py-1.5 text-sm font-semibold rounded-full cursor-pointer transition-all ${isScrolled ? 'border-[#C53030] text-[#C53030] hover:bg-[#C53030] hover:text-white' : 'border-white text-white hover:bg-white hover:text-black'}`} 
                        onClick={() => isOwner ? navigate('/owner') : navigate('/reservations')}
                    >
                        {isOwner ? 'Dashboard' : 'Réserver'}
                    </button>
                )}
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <img src={assets.searchIcon} alt="search" className={`${isScrolled ? 'opacity-70' : 'invert'} h-6 transition-all duration-500 cursor-pointer hover:scale-110`} />

                {user ?
                    (<UserButton>
                        <UserButton.MenuItems>
                            {/* 4. Translated My Bookings to Mes Réservations */}
                            <UserButton.Action label="Mes Réservations" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>)
                    :
                    (<button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 font-medium transition-all duration-500 ${isScrolled ? "text-white bg-[#C53030] hover:bg-red-800" : "bg-white text-black hover:bg-gray-100"}`}>
                        Connexion
                    </button>)
                }
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {user && <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Action label="Mes Réservations" labelIcon={<BookIcon />} onClick={() => navigate('/my-bookings')} />
                    </UserButton.MenuItems>
                </UserButton>}
                <img onClick={() => setIsMenuOpen(!isMenuOpen)} src={assets.menuIcon} alt="menu" className={`${isScrolled ? 'opacity-80' : 'invert'} h-6 cursor-pointer`} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-8 font-semibold text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-6 right-6 p-2" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeIcon} alt="close-menu" className={`h-6 opacity-60`} />
                </button>

                {navLinks.map((link, i) => (
                    <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-xl hover:text-[#C53030] transition-colors">
                        {link.name}
                    </Link>
                ))}

                {user && 
                    <button 
                        className="border-2 border-[#C53030] text-[#C53030] px-8 py-2 text-lg rounded-full cursor-pointer transition-all hover:bg-[#C53030] hover:text-white" 
                        onClick={() => {
                            setIsMenuOpen(false);
                            isOwner ? navigate('/owner') : navigate('/reservations');
                        }}
                    >
                        {isOwner ? 'Dashboard' : 'Réserver une table'}
                    </button>
                }

                {!user && 
                    <button onClick={() => { setIsMenuOpen(false); openSignIn(); }} className="bg-[#C53030] text-white px-10 py-3 text-lg rounded-full transition-all duration-500 shadow-md">
                        Connexion
                    </button>
                }
            </div>
        </nav>
    );
}

export default Navbar;
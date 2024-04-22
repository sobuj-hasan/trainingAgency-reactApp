import logo from '../assets/Images/logo.png'
// react icon
import { MdLanguage } from "react-icons/md";


const Navbar = () => {
    const navItems = [
        {link: "Home", path: "home"},
        {link: "Feature", path: "feature"},
        {link: "About", path: "about"},
        {link: "Pricing", path: "pricing"}
    ]
    return (
        <div>
            <nav className="bg-secondary h-20">
                <div className=''>
                    <div className="logo">
                        <a href="#" className=''>
                            <img className='h-20' src={logo} alt="Logo" />
                        </a>
                    </div>
                    {/* Showing navItems using map */}
                    <ul className='md:flex space-x-12'>
                        {
                            navItems.map(({link, path}) => <a key={link} href={path} className='block space-x my-2'>{link}</a>)
                        }
                    </ul>

                    {/* Language & Signup */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="#"><MdLanguage className='mr-3'/> Language</a>
                        <button className='bg-secondary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-indigo-300'>Sign Up</button>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;

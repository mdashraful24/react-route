import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/profile/:userId', name: 'Profile' }
    ];

    return (
        <nav className="text-black bg-indigo-500 p-5">
            <div onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                {
                    open === true ? <AiOutlineClose /> : <RiMenu2Line className="" />
                }
            </div>
            <ul className={`md:flex absolute md:static ${open ? 'top-12' : '-top-60'} bg-indigo-500 rounded-xl px-6 pb-2 duration-1000`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
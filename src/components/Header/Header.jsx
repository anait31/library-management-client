import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
const Header = () => {

    const { user, handleSignOut } = useContext(AuthContext)

    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/books'}>All Books</Link></li>
        <li><Link to={'/add-books'}>Add Book</Link></li>
        <li><Link to={'/borrowed-books'}>Borrowed Books</Link></li>
    </>

    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm z-20 dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} className="text-xl">LMS</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end z-20">
                    {user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button onClick={handleSignOut}>Logout</button></li>
                        </ul>
                    </div> : <Link to={'/login'}>Login</Link>}
                </div>
            </div>
        </div >
    );
};

export default Header;
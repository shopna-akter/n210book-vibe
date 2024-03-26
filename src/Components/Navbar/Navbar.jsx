import { NavLink } from "react-router-dom";
import './link.css'
const Navbar = () => {
    const navlink = <>
        <NavLink className='text-xl font-bold mr-2' activeClassName="active" to='/Home'>Home</NavLink>
        <NavLink className='text-xl font-bold mr-2' activeClassName="active" to='/ListedBooks'>ListedBooks</NavLink>
        <NavLink className='text-xl font-bold mr-2' activeClassName="active" to='/PagesToRead'>PagesToRead</NavLink>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 my-auto z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlink}
                        </ul>
                    </div>
                    <h1 className="text-2xl">Book Vibe</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-info mr-4">Sign In</button>
                    <button className="btn btn-success">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
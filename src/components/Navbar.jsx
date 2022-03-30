import React from "react";
import { Link } from "react-router-dom";
// taken from free tailwind starter kit by creative-tim
//CONNECT THE LINKS TO THE CORRECT PAGES
export default function Navbar({ admin, setAdmin }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              <Link onClick={() => {setNavbarOpen(false)}} to="/">Shutter Brothers Tracking</Link> 
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <div
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <Link onClick={() => {setNavbarOpen(false)}} className="ml-2" to="/">Track Your Order</Link>
                </div>
              </li>
             {!admin && <li className="nav-item">
                <div
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <Link onClick={() => {setNavbarOpen(false)}} className="ml-2" to="/login">Administrator Login</Link>
                </div>
              </li>}
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.shutterbrothersllc.com/"
                >
                    <span className="ml-2">Back to Main Site</span>
                </a>
              </li>
             {admin && <li className="nav-item">
                <div
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <Link onClick={() => {setNavbarOpen(false)}} className="ml-2" to="/admin/all">Administrator Home</Link>
                </div>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
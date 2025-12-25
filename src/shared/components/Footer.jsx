import { AtSign, Github, Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";
import logoLight from '../../../public/logos/teamflow-light.png'

export default function Footer(){
  return <>
    <div className="">
        <div className="w-full px-[32px] mx-auto p-4 py-6 lg:py-8">
            <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <p className="flex items-center">
                    <img src={logoLight} className="h-7 me-3" alt="FlowBite Logo" />
                    <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">Team<span className="text-[#1db6b5]">Flow</span></span>
                </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Documentation</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4">
                            <NavLink to={'/cart'} className="hover:underline">API/Reference</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/users'} className="hover:underline">Technical</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Open Source</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4">
                            <NavLink to={'/all_products'} className="hover:underline ">UI Component</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/Categories'} className="hover:underline">State Management</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Information</h2>
                    <ul className="text-body font-medium">
                        <li className="mb-4">
                            <NavLink to={'/about'} className="hover:underline">About</NavLink>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-body sm:text-center">© 2025 <NavLink to={'/'} className="hover:underline">TeamFlow</NavLink>. Created by <span className="text-[#1db6b5]">Samandar.</span>
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://www.instagram.com/developer_samandar" className="text-body hover:text-heading">
                    <Instagram size={20} />
                    <span className="sr-only">Instagram page</span>
                </a>
                <a href="https://github.com/samandarjumayev" className="text-body hover:text-heading ms-5">
                    <Github size={20} />
                    <span className="sr-only">GiHub community</span>
                </a>
                <a href="https://www.linkedin.com/in/developersamandar/" className="text-body hover:text-heading ms-5">
                    <Linkedin size={20} />
                    <span className="sr-only">Linked page</span>
                </a>
                <a href="https://www.gmail.com/" className="text-body hover:text-heading ms-5">
                    <AtSign size={20} />
                    <span className="sr-only">Gmail</span>
                </a>
            </div>
        </div>
        </div>
    </div>

  </>
}
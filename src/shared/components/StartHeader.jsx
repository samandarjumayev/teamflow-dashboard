import { ChevronDown, ChevronRight, Code, FileText, LayoutTemplate, Menu, Search, Wallet, Workflow } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logoPNG from '../../../public/logos/teamflow-light.png'

export default function StartHeader(){
    const [hideMenu, setHideMenu] = useState(false)
    
    // Ozgina scroll bo'lganda Header orqa rangini o'zgartirishi uchun
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        })
    }, [])
    // -----------------------------------------------------------------

    return <div className={`${scrollY > 0 ? `bg-[#0d1117] shadow-lg` : ``} w-full h-[72px] flex items-center sticky top-0 left-0 z-10 transition-all duration-200 selection:bg-white/0`}>
        <div className="px-[32px] mx-auto w-full flex items-center justify-between h-full">

            <div className="h-full flex items-center gap-8">
                <div className="h-full flex items-center gap-2 cursor-pointer">
                    <img src={logoPNG} alt="" className="h-[40px]" />
                    <h1 className="font-[monospace] font-semibold text-[25px]">Team<span className="text-[#1db6b5]">Flow</span></h1>
                </div>

                <div className="h-full hidden lg:flex items-center gap-4 font-semibold">
                    <NavLink to={'/'} className={`flex items-center text-[16px] gap-1 hover:text-[#acadc9]`}>
                        <p>Platform</p> 
                    </NavLink>
                    <NavLink to={'/'} className={`flex items-center text-[16px] gap-1 hover:text-[#acadc9]`}>
                        <p>Pricing</p> 
                    </NavLink>
                    <NavLink to={'/'} className={`flex items-center text-[16px] gap-1 hover:text-[#acadc9]`}>
                        <p>Documentation</p> 
                        <ChevronDown size={17} color="#80819b" className="mt-1" /> 
                    </NavLink>
                    <NavLink to={'/'} className={`flex items-center text-[16px] gap-1 hover:text-[#acadc9]`}>
                        <p>Open Source</p> 
                        <ChevronDown size={17} color="#80819b" className="mt-1" /> 
                    </NavLink>
                </div>
            </div>

            <div className="h-full flex items-center gap-4 lg:gap-7">
                <div className={`border border-[#a7b3c3] xl:w-[340px] bg-[#262e47] shadow-lg rounded-[7px] hidden lg:flex items-center gap-2 py-[6px] px-2`}>
                    <Search color="#80819b" size={17} />
                    <input type="text" placeholder="Search something..." className="xl:flex hidden flex-1 h-full text-[14px] outline-none placeholder:text-[#ccc] placeholder:font-light placeholder:tracking-[0.5px] placeholder:text-[14px]" />
                    <Workflow color="#80819b" size={17} className="xl:flex hidden" />
                </div>

                <NavLink to={'/login'} className={`text-[14px] hover:text-[#a7b3c3] transition-all duration-200 border lg:border-none py-[5px] px-4 lg:p-0 rounded-[7px]`}>Login</NavLink>
                <NavLink to={'/signup'} className={`lg:flex hidden border py-[6px] px-4 rounded-[7px] text-[14px] hover:border-[#a7b3c3] hover:text-[#a7b3c3] transition-all duration-200`} >Sign Up</NavLink>
                <button onClick={() => setHideMenu(true)} className="lg:hidden flex outline-none transition-all duration-150 active:duration-50 active:scale-95 cursor-pointer">
                    <Menu />
                </button>
            </div>

            {/* Hide Menu */}
            <div 
                onClick={() => setHideMenu(false)} 
                className={`
                    ${hideMenu ? 'translate-x-0' : 'translate-x-[100%]'} 
                    fixed flex top-0 right-0 lg:hidden w-full sm:w-[300px] h-screen flex justify-end bg-[#0d1117]/20 backdrop-blur-[2px] transition-all duration-500
                `}>
                <div onClick={(e) => e.stopPropagation()} className={`w-full bg-[#0d1117] h-full transition-all duration-200`}>
                    <div className="w-full h-[50px] py-1 flex relative items-center justify-center border-b border-zinc-800">
                        <button onClick={() => setHideMenu(false)} className="absolute left-0 top-0 h-full px-3 text-[#1db6b5] transition-all duration-150 active:duration-50 active:scale-95 cursor-pointer">
                            <ChevronRight size={30} />
                        </button>
                        <img src={logoPNG} alt="" className="h-[33px]" />
                    </div>

                    <div className="flex flex-col gap-2 px-4 pt-4">

                        <div className={`border border-[#a7b3c3] xl:w-[340px] bg-[#262e47] shadow-lg rounded-[7px] flex items-center justify-between gap-2 py-[6px] px-2 mb-3`}>
                            <Workflow color="#80819b" size={17} />
                            <input type="text" placeholder="Search something..." className="flex-1 h-full text-[14px] outline-none placeholder:text-[#ccc] placeholder:font-light placeholder:tracking-[0.5px] placeholder:text-[14px]" />
                            <Search color="#80819b" size={17} />
                        </div>

                        <NavLink 
                            to={`/`}
                            className={`border border-zinc-700 flex items-center justify-center sm:justify-start gap-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-150 active:duration-50 active:scale-95 bg-white/5`}>
                            <LayoutTemplate size={17} />
                            Platform
                        </NavLink>
                        <NavLink 
                            to={`/`}
                            className={`border border-zinc-700 flex items-center justify-center sm:justify-start gap-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-150 active:duration-50 active:scale-95 bg-white/5`}>
                            <Wallet size={17} />
                            Pricing
                        </NavLink>
                        <NavLink 
                            to={`/`}
                            className={`border border-zinc-700 flex items-center justify-center sm:justify-start gap-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-150 active:duration-50 active:scale-95 bg-white/5`}>
                            <FileText size={17} />
                            Documentation
                        </NavLink>
                        <NavLink 
                            to={`/`}
                            className={`border border-zinc-700 flex items-center justify-center sm:justify-start gap-2 py-2 px-4 rounded-lg cursor-pointer transition-all duration-150 active:duration-50 active:scale-95 bg-white/5`}>
                            <Code size={17} />
                            Open Source
                        </NavLink>
                        <NavLink 
                            to={`/`}
                            className={`bg-[#238636] w-full py-2 font-semibold flex items-center justify-center rounded-lg mt-2 transition-all duration-150 active:duration-50 active:scale-95`}>
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
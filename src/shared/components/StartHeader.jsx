import { ChevronDown, Search, Workflow } from "lucide-react";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function StartHeader(){
    
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
                    <img src="../../../public/logos/teamflow-light.png" alt="" className="h-[40px]" />
                    <h1 className="font-[monospace] font-semibold text-[25px]">Team<span className="text-[#1db6b5]">Flow</span></h1>
                </div>

                <div className="h-full flex items-center gap-4 font-semibold">
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

            <div className="h-full flex items-center gap-7">
                <div className={`border border-[#a7b3c3] w-[340px] bg-[#262e47] shadow-lg rounded-[7px] flex items-center gap-2 py-[6px] px-2`}>
                    <Search color="#80819b" size={17} />
                    <input type="text" placeholder="Search something..." className="flex-1 h-full text-[14px] outline-none placeholder:text-[#ccc] placeholder:font-light placeholder:tracking-[0.5px] placeholder:text-[14px]" />
                    <Workflow color="#80819b" size={17} />
                </div>

                <NavLink to={'/login'} className={`text-[14px] hover:text-[#a7b3c3] transition-all duration-200`}>Login</NavLink>
                <NavLink to={'/signup'} className={`border py-[6px] px-4 rounded-[7px] text-[14px] hover:border-[#a7b3c3] hover:text-[#a7b3c3] transition-all duration-200`} >Sign Up</NavLink>
            </div>
        </div>
    </div>
}
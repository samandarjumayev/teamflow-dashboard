import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

export default function StartHeader(){
    
    // Ozgina scroll bo'lganda Header orqa rangini o'zgartirishi uchun
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            setScrollY(window.scrollY);
        })
    }, [])
    // -----------------------------------------------------------------

    return <div className={`${scrollY > 0 ? `bg-[#0d1117]` : ``} w-full h-[72px] flex items-center sticky top-0 left-0 z-10 transition-all duration-300`}>
        <div className="container flex items-center justify-between h-full">
            <div className="h-full border flex items-center gap-8">
                <div className="h-full flex items-center gap-2">
                    <img src="../../../public/logos/teamflow-light.png" alt="" className="h-[40px]" />
                    <h1 className="font-[monospace] font-semibold text-[25px]">Team<span className="text-[#1db6b5]">Flow</span></h1>
                </div>

                <div className="h-full flex items-center gap-2 font-semibold">
                    <NavLink>Documentation</NavLink>
                    <NavLink>About</NavLink>
                    <NavLink>Sources</NavLink>
                    <NavLink>Developers</NavLink>
                </div>
            </div>

            <div className="border h-full flex items-center gap-2">
                <NavLink to={'/login'}>Login</NavLink>
                <NavLink to={'/login'}>Sign Up</NavLink>
            </div>
        </div>
    </div>
}
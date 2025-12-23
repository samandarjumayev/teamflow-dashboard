import { ChevronRight } from "lucide-react";
import StartHeader from "../../shared/components/StartHeader";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import cloudPNG from '../../../public/cloud.png'
import video from '../../../public/videos/Mirjalol Nematov - Malak.mp4'

export default function StartHomePage(){
    const [viewPNG, setViewPNG] = useState(false);

    // Ozgina scroll bo'lganda Header orqa rangini o'zgartirishi uchun
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        });

        setTimeout(() => {
            setViewPNG(true)
        }, 1000)
    }, [])

    return <div className="w-full min-h-screen bg-[linear-gradient(180deg,#010336_0%,#0a0f2c_40%,#020617_100%)] text-white">
        <StartHeader />
        
        <div className={`${scrollY > 0 ? 'z-[0]' : ''} sticky top-[72px] left-0 px-[32px] mx-auto w-full h-[calc(100vh-72px)] selection:bg-white/0 cursor-context-menu transition-all duration-800`}>

            <div className={`
                w-full h-full flex items-center justify-center flex-col gap-3 transition-all duration-700
                ${scrollY > 100 ? `${scrollY > 250 ? `opacity-0 scale-60` : `opacity-50 scale-90`}` : ``}
            `}>
                <NavLink className={`bg-[linear-gradient(90deg,#0A0B5F_0%,#242B8E_50%,#453F9A_100%)] flex gap-5 items-center py-3 md:py-4 px-5 md:px-7 border border-[#30363d] rounded-full mb-4 transition-all duration-150 active:duration-50 active:scale-97`}>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/128/3196/3196017.png" 
                        alt="buqalamun, hamilyon" 
                        className="h-[37px] md:h-[45px]" 
                    />
                    <p className="text-[17px] md:text-[20px] tracking-[0.5px] font-semibold">Create your team on TeamFlow</p>
                    <ChevronRight size={19} />
                </NavLink>

                <h2 className={`text-[47px] md:text-[54px] lg:text-[64px] lg:my-6 font-semibold text-center leading-[54px] md:leading-[64px]`}>Build real projects with your team.</h2>
                <p className="text-[14px] md:text-[20px] text-[#cacaca] text-center my-4 leading-[18px] md:leading-[27px]">Collaborate with other developers, manage tasks, and <br /> turn ideas into real working products — all in one place.</p>

                <div className="flex z-5 items-center gap-4 mb-14 md:flex-row flex-col">

                    <div className={`bg-white flex items-center gap-1 p-1 rounded-[8px] h-[50px] sm:h-[55px]`}>
                        <input type="text" placeholder="Enter your email" className="placeholder:text-[#6d6d6d] text-black text-[14px] sm:text-[16px] font-semibold outline-none h-full px-3 sm:px-5" />
                        <button className="bg-[#1a7f37] text-white h-full flex items-center gap-1 rounded-[6px] px-6 font-semibold text-[14px] sm:text-[18px] cursor-pointer transition-all duration-150 active:duration-50 active:scale-95">
                            Sign up for TeamFlow
                        </button>
                    </div>

                    <NavLink to={'/'} className={`border-2 h-[55px] px-15 rounded-[8px] hidden md:flex items-center justify-center text-[18px] font-semibold cursor-pointer transition-all duration-150 active:duration-50 active:scale-95`}>
                        Login
                    </NavLink>
                </div>
            </div>

            <div className={`fixed bottom-0 right-0 w-full flex items-center justify-between`}>
                <img 
                    src={cloudPNG} 
                    alt="" 
                    className={`
                        ${viewPNG ? 'translate-x-[-20px]' : 'translate-x-[-100%]'} 
                        ${scrollY > 0 ? `translate-x-[-100%] translate-y-[20%]` : `translate-x-[-20px] translate-y-[10px]`} 
                        w-[40%] scale-x-[-1] transition-all duration-1000`
                    }
                />
                <img 
                    src={cloudPNG} 
                    alt="" 
                    className={`
                        ${viewPNG ? 'translate-x-[20px]' : 'translate-x-[100%]'} 
                        ${scrollY > 0 ? `translate-x-[100%] translate-y-[20%]` : `translate-x-[20px] translate-y-[10px]`} 
                        w-[40%] transition-all duration-1000`
                    }
                />
            </div>

        </div>

        <div className={`relative w-full border min-h-[500px] px-[32px] max-w-[1100px] mx-auto`}>
            <div>
                <video 
                    src={video} 
                    autoPlay 
                    loop 
                    muted
                    playsInline
                ></video>
            </div>
        </div>
        
    </div>
}
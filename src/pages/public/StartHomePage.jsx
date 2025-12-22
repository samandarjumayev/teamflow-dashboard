import { ChevronRight } from "lucide-react";
import StartHeader from "../../shared/components/StartHeader";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import cloudPNG from '../../../public/cloud.png'

export default function StartHomePage(){
    // Ozgina scroll bo'lganda Header orqa rangini o'zgartirishi uchun
    const [scrollY, setScrollY] = useState(0)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        })
    }, [])

    return <div className="w-full min-h-screen bg-[linear-gradient(180deg,#010336_0%,#0a0f2c_40%,#020617_100%)] text-white">
        <StartHeader />
        
        <div className={`relative px-[32px] mx-auto w-full h-[calc(100vh-72px)] flex items-center justify-center flex-col gap-3 selection:bg-white/0 cursor-context-menu`}>
            <NavLink className={`bg-[linear-gradient(90deg,#0A0B5F_0%,#242B8E_50%,#453F9A_100%)] flex gap-5 items-center py-4 px-7 border border-[#30363d] rounded-full mb-4 transition-all duration-150 active:duration-50 active:scale-97`}>
                <img 
                    src="https://cdn-icons-png.flaticon.com/128/3196/3196017.png" 
                    alt="buqalamun, hamilyon" 
                    className="h-[45px]" 
                />
                <p className="text-[20px] tracking-[0.5px] font-semibold">Create your team on TeamFlow</p>
                <ChevronRight size={19} />
            </NavLink>

            <h2 className={`text-[64px] font-semibold text-center leading-[64px]`}>Build real projects with your <br /> team.</h2>
            <p className="text-[20px] text-[#cacaca] text-center my-4 leading-[27px]">Collaborate with other developers, manage tasks, and turn <br /> ideas into real working products — all in one place.</p>

            <div className="flex z-5 items-center gap-4 mb-14">

                <div className={`bg-white flex items-center gap-1 p-1 rounded-[8px] h-[55px]`}>
                    <input type="text" placeholder="Enter your email" className="placeholder:text-[#6d6d6d] text-black text-[16px] font-semibold outline-none h-full px-5" />
                    <button className="bg-[#1a7f37] text-white h-full rounded-[6px] px-6 font-semibold text-[18px] cursor-pointer transition-all duration-150 active:duration-50 active:scale-95">Sign up for TeamFlow</button>
                </div>

                <NavLink to={'/'} className={`border-2 h-[55px] px-15 rounded-[8px] flex items-center justify-center text-[18px] font-semibold cursor-pointer transition-all duration-150 active:duration-50 active:scale-95`}>
                    Login
                </NavLink>
            </div>


            <div className={`fixed bottom-0 right-0 w-full flex items-center justify-between`}>
                <img src={cloudPNG} alt="" className={`${scrollY > 0 ? `translate-x-[-100%] translate-y-[20%]` : `translate-x-[-20px] translate-y-[10px]`} w-[40%] scale-x-[-1] transition-all duration-1000`}/>
                <img src={cloudPNG} alt="" className={`${scrollY > 0 ? `translate-x-[100%] translate-y-[20%]` : `translate-x-[20px] translate-y-[10px]`} w-[40%] transition-all duration-1000`}/>
                {console.log(scrollY)}
            </div>

        </div>

        <p className="px-[32px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dicta hic illo, enim dolor deserunt aspernatur repudiandae quibusdam provident facere incidunt necessitatibus perferendis eligendi quaerat, mollitia culpa delectus ab, itaque deleniti cumque cum debitis nisi soluta quod. Cupiditate reiciendis, ab culpa quos ratione reprehenderit laudantium aliquid sit rerum, exercitationem ipsam sed natus? Quidem voluptas praesentium, illum natus blanditiis ab officiis perferendis optio animi minus velit a labore eligendi at. Deleniti iusto blanditiis accusamus aut quasi et ullam vitae officia debitis odit minus deserunt omnis incidunt, quae excepturi voluptatibus, earum fugit, tempora beatae neque nostrum ipsam reiciendis rerum. Iure nihil commodi eum ad distinctio eius esse deleniti, voluptas soluta assumenda adipisci sit quibusdam veritatis quo inventore iusto minima incidunt, non natus quis. Adipisci eveniet veniam quaerat saepe sed, suscipit fugit accusantium, nobis ratione nam consequuntur non libero similique dignissimos necessitatibus molestias at, ut id laudantium odio eos maxime ea impedit error. Animi, sunt reprehenderit iusto magni dicta voluptatibus. Autem sunt eum deserunt vitae a excepturi qui iusto quia saepe natus minima incidunt reprehenderit, aliquam vero cum iure voluptatem tempora ullam omnis expedita! Eius magnam illum adipisci minus fuga molestias saepe temporibus eaque possimus? Praesentium architecto commodi dolore blanditiis dolorem. Aliquid harum eos natus illo commodi unde ut accusantium facilis autem culpa, nostrum nulla quos, quaerat, quis quasi esse minima qui. Debitis ipsam laborum fuga itaque consequatur, consectetur unde, iure, eveniet ullam repellat veritatis et iusto! Neque minus totam dicta perspiciatis, est excepturi inventore veniam amet corrupti id eos quod nobis dolore mollitia rerum laboriosam quia alias autem molestias, hic voluptatibus. Ea explicabo veniam, dolorum aut consequuntur sit deleniti eaque corrupti recusandae dolorem soluta perspiciatis velit, reprehenderit quasi rerum laboriosam, deserunt temporibus doloremque! Quaerat animi perferendis magnam eum voluptate reiciendis expedita voluptates aperiam. Quibusdam commodi natus vel sint rem officiis sunt autem delectus porro quisquam veniam voluptatem, earum iure beatae cumque quaerat nobis hic ipsa quis iste asperiores dolores. Perferendis voluptatibus atque, hic, accusantium est delectus, laborum veritatis eveniet officiis necessitatibus nisi fugiat deleniti fuga placeat sequi qui aperiam quam quod. Aliquid explicabo fuga qui dolorum? Culpa facilis nisi, possimus repellat sequi consectetur tenetur mollitia omnis, delectus rem doloremque alias ab, architecto nihil beatae eaque excepturi minus officia. Excepturi soluta reprehenderit, aperiam blanditiis libero dolorum optio, voluptate quia ut asperiores illum quo deserunt ratione quibusdam. Tenetur vitae doloribus sint officia explicabo, reiciendis suscipit quibusdam, aliquid blanditiis quia vel odit maxime cum corrupti rerum velit odio maiores consequuntur eos soluta dolores illo possimus saepe. Suscipit iusto enim, atque, incidunt pariatur exercitationem totam nihil officiis praesentium obcaecati eaque rerum et laborum ducimus unde hic non dicta eos voluptatum accusamus. Tempora quod expedita perspiciatis in a fugit, consequatur distinctio iste maiores aliquam, est impedit. Maxime eaque neque placeat numquam dolore laborum quibusdam possimus nostrum porro, quisquam rem iusto accusantium cumque dignissimos itaque magni, qui tempora expedita nihil repudiandae delectus. Natus aspernatur laudantium, recusandae tempore beatae necessitatibus quaerat. Doloribus minus unde vero ratione! Voluptatum nam nesciunt sunt culpa, accusamus est labore quae nulla dolor voluptatem architecto repellendus vero impedit assumenda velit necessitatibus cumque, perspiciatis, debitis non sequi officiis! Est, ratione? Aliquid beatae, quaerat non aliquam velit laudantium dolorem ratione nemo dolore magni deleniti sapiente mollitia delectus rerum minus labore saepe neque reiciendis itaque qui minima pariatur? Corrupti ipsam numquam delectus ducimus expedita nostrum saepe laboriosam tempore ratione? Corporis quas debitis ullam aliquid sapiente ratione atque rem, recusandae aut eaque tenetur iste nostrum dolore sed fugit consequuntur maiores numquam explicabo voluptate amet pariatur ex beatae. Consequuntur dolorem illo magni perferendis beatae eveniet cum accusamus exercitationem. Aspernatur, ipsum porro praesentium, laborum iste culpa vero repudiandae similique, saepe sequi soluta accusamus optio. Asperiores non expedita ullam nemo error? Explicabo sunt inventore alias ab, ad aliquam rerum voluptates, est magni ea cum quidem. Enim ipsa eaque sint vel blanditiis, deserunt delectus laboriosam officia quas consequatur praesentium repellat sequi perferendis nulla possimus facilis unde dolores distinctio, optio qui? Veritatis blanditiis repudiandae sint sed eligendi fuga minus voluptate ab hic? Assumenda officiis, reiciendis debitis porro voluptate odit totam. Doloribus nihil maxime voluptatem beatae. Enim hic eius distinctio voluptatem earum atque minima qui, culpa minus. Quae temporibus modi reiciendis quo et eius id sequi quisquam deleniti nemo dolorum, nam soluta at iusto voluptatibus, adipisci rem ex beatae sapiente officiis. Quasi placeat praesentium quisquam minima ipsa vitae architecto culpa iure? Labore earum harum ipsam assumenda ad cum dolore voluptates vel repellendus repellat modi, ratione doloremque veritatis provident porro at dolor et officia tenetur hic blanditiis quia, sunt quas! Excepturi, voluptates laborum ad ipsam necessitatibus illum, sed atque minima nihil, eveniet ipsum non nostrum veniam ex neque iste quis debitis voluptate quae nesciunt doloribus odit magnam quidem? Similique beatae ex laboriosam in velit, architecto ab perspiciatis repellat aspernatur suscipit iusto reiciendis officiis? Laboriosam, earum tenetur. Illum ducimus optio enim doloremque quibusdam! Ea distinctio facere similique ut explicabo corporis, necessitatibus excepturi. Optio aspernatur labore consequuntur beatae quasi, molestiae culpa maxime non libero, earum facere, illum magnam dolorem tempora harum ipsa et voluptatum. Ea ipsum, culpa perspiciatis eligendi cumque pariatur dicta eos quibusdam aut quo repudiandae provident quasi odio eaque corporis sapiente voluptate amet accusantium praesentium. Asperiores ipsa impedit libero autem quibusdam fugiat modi deserunt quisquam molestiae et? Autem nobis repellat vel officia quis ducimus dolores, ipsam error sequi, voluptate quo! Voluptate itaque inventore nam sapiente doloribus aspernatur nobis aliquid quaerat consequatur quos, sequi illum, ratione soluta et dolorum exercitationem ex eius quis atque sunt nesciunt eveniet aperiam at. Ab aliquam nostrum unde alias magni modi voluptate ad non placeat maxime nam quasi quaerat illo nemo molestias quisquam, consectetur optio. Voluptate, modi magnam, nulla fuga ducimus placeat quaerat assumenda unde eos ad maxime deserunt consequatur optio a ullam sint quo harum eveniet maiores temporibus repudiandae delectus fugit minus? Ipsa aut quae quasi, alias culpa minus minima expedita, cumque exercitationem nobis quia unde sequi iure commodi deleniti voluptates vero delectus temporibus est nulla mollitia? Temporibus odit, reprehenderit explicabo repellat consectetur alias blanditiis. Quas ex incidunt non. Ex quo corrupti facilis natus, temporibus id voluptate nemo tempore aliquam deserunt?</p>
        
    </div>
}
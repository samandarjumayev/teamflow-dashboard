import { useFormik } from 'formik'
import logo from '../../../public/logos/teamflow-light.png'
import { loginSchema } from '../../features/auth/validations/loginSchema'
import { NavLink } from 'react-router-dom'

const initialValues = {
    username: '',
    password: ''
}

export default function Login(){
    const { values, errors, handleSubmit, handleBlur, handleChange, touched } = useFormik({
        initialValues,
        onSubmit: (value) => {
            console.log(value)
        },
        validationSchema: loginSchema
    })

    return <>
        <div className={`relative bg-[#0d1117] w-full h-[calc(100vh-55px)] text-white flex items-center justify-center`}>
            <form onSubmit={handleSubmit} action="" className="w-[400px] flex items-center justify-center flex-col gap-2">
                <img 
                    src={logo} 
                    alt="TeamFlow logo png" 
                    className={`w-[50px]`}
                />
                <h2 className='text-3xl mb-2 font-semibold'>Login to Team<span className='text-[#1db6b5]'>Flow</span></h2>

                <div className='w-full flex flex-col gap-1'>
                    <p>Username</p>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={values.username}
                        placeholder='Your username'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className='border w-full py-2 px-4 rounded-lg border-zinc-700 outline-none focus:ring-blue-600 focus:ring-2 focus:outline-none focus:border-none' 
                    />
                    <p className='text-red-500 text-[13px]'>{touched.username && errors.username}</p>
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <span className='flex items-center justify-between w-full'>
                        <p>Password</p>
                        <NavLink to={`/login`} className={`text-[#4493f8] text-[14px] hover:underline`}>Forgot Password</NavLink>
                    </span>
                    <input 
                        type="password" 
                        name="password" 
                        id="password"
                        value={values.password}
                        placeholder='Your Password'
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className='border w-full py-2 px-4 rounded-lg border-zinc-700 focus:ring-blue-600 focus:ring-2 focus:outline-none focus:border-none' 
                    />
                    <p className='text-red-500 text-[13px]'>{touched.password && errors.password}</p>
                </div>

                <button type='submit' className='bg-[#238636] w-full py-2 cursor-pointer mt-3 rounded-lg text-[17px] transition-all duration-150 active:duration-50 active:scale-95'>
                    Login
                </button>

                <div className='w-full flex items-center justify-between gap-2 my-4'>
                    <div className='flex-1 h-[1px] bg-zinc-700'></div>
                    <p>or</p>
                    <div className='flex-1 h-[1px] bg-zinc-700'></div>
                </div>

                <NavLink to={`/login`} className={`bg-[#212830] border border-zinc-700 rounded-lg w-full py-2 flex items-center justify-center gap-2 transition-all duration-150 active:duration-50 active:scale-95`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="google icon" className='w-[17px]' />
                    <p className='text-[14px] font-semibold'>Continue with Google</p>
                </NavLink>
                <NavLink to={`/login`} className={`bg-[#212830] border border-zinc-700 rounded-lg w-full py-2 flex items-center justify-center gap-2 transition-all duration-150 active:duration-50 active:scale-95`}>
                    <img src="https://cdn-icons-png.flaticon.com/128/179/179309.png" alt="google icon" className='w-[17px]' />
                    <p className='text-[14px] font-semibold'>Continue with Apple</p>
                </NavLink>
            </form>
        </div>

        <div className='bg-[#151b23] w-full h-[55px] flex items-center justify-center'>
            <p className='text-zinc-400 text-[14px] font-[monospace] font-semibold'>Created by Samandar</p>
        </div>
    </>
}
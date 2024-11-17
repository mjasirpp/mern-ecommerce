import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useLoginMutation } from "../../redux/api/usersApiSlice"
import { setCredintials } from "../../redux/features/auth/authSlice"
import { toast } from "react-toastify"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, {isLoading}] =useLoginMutation()

    const {userInfo} = useSelector(state => state.auth)

    const {search} = useLocation()
    const sp = new URLSearchParams(search)
    const redirect = sp.get('redirect') || '/'

    useEffect(()=>{
        if(userInfo){
            navigate(redirect)
        }
    },[navigate, redirect, userInfo])

  return (
    <div>
        <section className="pl-[10rem] flex flex-wrap">
            <div className="mr-[4rem] mt-[5rem]">
                <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

                <form action="" className="container w-[40rem]">
                    <div className="my-[2rem]">
                        <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                        <input id="email" type="email" className="mt-1 p-2 border rounded w-full" value={email} 
                        onChange={e =>setEmail(e.target.value)}/>
                    </div>
                    <div className="my-[2rem]">
                        <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
                        <input id="password" type="password" className="mt-1 p-2 border rounded w-full" value={password} 
                        onChange={e =>setPassword(e.target.value)}/>
                    </div>

                    <button disabled={isLoading} type="submut" className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]">
                        {isLoading? "Siging In.." : "Sign In"}
                    </button>
  
                </form>
            </div>
        </section>
    </div>
  )
}

export default Login
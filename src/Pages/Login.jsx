import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
     
    const navigate = useNavigate() ; 
    const state = useContext(AppContext) ; 
    const [token , setToken] = state.token ; 
    const [isLogged , setIsLogged] = state.isLogged ; 
    const [formData, setFormData] = useState({ email: "", password: "" });
    const login = async()=>{
        try {
            const res = await axios.post('https://jeevan-rakshak-backend.onrender.com/user/login' , formData ) ; 
            const accessToken = res.data.accessToken ; 
            setToken(accessToken) ; 
            setIsLogged(true) ; 
            localStorage.setItem("firstLogin" , true) ; 
            navigate('/') ; 
            
        } catch (error) {
            console.log(error.message) ; 
        }

    }
    const changeHandler = (e) => {

        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        login() ; 

        
    }

    useEffect(()=>{
        if(isLogged){
            navigate('/') ; 
        }
    },[isLogged])

    return (
        <div>
            <div className="flex items-center max-lg:h-screen lg:h-[88vh] w-full justify-center bg-[url('../public/images/background.png')]  bg bg-no-repeat rounded-xl relative">
            <div className="backdrop-blur-md h-full w-full absolute right-0 left-0 top-0 bottom-0 z-10 rounded-xl opacity-30 bg-white"></div>
                <div className="w-[40%] min-w-[360px] bg-white rounded-xl shadow-xl px-10 pt-20 pb-16 m-4 md:max-w-sm md:mx-auto border z-20">
                    <span className="block w-full text-3xl uppercase font-bold mb-10">Login</span>
                    <form className="mb-4"  onSubmit={submitHandler}>
                        <div className="mb-4 md:w-full">
                            <label htmlFor="email" className="block text-xs mb-1">Username or Email</label>
                            <input className="w-full border rounded p-2 outline-none focus:border-[#2593D2]" type="email" name="email" id="email" placeholder="Username or Email" value = {formData.email} onChange = {changeHandler}/>
                        </div>
                        <div className="mb-6 md:w-full">
                            <label htmlFor="password" className="block text-xs mb-1">Password</label>
                            <input className="w-full border rounded p-2 outline-none focus:border-[#2593D2]" type="password" name="password" id="password" placeholder="Password"  value = {formData.password} onChange = {changeHandler}/>
                        </div>
                        <button className="bg-[#f45454] hover:bg-[#dc4545] text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
                    </form>
                    <a className="text-blue-700 text-center text-sm" href="/login">Forgot password?</a>
                    <p className="text-center mt-8">
                        <a href="./registration" className="text-grey-dark text-sm no-underline hover:text-grey-darker font-semibold">Create an account</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

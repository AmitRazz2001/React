import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Input, Button, Logo} from './index'
import authService from '../appwrite/auth'
import {login as storeLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

export default function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const signup = async(data) => {
        setError("");
        try{
            const userData =  await authService.createAccount(data)
            if(userData){
                const currentUserData = await authService.getCurrentUser()
                if(currentUserData) dispatch(storeLogin(currentUserData));
                navigate("/");
            }
        }
        catch(error){
            setError(error.message)
        }
    }
  return (
    <div className="flex items-center justify-center w-full">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%"/>
                </span>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight">Sign up your account</h2>
            <p className="mt-2 text-base text-center text-black/60">
                Already have any account?&nbsp;
                <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
                    Sign In
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

            {/* Signup Form */}

            <form onSubmit={handleSubmit(signup)}>
                <div className='space-y-5'>
                    <Input
                        label="Full Name: "
                        placeholder="Enter your name"
                        type="text"
                        {...register("name", {required:true})}
                    />
                    <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required:true,
                            validate:{
                                matchPatern:(value) => /^[\w\.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || "Email address must be a valid address",
                            }
                        })}
                    />
                    <Input
                        label="Password: "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {required:true})}
                    />
                    <Button
                     type='submit'
                     className='w-full'
                    >
                        Create Account
                    </Button>
                </div>
            </form>
        </div>
    </div>
  )
}


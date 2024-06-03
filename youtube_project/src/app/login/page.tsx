'use client'
import React, { useState } from "react";
import Link from 'next/link';

function Login(){
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    })
    return(
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-8 text-center">Login</h1>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email" 
                            name="email" 
                            type="email" 
                            value={user.email}
                            onChange={(e)=>setUser({...user,email: e.target.value})}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password" 
                            name="password" 
                            type="password" 
                            value={user.password}
                            onChange={(e)=>setUser({...user,password:e.target.value})}
                            placeholder="Enter Password"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                    </div>
                </form>
                <Link href="/signup">Are you a New User?</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;
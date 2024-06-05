'use client'
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Profile(){
    const router = useRouter();
    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logout successful');
            router.push('/login');
        } catch (error:any) {
            console.log(error.message);

            toast.error(error.message)
        }
    }
    return(
        <div>
            <div className="flex justify-center items-center text-lg font-bold">Profile Page</div>
            <button onClick={() => {

            }} className="w-20 h-10 bg-blue-500">Logout</button>
        </div>
    )
}
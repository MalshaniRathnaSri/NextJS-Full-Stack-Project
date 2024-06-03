export default function Profile({params}:any){
    return(
        <div>
            <div className="flex justify-center items-center text-lg font-bold">Profile Page {params.ids}</div>
        </div>
    )
}
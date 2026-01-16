import profile from "@/public/profile.jpg"
import {Image} from "next/dist/client/image-component";

export default function Hero() {
    return (<div className="flex flex-col-reverse md:flex-row items-center justify-center w-full ">
        <h1 className="text-6xl md:text-[5rem] m-8">Gerald Hill</h1>
        <div className="flex items-center justify-center w-70 h-70 m-12">
            <Image className="object-cover w-full h-full rounded-full" src={profile} alt="Photo of Gerald Hill"/>
        </div>
    </div>)
}
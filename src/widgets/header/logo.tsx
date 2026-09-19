import Link from "next/link";

interface LogoProps{
    name?: string;
    url?: string;
}

export function Logo({ name = "Укажите название сайта" , url = "/"}: LogoProps){
    return(
        <div className="">
            <Link href={String(url)} className=" text-lg text-white font-semibold transitions-colors duration-200 hover:text-white/60">{name}</Link>
            </div>
        );
}
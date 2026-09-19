import { MenuData } from "@/shared/data/menu.data";
import Link from "next/link";

export const Menu = () => {
    return(
        <menu className="flex items-center gap-6">
            {MenuData.map((item, key) => (
                    <li className="">
                        <Link href={item.uri} className="text-sm text-white font-medium uppercase duration-200 hover:text-blue-500">{item.label}</Link>
                    </li>
            ))}
        </menu>
    );
}
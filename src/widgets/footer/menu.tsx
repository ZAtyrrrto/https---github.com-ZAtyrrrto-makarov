import { FooterData } from "@/shared/data/footer.data";
import Link from "next/link";

const titles = ["Company", "Services", "Account", "Courses"];

export const Mena = () => {
    const itemsPerUl = 4
    const ulCount = FooterData.length / itemsPerUl

    const chunks = []

    for (let i = 0; i < ulCount; i++) {
        const start = i * itemsPerUl;
        const end = start + itemsPerUl;
        chunks.push(FooterData.slice(start, end))
    }

    return (
        <div className="flex w-full flex-wrap justify-around gap-8">
            {chunks.map((chunk, chunkIndex) => (
                <div>
                    <h3 className="mb-3 border-b w-8 text-white">{titles[chunkIndex]}</h3>
                    <ul className="space-y-1">
                        {chunk.map((item) => (
                            <li>
                                <Link href={item.uri} className="text-gray-400 font-light hover:text-white">{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <div>
                <h3 className="mb-4 border-b w-8 text-white">Subscribe</h3>
                <div className="grid">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-64 rounded border border-white px-3 py-2 text-sm text-gray-50 outline-none"
                    />
                    <button type="submit" className="my-4 py-2 rounded px-10 bg-white text-blue-950 hover:scale-102 duration-150">Subscribe</button>
                </div>
            </div>
        </div>
    );
};
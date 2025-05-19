import Link from "next/link";

export default function Header(){
    return (
        <header className="w-full h-[3.5rem] bg-transparent p-2">
            <div className="container mx-auto">
                <strong className="flex items-start text-xl font-bold uppercase float-left text-shadow-2xl text-shadow-blue-900 text-white mt-4">OREL Фильмы</strong>
            <nav className="float-right -mt-8">
                <ul className="flex items-center gap-12 mt-14">
                    <li><Link href="/" className="cursor-pointer transition duration-200 hover:border-b text-shadow-2xl text-shadow-blue-950 hover:scale110">Главная</Link></li>
                    <li><Link href="https//t.me/obr_orel_bot" className="cursor-pointer transition duration-200 hover:border-b text-shadow-2xl text-shadow-blue-950 hover:scale110">Тех поддержка</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
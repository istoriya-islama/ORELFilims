import { FaAngleDoubleDown } from "react-icons/fa";


export default function Cover(props) {
    return (
        <div className="w-full h-[500px] rounded-2xl bg-radial from-black to-blue-600 p-5">
            <h1 className="text-center text-2xl font-extrabold mt-45">{props.title}</h1>
            <p className="text-center text-lg font-extrabold mt-5">{props.aboutText}</p>
            <a href={`#${props.idLink}`}><FaAngleDoubleDown  className="mt-35 w-8 h-8 mx-150 animate-ping"/></a>
        </div>
    )
}
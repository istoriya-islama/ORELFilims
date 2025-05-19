import { FaAngleDoubleRight } from "react-icons/fa";


export default function Film(props) {
    return (
        <div className="w-[400px] h-[650px] p-5 rounded-2xl shadow-2xl shadow-blue-900 bg-gradient-to-b from-black to-blue-600">
            <img src={`/${props.pathImage}`} alt={props.altImage} className="w-full h-[550px]shadow-2xl shadow-black" />
            <h2 className="text-xl font font-extrabold float-left mt-2">{props.titleFilm}</h2>
            <button className="p-2 border rounded-2xl bg-black float-right mt-2"><a href={props.linkFilm}>Смотреть<FaAngleDoubleRight /></a></button>
       </div>
    )
}
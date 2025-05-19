import Cover from "./Components/js/Cover"
import Film from "./Components/js/Film"

export default function Home(){
  return (
  <div className="w-full h-full p-4">
    <Cover title="Давай смотреть..." aboutText="Смотри фильмы и сериалы с нами!" idLink="films"/>
    <br /><br />
    <div className="flex items-center justify-between gap-2">
      <Film pathImage="./Kuka.png" altImage="Кука защитник" titleFilm="Кука защитник" linkFilm="/pages/kuka-2025" />
      <Film pathImage="./MirJivotnih.png" altImage="Мир Животных" titleFilm="Мир Животных" linkFilm="/pages/MirJivotnih-2022-2025" />
      <Film pathImage="./halid.png" altImage="Халид ибн Валид" titleFilm="Халид ибн Валид" linkFilm="/pages/Halid-2024-2025" />
    </div>
    <br /><br />
    <div className="flex items-center justify-between gap-2">
      <Film pathImage="./SultanAhmad.png" altImage="Султан Ахмад" titleFilm="Султан Ахмад" linkFilm="/pages/SultanAhmad-2023-2024" />
    </div>
  </div>
  )
}
import Cover from "@/app/Components/js/Cover";

export default function Kuka(){
    return (
        <div>
            <Cover title="Кука защитник" aboutText="Смотри фильм кука защитник!" idLink="film"/>
            <br /><br />
            <div className="flex items-center justify-between gap-15">
                <img src="../../Kuka.png" alt="Кука защитник" className="w-[500px] h-[750px] rounded-2xl shadow-2xl shadow-blue-600" />
                <p className="text-center font-bold text-shadow-2xl text-shadow-blue-600">Год выпуска: 2025<br />
                   Жанр: фантастика, приключения, драма<br /><br />
                   
                   Описание фильма:<br /><br />
                   
                   В далёком замке на склоне вулкана Эльбрус живёт Кука — отважный защитник     природы и                справедливости. Вместе с командой из верных     соратников, включая командиров Пальца и Софтвера,                он     противостоит современным угрозам: от браконьеров и мучителей животных до     технологических                вторжений.
                   Когда над миром нависает новая опасность — загадочная техно-сила, разрушающая     баланс природы,                — Кука должен выйти из тени и вновь встать на     путь защиты. На его стороне — правда, храбрость…                и природа.
                   Фильм о том, как один персонаж может изменить судьбу целого мира.</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384"  frameBorder="0" src="https://mega.nz/embed/6V5liDhZ#HJrsOx5iv_nTeTUyIJPuXu5S_qputLlYcoRsAmLvd_Y" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
            </div>
        </div>
    )
}
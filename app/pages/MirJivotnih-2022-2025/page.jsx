'use client'
import Cover from "@/app/Components/js/Cover";
import { useEffect, useState } from "react";

export default function MirJivotnih(){
    const [isVisible, setIsVisible] = useState(false);
    
      useEffect(() => {
        const checkScrollPosition = () => {
          setIsVisible(window.scrollY > 300);
        };
    
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
          window.removeEventListener('scroll', checkScrollPosition);
        };
      }, []);
    
      const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    return (
        <div>
            <Cover title="Мир животных" aboutText="Смотри сериал мир животных!" idLink="film"/>
            <br /><br />
            <div className="flex items-center justify-between gap-15">
                <img src="../../MirJivotnih.png" alt="Кука защитник" className="w-[500px] h-[750px] rounded-2xl shadow-2xl shadow-blue-600" />
                <p className="text-center font-bold text-shadow-2xl text-shadow-blue-600 mx-50">Год выпуска: 2022-2025<br />
                   Жанр: приключения, драма<br /><br />
                   
                   Описание фильма:<br /><br />
                   
                   Про отважных животных</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="one"  frameBorder="0" src="https://mega.nz/embed/GR4RkAAT#F6hmyxvFw1oiOj7mJx6pKkiH6UAM6z0ap8RTeJyAWyg" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>1 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="two"  frameBorder="0" src="https://mega.nz/embed/2Aw0iZIR#JZ17EkmyKQjHikCGv968dK1J2dPIGjb6KQa2z9C2OsQ" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>2 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="tree"  frameBorder="0" src="https://mega.nz/embed/aQhgCYaC#-yJ8g3Z-qSIEeV1U4aIr6YJrot9b3VYmTfHpkC0btrQ" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>3 серия 1 часть</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="tree"  frameBorder="0" src="https://mega.nz/embed/HURBVAYL#u7RgmdhtkWarDKVKnYU8jJU-IKcEoBY1FIWLNU6WuRk" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>3 серия 2 часть</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="tree"  frameBorder="0" src="https://mega.nz/embed/6d4CzRwK#fmK2AbfaETCcqU2ULE7psEfqvdDY1gt-23Xx1VlfgDE" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>3 серия 3 часть</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="tree"  frameBorder="0" src="https://mega.nz/embed/PQp0SCrD#5LQbibGoa2lOkUY8JNmGkWCChmnbdMplGUfVduL92Eo" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>3 серия 4 часть</p>
            </div>
            
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="four"  frameBorder="0" src="https://mega.nz/embed/jZhjyDJa#GznOV59B3GuwRtLj2Rt_VY8NiIz97rVja2O4z_5xEMU" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>4 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="five"  frameBorder="0" src="https://mega.nz/embed/PUYmALRA#YfVw_mLLPUUbkG7lTPG4jFdnnPdtNr8WIgINbWz3bZI" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>5 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="six"  frameBorder="0" src="https://mega.nz/embed/TNg1XRZA#MLEIVi1XZx0y59J_T-oEOoEeMLNDBVlIDqWLVVbcHcw" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>6 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="seven"  frameBorder="0" src="https://mega.nz/embed/HEIzxY6A#jN9YrXdJ4lONHb3rOleEvdlfRzh0bnlVxEZpTos0hoo" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>7 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="eight"  frameBorder="0" src="https://mega.nz/embed/iN42ARKD#R9x-pxEHgE7uzBc4EPgXUohsuKLpwXfcE6DZSW1hezY" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>8 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="nine"  frameBorder="0" src="https://mega.nz/embed/zRAU0BJB#M1-tC9GlFkvX-_K2vt-oV8RH9lV26FTtM7jSSFAtI4A" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>9 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten"  frameBorder="0" src="https://mega.nz/embed/DZ53WYRI#KJLRu4MXdnwwLiAay8ZXrCjHVFZadIfkk1TsfytJrjU" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>10 серия</p>
            </div>
            <br /><br /><br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten-one"  frameBorder="0" src="https://mega.nz/embed/fE5lSZ4L#pmHLpPri0rQpIOOZZiv9qQc4Ng8lAqMMHZnaLFmiW2o" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>11 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten-two"  frameBorder="0" src="https://mega.nz/embed/TFARRRYC#4xyUHq4yNcIzUbv2pV0pBMY49po-KqyXvmKeGk18j1E" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>12 серия</p>
            </div>

            <div className={`w-1/12 p-3 border border-dotted border-white rounded-l-2xl fixed transition-transform duration-300 hover:scale-110 right-8.5 top-5 bg-neutral-900 text-center h-112 overflow-y-scroll scroll ${
            isVisible ? 'translate-x-0 shadow-blue-600/50 shadow-2xl' : 'translate-x-40 shadow-0'
        }`}>
           <h1 className="text-left text-xs font-bold">Серии:</h1>
           <h1 className="text-left text-xs font-bold">1 сезон</h1>
           <a href="#one" className="text-white transition-colors duration-500 hover:text-blue-950">1 серия</a><br />
           <a href="#two" className="text-white transition-colors duration-500 hover:text-blue-950">2 серия</a><br />
           <a href="#tree" className="text-white transition-colors duration-500 hover:text-blue-950">3 серия</a><br />
           <a href="#four" className="text-white transition-colors duration-500 hover:text-blue-950">4 серия</a><br />
           <a href="#five" className="text-white transition-colors duration-500 hover:text-blue-950">5 серия</a><br />
           <a href="#six" className="text-white transition-colors duration-500 hover:text-blue-950">6 серия</a><br />
           <a href="#seven" className="text-white transition-colors duration-500 hover:text-blue-950">7 серия</a><br />
           <a href="#eight" className="text-white transition-colors duration-500 hover:text-blue-950">8 серия</a><br />
           <a href="#nine" className="text-white transition-colors duration-500 hover:text-blue-950">9 серия</a><br />
           <a href="#ten" className="text-white transition-colors duration-500 hover:text-blue-950">10 серия</a><br />
           <h1 className="text-left text-xs font-bold">2 сезон</h1>
           <a href="#ten-one" className="text-white transition-colors duration-500 hover:text-blue-950">11 серия</a><br />
           <a href="#ten-two" className="text-white transition-colors duration-500 hover:text-blue-950">12 серия</a><br />
        </div>
        </div>
    )
}
'use client'
import Cover from "@/app/Components/js/Cover";
import { useEffect, useState } from "react";

export default function Kuka(){
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
            <Cover title="Халид ибн Валид" aboutText="Смотри мультфильм Халид ибн Валид!" idLink="film"/>
            <br /><br />
            <div className="flex items-center justify-between gap-15">
                <img src="../../halid.png" alt="Халид ибн Валид" className="w-[500px] h-[750px] rounded-2xl shadow-2xl shadow-blue-600" />
                <p className="text-center font-bold text-shadow-2xl text-shadow-blue-600 mx-50">Год выпуска: 2024-2025<br />
                   Жанр: исторический, приключения, драма<br /><br />
                   
                   Описание мультфильма:<br /><br />
                   
                  Про великого полковдца Халида ибн Валида</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="one" frameBorder="0" src="https://mega.nz/embed/jQYVxQKb#QzsMyIFP1XAom4yCLZIK0P7LuwSVZs4ITKs0u6cmY4g" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>1 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="two" frameBorder="0" src="https://mega.nz/embed/SQxyFSKB#vOZ_NxjeYa2MA1dKkrmgOM_FvBXWWlxQwBuKplxauv0" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>2 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="tree" frameBorder="0" src="https://mega.nz/embed/ORgD2JZD#5iWawpacCN2DfpimlxiOLat2BrF4aT_lEdEZg4KKhgg" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>3 серия</p>
            </div>
            <br /><br /><br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="four" frameBorder="0" src="https://mega.nz/embed/7dgExC7S#A6Si-1wkwH3PkMRk2G7VXS0bc5LYQRsn2xVND3zuFGE" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>4 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="five" frameBorder="0" src="https://mega.nz/embed/vFgBUT5C#7DyNBPrPhL9k3AL3_p_LLn5_visGK8gfJ2v9aSie75o" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>5 серия</p>
            </div>
            <br /><br /><br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="six" frameBorder="0" src="https://mega.nz/embed/CAZF2LDI#AQUJPP_38VZxpy_JDIWZz2lOnjZIXSzjvyfjCRDRLWY" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>6 серия</p>
            </div>

            <div className={`w-1/12 p-3 border border-dotted border-white rounded-l-2xl fixed transition-transform duration-300 hover:scale-110 right-8.5 top-5 bg-neutral-900 text-center h-112 overflow-y-scroll scroll ${
            isVisible ? 'translate-x-0 shadow-blue-600/50 shadow-2xl' : 'translate-x-40 shadow-0'
        }`}>
           <h1 className="text-left text-xs font-bold">Серии:</h1>
           <h1 className="text-left text-xs font-bold">1 сезон</h1>
           <a href="#one" className="text-white transition-colors duration-500 hover:text-blue-950">1 серия</a><br />
           <a href="#two" className="text-white transition-colors duration-500 hover:text-blue-950">2 серия</a><br />
           <a href="#tree" className="text-white transition-colors duration-500 hover:text-blue-950">3 серия</a><br />
           <h1 className="text-left text-xs font-bold">2 сезон</h1>
           <a href="#four" className="text-white transition-colors duration-500 hover:text-blue-950">4 серия</a><br />
           <a href="#five" className="text-white transition-colors duration-500 hover:text-blue-950">5 серия</a><br />
           <h1 className="text-left text-xs font-bold">3 сезон</h1>
           <a href="#six" className="text-white transition-colors duration-500 hover:text-blue-950">6 серия</a><br />
        </div>
        </div>
    )
}
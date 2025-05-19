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
            <Cover title="Султан Ахмад" aboutText="Смотри мультфильм Султана Ахмада!" idLink="film"/>
            <br /><br />
            <div className="flex items-center justify-between gap-15">
                <img src="../../SultanAhmad.png" alt="Султан Ахмад" className="w-[500px] h-[750px] rounded-2xl shadow-2xl shadow-blue-600" />
                <p className="text-center font-bold text-shadow-2xl text-shadow-blue-600 mx-50">Год выпуска: 2022-2025<br />
                   Жанр: фантастика, драма<br /><br />
                   
                   Описание фильма:<br /><br />
                   
                   Про Султана Ахмада</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="one"  frameBorder="0" src="https://mega.nz/embed/jBQzHT6Z#HBEWlrBWHvMlP2ufhDh5AxGVj7Ors2h7fo3-IIqdXUk" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>1 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="two"  frameBorder="0" src="https://mega.nz/embed/GVBGCQiQ#Qdiq9QzVBibWnAP3Dt4dxrx2in63PRWm-DaPwKupYy0" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>2 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="tree"  frameBorder="0" src="https://mega.nz/embed/PZBiGYrK#MsEsDFg5NZEMo1hP0LFwjfMTVUFM_g-i91fLqSYD9jo" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>3 серия</p>
            </div>          
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="four"  frameBorder="0" src="https://mega.nz/embed/SdJ3lRYb#XYwowO682WrvIlwzillCZZkxCGbSAtthsf1XJT6kDI0" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>4 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="five"  frameBorder="0" src="https://mega.nz/embed/iZ5FRC7Z#TcOTLLC5I2OL5s5gGtBVwKwUDHhRG9w4JZ8yvNLNDio" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>5 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="six"  frameBorder="0" src="https://mega.nz/embed/DJ53wB5K#jK3Hd0jmBF93bifAVEQpLzMgZrZ8ec369jLfIuwgIcE" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>6 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="seven"  frameBorder="0" src="https://mega.nz/embed/aIYS2KxD#vIiZpLiUyln-UuaxQt11DV_q9PANoxqdrhjvQQ6ZhEQ" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>7 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="eight"  frameBorder="0" src="https://mega.nz/embed/bB50iKKK#W8DK71BnAoz5X7MazWcvJCrue24kKxcgp31_7yWwEVg" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>8 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="nine"  frameBorder="0" src="https://mega.nz/embed/HAREQIxQ#negq9aSvkvK9vSBLFj4kYJjYDz_8LnmYZNsz6PtNqUU" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>9 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten"  frameBorder="0" src="https://mega.nz/embed/KZoSzLoa#J9ooc30a06ODNHMC_EIp0eLslg0oIFIpYfVn-5nADqw" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>10 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten-one"  frameBorder="0" src="https://mega.nz/embed/edYzGJjC#q4nPPw1Y3FBhKXF_xEG2vKyEkZEuM-XyBLaEK2VcClo" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>11 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten-two"  frameBorder="0" src="https://mega.nz/embed/TN4wlLyL#qssB1WxVSpRJaeS8v1Qd_DDyH4W7Q6HEosmTh_Ueli0" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>12 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten-tree"  frameBorder="0" src="https://mega.nz/embed/udIkwCLQ#6hWFFq6etQ9KWb1WgqrSyw98-CHOtzduIpOSFUnFxDA" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>13 серия</p>
            </div>
            <br /><br />
            <div className="mx-80">
                <iframe width="683" height="384" id="ten-four"  frameBorder="0" src="https://mega.nz/embed/uVZnTCKC#KeYRaR1jkHsulJtUnmhlVpDBV5L-mvRSuhM61mjTJro" allowFullScreen allow="fullscreen"  className="rounded-2xl shadow-2xl shadow-blue-600"></iframe>
                <br />
                <p>14 серия</p>
            </div>

            <div className={`w-1/12 p-3 border border-dotted border-white rounded-l-2xl fixed transition-transform duration-300 hover:scale-110 right-8.5 top-5 bg-neutral-900 text-center h-112 overflow-y-scroll scroll ${
            isVisible ? 'translate-x-0 shadow-blue-600/50 shadow-2xl' : 'translate-x-40 shadow-0'
        }`}>
           <h1 className="text-left text-xs font-bold">Серии:</h1>
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
           <a href="#ten-one" className="text-white transition-colors duration-500 hover:text-blue-950">11 серия</a><br />
           <a href="#ten-two" className="text-white transition-colors duration-500 hover:text-blue-950">12 серия</a><br />
           <a href="#ten-tree" className="text-white transition-colors duration-500 hover:text-blue-950">13 серия</a><br />
           <a href="#ten-four" className="text-white transition-colors duration-500 hover:text-blue-950">14 серия</a><br />
        </div>
        </div>
    )
}
import React from "react";
import UnderConstruction from "./UnderConstruction/UnderConstruction";
import './UnderConstruction/under-construction.css';

const App = () => {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="container mx-auto">
                <UnderConstruction />
            </div>
            <div>
                <div className="border-y border-white">
                    <div id='rssBlock'>
                        <p class="cnnContents">
                            <span class="marqueeStyle font-title">&nbsp;under construction * under construction * under construction * under construction * under construction * under construction *</span>
                                <span class="marqueeStyle2 font-title">&nbsp;under construction * under construction * under construction * under construction * under construction * under construction *</span>
                            </p>
                     </div>
                </div>]
                <footer className="flex justify-end px-4 py-6 md:px-8 md:py-8 t">
                    <a className="text-white px-3" target="_blank" rel="noreferrer" href="https://www.behance.net/vukbojanic">Behance</a>
                    <a className="text-white px-3" target="_blank" rel="noreferrer" href="https://dribbble.com/vukbojanic">Dribble</a>
                    <a className="text-white pl-3" target="_blank" rel="noreferrer" href="https://www.instagram.com/vukbojanic">Instagram</a>
                </footer>
            </div>
        </div>
    )
}

export default App;
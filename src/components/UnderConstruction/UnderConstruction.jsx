import React from "react";

const UnderConstruction = () => {
    return (
        <div className="mt-8">
            <div className="grid px-4 md:px-none md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <p className="text-white font-description font-sans text-base lg:text-xl opacity-60">Website is under construction. It’s gonna take some time, but in mean while feel free to drop me an <a href="mailto:vukgraphicart@gmail.com" className="underline">email</a> if you have any questions.</p>
                <p className="text-white font-description font-sans text-base lg:text-xl">Digital, Branding, Brand Strategy, Concept Development, Natural Interfaces, Art Direction, Web, Mobile, Digital Products. Co-founder and Head of Design of <a href="https://happywolf.me" className="underline" target="_blank" rel="noreferrer">Happy Wolf Studio</a>. Art director and Co-founder of <a href="https://www.wind-fest.me" className="underline" target="_blank" rel="noreferrer">Wind Fest</a>.</p>
            </div>
            <div className="px-4 md:px-none">
                <h1 className="text-3xl md: text-5xl lg:text-8xl font-title font-bold text-white">
                    I’m glad to connect,<br/> listen & help
                </h1>
                <span className="text-white font-description text-base lg:text-xl">Designer, Illustrator & Art Director</span>
            </div>
        </div>
    )
}

export default UnderConstruction;
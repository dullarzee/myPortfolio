import { useState, useEffect } from "react";
import proptype from "prop-types";
import ToolUsed from "./toolUsed.jsx";

ProjectPreview.propTypes = {
    images: proptype.array,
    setShowPreview: proptype.func,
    tools: proptype.array,
};
export default function ProjectPreview({ images, setShowPreview, tools }) {
    const [index, setIndex] = useState(0);
    function handlePreviewClose() {
        setShowPreview(false);
    }
    const handleBackwards = () => {
        setIndex((index) => index - 1);
    };
    const handleForwards = () => {
        setIndex((index) => index + 1);
    };

    useEffect(() => {
        const handleAccessibility = (e) => {
            if (e.key === "ArrowRight" && index !== images.length - 1)
                setIndex(index + 1);
            else if (e.key === "ArrowLeft" && index !== 0) setIndex(index - 1);
        };
        window.addEventListener("keyup", handleAccessibility);
        return () => window.removeEventListener("keyup", handleAccessibility);
    });

    let stopBackButton = "";
    let stopFrontButton = "";

    if (index === 0) stopBackButton = "pointer-events-none opacity-[50%]";
    else stopBackButton = "";
    if (index === images.length - 1)
        stopFrontButton = "pointer-events-none opacity-[50%]";
    else stopFrontButton = "";
    return (
        <>
            <section
                className="fixed flex flex-col md:flex-row gap-y-[3rem] lg:gap-y-0 items-center justify-center top-0 left-0 
                min-h-[100%] w-[100vw] bg-black/90 lg:bg-black/60 z-50"
            >
                <svg
                    onClick={handlePreviewClose}
                    className="relative mx-auto lg:absolute fill-blue-500 cursor-pointer lg:top-[15%] lg:left-[76%] w-[2rem]
                     h-[2rem]"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 8.586l-7.071-7.071-1.414 1.414 7.071 7.071-7.071 7.071 1.414 1.414 7.071-7.071 7.071 7.071 1.414-1.414-7.071-7.071 7.071-7.071-1.414-1.414-7.071 7.071z"></path>
                </svg>
                {/*button for indexing back*/}
                <button
                    onClick={handleBackwards}
                    className={`inline-flex items-center justify-center bg-white w-[3.5rem] cursor-pointer h-[3.5rem] 
                        rounded-full absolute left-[0%] lg:left-[15%] top-[40%] ${stopBackButton}`}
                >
                    <svg
                        className="w-[2rem] h-[2rem] fill-blue-500"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                    </svg>
                </button>
                {/*button for indexing forward*/}
                <button
                    onClick={handleForwards}
                    className={`inline-flex items-center justify-center rotate-180 bg-white w-[3.5rem] cursor-pointer
                     h-[3.5rem] rounded-full absolute lg:left-[80%] right-0 top-[40%] ${stopFrontButton}`}
                >
                    <svg
                        className="w-[2rem] h-[2rem] fill-blue-500"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M15.707 17.293l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-6 6c-0.391 0.391-0.391 1.024 0 1.414l6 6c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path>
                    </svg>
                </button>

                <div className="w-5/6 lg:w-1/2">
                    <div className="lg:h-[23rem] mx-auto overflow-hidden mb-2">
                        <img
                            alt=""
                            className="object-contain aspect-video"
                            src={images[index]}
                        ></img>
                    </div>
                    <div className="hidden lg:flex justify-evenly h-[6rem] gap-x-2">
                        {images.map((image, i) => {
                            return (
                                <img
                                    onClick={() => setIndex(i)}
                                    alt="click to go to image"
                                    className={`cursor-pointer hover:bg-blend-darken bg-black/80 ${
                                        index === i &&
                                        "outline-5 outline-blue-500"
                                    }`}
                                    key={image}
                                    src={image}
                                ></img>
                            );
                        })}
                    </div>
                </div>
                <section className="lg:hidden">
                    <h1 className="text-white font-inter text-xl text-center mb-3">
                        Tools Used
                    </h1>
                    <div className="w-full bg-black/70 flex flex-wrap p-3 rounded-lg gap-1">
                        {tools.map((tool) => {
                            return <ToolUsed key={tool}>{tool}</ToolUsed>;
                        })}
                    </div>
                </section>
            </section>
        </>
    );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import proptype from "prop-types";
import ProjectPreview from "./projectPreview";
import ToolUsed from "./toolUsed";

ProjectCard.propTypes = {
    heading: proptype.string,
    mainImage: proptype.string,
    link: proptype.string,
    type: proptype.string,
    description: proptype.string,
    images: proptype.array,
    tools: proptype.array,
    github: proptype.string,
};

export default function ProjectCard({
    heading,
    mainImage,
    link,
    type,
    description,
    images,
    tools,
    github,
}) {
    const [showPreview, setShowPreview] = useState(false);
    useEffect(() => {
        const handleAccessibility = () => {};
        window.addEventListener("keypress", handleAccessibility);
        return () =>
            window.removeEventListener("keypress", handleAccessibility);
    });

    function handlePreview() {
        setShowPreview(true);
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-none lg:grid-cols-2 h-[25rem] lg:h-[20rem]">
                    <div
                        tabIndex={0}
                        className="group relative p-[4%] overflow-hidden bg-indigo-500 rounded-md hover:scale-[1.1]
                    transition-all duration-400 cursor-pointer"
                    >
                        <div
                            className="flex items-center justify-between opacity-0 lg:group-focus:opacity-100 
                        mb-[4%] lg:group-hover:opacity-100"
                        >
                            <button
                                onClick={handlePreview}
                                className="text-fuchsia-600 font-inter bg-white/20 rounded-md hover:bg-white/40 px-1.5 py-0.5 cursor-pointer"
                            >
                                Preview
                            </button>
                            {/*github icon for linking to github repo*/}
                            {
                                <a href={github} target="_blank">
                                    <svg
                                        className="w-8 h-8 fill-gray-200 hover:fill-red-300"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                                    </svg>
                                </a>
                            }
                            <a
                                href={link}
                                target="_blank"
                                className="inline-flex items-center text-white font-inter bg-white/20 rounded-md hover:bg-white/40 px-1.5 py-0.5"
                            >
                                Visit site
                                <svg
                                    className="fill-white w-[1.3rem]"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M7.414 27.414l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-12c0-0.809-0.487-1.538-1.235-1.848-0.248-0.103-0.508-0.151-0.765-0.151v-0.001h-12c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.391 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                                </svg>
                            </a>
                        </div>
                        <img alt="" className="" src={mainImage}></img>
                    </div>

                    <div className="relative flex flex-col p-[7%] ">
                        <h3 className="lg:text-2xl text-sky-500 font-inter font-semibold">
                            {type}
                        </h3>
                        <h4 className="text-xl lg:text-4xl mb-[0.8rem] lg:mb-[1.5rem] text-white font-semibold font-inter">
                            {heading}
                        </h4>
                        <p className="text-gray-300 text-md lg:text-lg font-karla">
                            {description}
                        </p>
                        <button className="hidden lg:block group relative border hover:bg-white/30 border-slate-300 self-end text-white rounded-full py-1 px-3">
                            Tools used
                            {/*the div for containing tools used*/}
                            <div className="absolute group-hover:flex hidden flex-wrap bg-black/70 p-3 min-w-[12rem] rounded-lg gap-1">
                                {tools.map((tool) => {
                                    return (
                                        <ToolUsed key={tool}>{tool}</ToolUsed>
                                    );
                                })}
                            </div>
                        </button>
                        {/*preview and visit site button container for mobile*/}
                        <div className="flex items-center mt-3 justify-between">
                            <a href={github} target="_blank">
                                <svg
                                    className="w-8 h-8 fill-gray-200 active:fill-red-300"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                                </svg>
                            </a>
                            <a
                                href={link}
                                target="_blank"
                                className="lg:hidden text-white font-inter bg-white/30 rounded-md flex text-nowrap
                                 w-[35%] px-1.5 py-0.5 justify-center active:bg-sky-500"
                            >
                                Visit site
                                <svg
                                    className="fill-white w-[1.3rem]"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M7.414 27.414l16.586-16.586v7.172c0 1.105 0.895 2 2 2s2-0.895 2-2v-12c0-0.809-0.487-1.538-1.235-1.848-0.248-0.103-0.508-0.151-0.765-0.151v-0.001h-12c-1.105 0-2 0.895-2 2s0.895 2 2 2h7.172l-16.586 16.586c-0.391 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
                                </svg>
                            </a>

                            <button
                                onClick={handlePreview}
                                className="lg:hidden font-inter bg-white/30 rounded-md flex text-nowrap w-[35%] px-1.5 py-0.5
                                justify-center active:bg-sky-500 text-fuchsia-600 cursor-pointer"
                            >
                                Preview
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>

            {showPreview && (
                <ProjectPreview
                    images={images}
                    setShowPreview={setShowPreview}
                    tools={tools}
                />
            )}
        </>
    );
}

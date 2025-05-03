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
};

export default function ProjectCard({
    heading,
    mainImage,
    link,
    type,
    description,
    images,
    tools,
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
                        <div className="flex items-center mt-3 justify-between">
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

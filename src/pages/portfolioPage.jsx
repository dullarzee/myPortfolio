import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import ProjectCard from "../components/projectCard";
import Footer from "../components/footer";

export default function PortfolioPage() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchIt() {
            try {
                const it1 = await fetch("/projectsData.json");
                const it2 = await it1.json();
                setData(it2);
            } catch (error) {
                console.error("sorry, couldnt fetch", error);
            } finally {
                //console.log(data);
            }
        }
        fetchIt();
    }, [data]);

    const array = [];
    data.map((it) => {
        array.push(
            <ProjectCard
                key={it.heading}
                heading={it.heading}
                mainImage={it.mainImage}
                link={it.link}
                type={it.type}
                description={it.description}
                images={it.images}
                tools={it.tools}
            />
        );
    });
    return (
        <>
            <div className="bg-gradient-to-bl from-blue-400 to-blue-900 min-h-[100vh] pb-[20%]">
                <NavBar />
                <h1 className="text-center text-4xl lg:text-6xl text-slate-200 font-inter">
                    My Portfolio
                </h1>
                <div className="p-[4%] px-[5%] lg:px-[10%] mt-[10%]">
                    <h2 className="text-xl lg:text-3xl text-gray-300 mb-7 font-bold font-inter">
                        Featured Projects
                    </h2>
                    <div className="flex flex-col gap-y-[6.5rem] lg:gap-y-[3.5rem]">
                        {array}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

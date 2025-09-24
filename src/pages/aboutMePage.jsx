import { Contact1 } from "../components/contact";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import nft from "/images/image-equilibrium.jpg";

export default function AboutMe() {
    return (
        <>
            <div className="bg-slate-200 min-h-[100vh] pb-[3%]">
                <div className="bg-slate-700">
                    <NavBar bgColor={"#314158"} />
                </div>

                <section className="grid grid-cols-1 md:grid-cols-2 pt-[6rem]">
                    <article>
                        <div
                            className="text-4xl lg:text-6xl text-slate-200 bg-indigo-500 my-[3rem] pl-[15%] py-[2.3%] w-[70%]
                    rounded-e-full font-semibold font-inter"
                        >
                            About me
                        </div>
                        <p className="px-[5%] lg:px-[15%] text-slate-800 font-karla">
                            Hi!
                            <br />
                            My name is{" "}
                            <span className="text-sky-500 font-semibold">
                                Adefila oluwatimilehin samuel
                            </span>
                            . I am an{" "}
                            <span className="text-slate-400 font-bold">
                                intermediate frontend developer{" "}
                            </span>
                            adept with{" "}
                            <span className="font-semibold text-indigo-500">
                                React, Next.js, React Native
                            </span>
                            , about to delve into backend development at the
                            time of creating this article. I ceaselessly attempt
                            real-life applicable projects to increase my
                            skillset and have worked on real paid gigs and
                            worked as an intern for some companies.
                        </p>
                        <p className="px-[5%] lg:px-[15%] text-slate-800 font-karla mt-[10%]">
                            <strong className="text-indigo-500">
                                My objective:
                            </strong>
                            Challenge myself in a new enviroment to learn,
                            develop, improve my skills through effective
                            workflows and contribute more to the company with my
                            abilities
                        </p>
                    </article>
                    <div className="relative pt-[12%] lg:h-[90%]">
                        <div className="z-10 mx-auto lg:mx-0 h-[79%] lg:h-[90%] w-[60%] mb-[20%] ml-[25%] lg:ml-[10%] rounded-[20%] border-2 border-indigo-500">
                            <img
                                alt=""
                                className="w-full rounded-[20%] -translate-x-10
                        -translate-y-5"
                                src={nft}
                            ></img>
                        </div>
                    </div>
                </section>

                <Contact1 textColor={"oklch(0.446 0.043 257.281)"} />

                <section className="grid grid-cols-1 lg:grid-cols-2 mt-[10%] w-full lg:w-[80%] p-[4%] lg:rounded-e-full bg-indigo-500 inset-shadow-big">
                    <div className="flex flex-col gap-y-[2rem]">
                        <div className="">
                            <h2 className="text-white text-3xl font-semibold italic mb-[0.7rem]">
                                Education
                                <span className="inline-block border border-white text-base font-normal rounded-full px-4 py-1 ml-5">
                                    2014 - 2020
                                </span>
                            </h2>
                            <span className="text-gray-300 font-karla">
                                Federal Science and Technical College
                            </span>
                        </div>

                        <div className="flex flex-col gap-y-[0.8rem]">
                            <h2 className="text-white text-3xl font-semibold italic">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-3 gap-[0.5rem] lg:w-[50%]">
                                <div className="flex items-center justify-center">
                                    <img alt="" src="/images/react.svg"></img>
                                </div>
                                <img
                                    className="rounded-md"
                                    src="/images/typescriptLogoLight.png"
                                />
                                <img
                                    className="rounded-md"
                                    src="/images/tailwindcssLogo.png"
                                />

                                <img
                                    className="rounded-md"
                                    src="/images/reactNativeLogo.png"
                                />
                                <img
                                    className="rounded-md"
                                    src="/images/nextLogo.png"
                                />
                                <img
                                    className="rounded-md"
                                    src="/images/supabaseLogoLong.png"
                                />
                                <div className="flex items-center justify-center">
                                    <img
                                        className="rounded-md h-[3.5rem]"
                                        src="/images/c++Logo.jpeg"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <span className="text-2xl font-bold text-green-400">
                                        SQL
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-[1rem]">
                            <h2 className=" text-white text-3xl font-semibold italic">
                                Soft Skill
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] text-gray-300 ">
                                <div className="flex flex-col lg:border-r lg:border-r-white">
                                    <span>Teamwork</span>
                                    <span>Communication</span>
                                </div>
                                <div className="flex flex-col lg:border-l lg:border-l-white lg:pl-10">
                                    <span>Time Management</span>
                                    <span>Critical Thinking</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col mt-8 md:mt-0">
                        <div className="">
                            <h2 className=" text-white text-3xl font-semibold italic">
                                Skill Set
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-[80%] text-gray-300 ">
                                <div className="flex flex-col lg:border-r lg:border-r-white">
                                    <span>Problem Solving</span>
                                    <span>Game development</span>
                                </div>
                                <div className="flex flex-col lg:border-l lg:border-l-white lg:pl-10">
                                    <span>Web development</span>
                                    <span>User research</span>
                                </div>
                            </div>
                        </div>

                        <div className="*:mt-[1.5%] *:mb-[1.5%]">
                            <h2 className="text-white text-3xl font-semibold italic">
                                Language
                            </h2>
                            <div className="grid grid-cols-2 w-[80%] text-gray-300 ">
                                <div className="flex flex-col border-r border-r-white">
                                    <span>Yoruba</span>
                                </div>
                                <div className="flex flex-col border-l border-l-white pl-10">
                                    <span>English</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

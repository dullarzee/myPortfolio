import { Contact1, ContactForm } from "../components/contact";
import DownloadCv from "../components/downloadCv";
import Footer from "../components/footer";
import NavBar from "../components/navBar";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function LandingPage() {
    const contactRef = useRef(null);
    return (
        <>
            <div className="bg-gradient-to-br from-blue-950 to-blue-500">
                <div className="min-h-[100vh] bg-[url(/images/pattern-lines.svg),url(/images/pattern-circle.svg)] bg-[85%,20%,auto,auto] bg-no-repeat">
                    <NavBar contactRef={contactRef} />
                    <section
                        className="relative grid grid-cols-1 lg:grid-cols-2 space-y-[5rem] lg:space-y-0 w-[85%] 
                mx-auto mt-[3%]"
                    >
                        <div className="pt-[15%]">
                            <h1 className="text-sky-600 text-xl font-semibold">
                                Welcome to my Portfolio!
                            </h1>
                            <h2 className="text-7xl font-inter font-semibold text-white leading-[120%] my-[1rem]">
                                Hello, my name&apos;s{" "}
                                <span className="text-sky-500">Timmy</span>.
                            </h2>
                            <p className="text-lg text-slate-200 font-karla lg:pr-[30%]">
                                I&apos;m a frontend developer, aspiring
                                fullstack developer, know C & C++ and based in
                                Lagos, Nigeria
                            </p>

                            <div className="flex flex-col lg:flex-row gap-y-[1rem] lg:gap-y-0 lg:gap-x-[5%] mt-[6%]">
                                <div className="self-center">
                                    <DownloadCv />
                                </div>
                                <button className="">
                                    <a
                                        href="#/myPortfolio"
                                        className="flex items-center justify-center px-[1.8rem] py-2.5 text-white 
                            group cursor-pointer font-semibold text-md rounded-full border-2 border-white 
                            hover:bg-white hover:text-sky-500"
                                    >
                                        See my work
                                        <svg
                                            width="40"
                                            className="group-hover:translate-x-[1rem] group-hover:stroke-sky-500 transition-transform
                            duration-200 stroke-white ml-[0.5rem]"
                                            height="12"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                                fill="#000"
                                                fillRule="nonzero"
                                            />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-end pr-[10%] mt-[5rem]">
                            <div className="outline-2 outline-white/30 md:outline-offset-[3rem] rounded-full">
                                <img
                                    alt="my photo"
                                    className="h-[20rem] lg:h-[35rem] border-4 border-sky-600 outline-2 outline-sky-300 outline-offset-[1.5rem] rounded-full bg-blend-multiply"
                                    src="/images/VVFQE9780.JPG"
                                ></img>
                            </div>
                        </div>
                        <div className="flex lg:rotate-90 w-[21rem] absolute top-[58%] left-[0%] lg:top-[50%] lg:left-[90%] items-center">
                            <span className="shrink-0 text-slate-200 text-lg">
                                FOLLOW ME ON{" "}
                            </span>
                            <svg
                                width="40"
                                className="stroke-white ml-[0.5rem]"
                                height="12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                                    fill="#000"
                                    fillRule="nonzero"
                                />
                            </svg>
                            <div className="flex w-[8rem] gap-x-[0.7rem] ml-[0.5rem]">
                                <a
                                    className="lg:-rotate-90"
                                    href="https://www.linkedin.com/in/oluwatimilehin-samuel-27592727a"
                                    target="_blank"
                                >
                                    <svg
                                        version="1.1"
                                        className="fill-white hover:fill-red-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="lg:-rotate-90"
                                    href="https://web.facebook.com/profile.php?id=100087108926104"
                                >
                                    <svg
                                        className="fill-white hover:fill-red-400"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                                    </svg>
                                </a>
                                <a
                                    className="lg:-rotate-90"
                                    href="https://github.com/dullarzee"
                                >
                                    <svg
                                        className="fill-white hover:fill-red-400"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="32"
                                        height="32"
                                        viewBox="0 0 32 32"
                                    >
                                        <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="flex mx-auto w-[85%] gap-x-[0.7rem] items-center">
                        <div className="flex items-center outline-2 outline-white/30 h-[3rem] w-[3rem] rounded-full bg-blue-950">
                            <svg
                                className="fill-white stroke-transparent ml-[8%]"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                            >
                                <path d="M22.956 30.972h-4.984c-3.304 0-5.981-2.678-5.981-5.981v-8.972h6.044v1.994c0 1.101 0.83 1.993 1.932 1.993h0.996c1.102 0 1.994-0.893 1.994-1.993v-1.994h6.043v8.972c0 3.303-2.741 5.981-6.044 5.981zM22.956 14.025c0-1.101-0.893-1.994-1.994-1.994v0-5.919c0 0-1.308-0.062 1.932-0.062s6.106 2.118 6.106 5.981c0 1.983 0 2.698 0 2.928h-6.044v-0.934zM20.038 5.375c0-1.927-0.907-3-2.723-3-1.921 0-3.391 1.384-4.409 4.151l-0.209 0.567c-1.191 3.235-2.937 4.853-5.235 4.853-0.928 0-1.794-0.354-2.599-1.060s-1.207-1.466-1.207-2.279c0-0.402 0.188-0.604 0.566-0.604 0.255 0 0.518 0.321 0.789 0.962 0.492 1.184 1.314 1.776 2.464 1.776 0.871 0 1.583-0.281 2.138-0.845s1.186-1.646 1.892-3.249l0.456-1.011c1.339-2.992 3.143-4.488 5.409-4.488 2.597 0 3.895 1.482 3.895 4.227h-1.227zM21.959 14.523v2.99c0 0.826-0.669 1.495-1.495 1.495s-1.495-0.669-1.495-1.495v-2.99c0-0.826 0.669-1.496 1.495-1.496s1.495 0.67 1.495 1.496zM18.034 6.050c3.239 0 1.993 0.062 1.993 0.062v5.919c-1.101 0-1.993 0.893-1.993 1.994v0.935h-6.044c0-0.23 0-0.945 0-2.928 0-3.864 2.804-5.982 6.044-5.982z"></path>
                            </svg>
                        </div>
                        <span className="font-semibold text-white/50 cursor-default">
                            Scroll down
                        </span>
                    </div>

                    <section
                        className="grid grid-cols-1 gap-y-[4%] lg:gap-y-0 lg:grid-cols-3 w-[85%] lg:gap-x-[3%] mx-auto my-40 mb-15
                *:rounded-md"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="bg-blue-800 p-[7%]"
                        >
                            <div className="flex flex-col space-y-[0.5rem]">
                                <svg
                                    className="stroke-sky-500 fill-blue-500"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M17.408 1.967h-10.816l-6.592 6.533 12 13.533 12-13.533-6.592-6.533zM21.594 9.028l-0.014-0.061h-8.902l4.268-4.609 4.648 4.67zM10.398 17.386l-7.023-7.419h4.625l-0.465 0.223 2.863 7.196zM8.537 9.967h6.924l-3.461 8.654-3.463-8.654zM16 9.967h4.623l-7.023 7.419 2.863-7.196-0.463-0.223zM12 8.229l-3.914-4.262h7.826l-3.912 4.262zM7.053 4.396l4.268 4.571h-8.903l-0.012 0.023 4.647-4.594z"></path>
                                </svg>
                                <h2 className="text-2xl text-slate-200">
                                    Strong Dedication
                                </h2>
                                <p className="pr-[7%] text-slate-300/80 font-karla">
                                    I have a passion for Computer Science that
                                    is not in anyway forced...it is evident in
                                    how short a time i used to become an
                                    intermediate frontend Developer
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 70 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9 }}
                            className="bg-blue-800 p-[7%]"
                        >
                            <div className="flex flex-col space-y-[0.5rem]">
                                <svg
                                    className="fill-white"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 17h-2c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-8c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h3.19c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.19c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v8c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM15 7h2c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v8c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-3.19c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.19c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-8c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM24 13v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM10.168 5.445l-4 6c-0.306 0.46-0.182 1.080 0.277 1.387 0.172 0.115 0.367 0.169 0.555 0.168h4.131l-2.964 4.445c-0.306 0.46-0.182 1.080 0.277 1.387s1.080 0.182 1.387-0.277l4-6c0.106-0.156 0.169-0.348 0.169-0.555 0-0.552-0.448-1-1-1h-4.131l2.964-4.445c0.306-0.46 0.182-1.080-0.277-1.387s-1.080-0.182-1.387 0.277z"></path>
                                </svg>
                                <h2 className="text-2xl text-slate-200">
                                    Super-charged
                                </h2>
                                <p className="pr-[7%] text-slate-300/80 font-karla">
                                    After God, my next best craving is
                                    programming...For the right price, Nothing
                                    is impossible!
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 90 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.1 }}
                            className="bg-blue-800 p-[7%]"
                        >
                            <div className="flex flex-col space-y-[0.5rem]">
                                <svg
                                    className="fill-white"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M11.366 22.564l1.291-1.807-1.414-1.414-1.807 1.291c-0.335-0.187-0.694-0.337-1.071-0.444l-0.365-2.19h-2l-0.365 2.19c-0.377 0.107-0.736 0.256-1.071 0.444l-1.807-1.291-1.414 1.414 1.291 1.807c-0.187 0.335-0.337 0.694-0.443 1.071l-2.19 0.365v2l2.19 0.365c0.107 0.377 0.256 0.736 0.444 1.071l-1.291 1.807 1.414 1.414 1.807-1.291c0.335 0.187 0.694 0.337 1.071 0.444l0.365 2.19h2l0.365-2.19c0.377-0.107 0.736-0.256 1.071-0.444l1.807 1.291 1.414-1.414-1.291-1.807c0.187-0.335 0.337-0.694 0.444-1.071l2.19-0.365v-2l-2.19-0.365c-0.107-0.377-0.256-0.736-0.444-1.071zM7 27c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM32 12v-2l-2.106-0.383c-0.039-0.251-0.088-0.499-0.148-0.743l1.799-1.159-0.765-1.848-2.092 0.452c-0.132-0.216-0.273-0.426-0.422-0.629l1.219-1.761-1.414-1.414-1.761 1.219c-0.203-0.149-0.413-0.29-0.629-0.422l0.452-2.092-1.848-0.765-1.159 1.799c-0.244-0.059-0.492-0.109-0.743-0.148l-0.383-2.106h-2l-0.383 2.106c-0.251 0.039-0.499 0.088-0.743 0.148l-1.159-1.799-1.848 0.765 0.452 2.092c-0.216 0.132-0.426 0.273-0.629 0.422l-1.761-1.219-1.414 1.414 1.219 1.761c-0.149 0.203-0.29 0.413-0.422 0.629l-2.092-0.452-0.765 1.848 1.799 1.159c-0.059 0.244-0.109 0.492-0.148 0.743l-2.106 0.383v2l2.106 0.383c0.039 0.251 0.088 0.499 0.148 0.743l-1.799 1.159 0.765 1.848 2.092-0.452c0.132 0.216 0.273 0.426 0.422 0.629l-1.219 1.761 1.414 1.414 1.761-1.219c0.203 0.149 0.413 0.29 0.629 0.422l-0.452 2.092 1.848 0.765 1.159-1.799c0.244 0.059 0.492 0.109 0.743 0.148l0.383 2.106h2l0.383-2.106c0.251-0.039 0.499-0.088 0.743-0.148l1.159 1.799 1.848-0.765-0.452-2.092c0.216-0.132 0.426-0.273 0.629-0.422l1.761 1.219 1.414-1.414-1.219-1.761c0.149-0.203 0.29-0.413 0.422-0.629l2.092 0.452 0.765-1.848-1.799-1.159c0.059-0.244 0.109-0.492 0.148-0.743l2.106-0.383zM21 15.35c-2.402 0-4.35-1.948-4.35-4.35s1.948-4.35 4.35-4.35 4.35 1.948 4.35 4.35c0 2.402-1.948 4.35-4.35 4.35z"></path>
                                </svg>
                                <h2 className="text-2xl text-slate-200">
                                    Creative & Collaborative
                                </h2>
                                <p className="pr-[7%] text-slate-300/80 font-karla">
                                    I dont have to be an artist to be a creative
                                    developer also I believe in team power and
                                    dont take it lightly
                                </p>
                            </div>
                        </motion.div>
                    </section>
                    <div ref={contactRef} className="">
                        <div className="pb-[1.5rem]">
                            <Contact1 textColor={"white"} />
                        </div>
                        <div className="w-[85%] mx-auto pb-[5rem] mt-8">
                            <ContactForm />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

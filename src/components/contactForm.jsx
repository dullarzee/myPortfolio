import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleName = (e) => {
        setForm({
            ...form,
            name: e.target.value,
        });
    };
    const handleEmail = (e) => {
        setForm({
            ...form,
            email: e.target.value,
        });
    };
    const handleMessage = (e) => {
        setForm({
            ...form,
            message: e.target.value,
        });
    };

    return (
        <main
            className="relative w-full md:w-4/6 mx-auto z-10 mt-18 p-4 rounded-lg mb-15 
             text-white bg-white/20 backdrop-blur-xl px-[3.5%]"
        >
            <form>
                <h2 className="text-center text-xl md:text-3xl font-karla text-slate-300 mb-12">
                    Connect with me for a Collaboration, Job or Just to say
                    Hi!😎
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-[40%_60%]">
                    <ul className="flex flex-col gap-6 md:gap-11  font-barlowCond mb-7 md:mb-0">
                        <li>
                            <h2 className="text-xl font-medium">Email Me</h2>
                            <p className="text-slate-300 underline">
                                Timilehin0303@gmail.com
                            </p>
                        </li>

                        <li>
                            <h2 className="text-xl font-medium">Whatsapp Me</h2>
                            <p className="text-slate-300 underline">
                                +234 91 6253 4519
                            </p>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-y-[1.5rem] text-slate-200">
                        <label className="flex flex-col space-y-[0.3rem]">
                            <span className="font-karla text-white">Name</span>
                            <input
                                value={form.name}
                                onChange={handleName}
                                className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[1.9rem] rounded-md pl-3"
                            ></input>
                        </label>
                        <label className="flex flex-col space-y-[0.3rem]">
                            <span className="font-karla text-white">Email</span>
                            <input
                                value={form.email}
                                onChange={handleEmail}
                                className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[3rem] rounded-md pl-3"
                            ></input>
                        </label>
                        <label className="flex flex-col space-y-[0.3rem]">
                            <span className="font-karla text-white">
                                Message
                            </span>
                            <textarea
                                value={form.message}
                                onChange={handleMessage}
                                className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[5rem] rounded-md pl-3"
                            ></textarea>
                        </label>
                        <button className="inline-flex w-full py-2 bg-sky-500 hover:bg-sky-300 cursor-pointer text-white font-semibold font-inter rounded-md mt-6 justify-center">
                            Send
                            <svg
                                className="fill-white ml-1"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.963 2.269c0.043-0.151 0.050-0.314 0.015-0.476-0.024-0.113-0.068-0.224-0.131-0.325-0.064-0.102-0.145-0.19-0.238-0.262-0.117-0.090-0.249-0.15-0.386-0.181s-0.282-0.034-0.426-0.004c-0.042 0.009-0.085 0.021-0.126 0.035l-0.021 0.007-19.98 6.993c-0.252 0.088-0.467 0.276-0.584 0.538-0.224 0.505 0.003 1.096 0.508 1.32l8.649 3.844 3.844 8.649c0.108 0.243 0.313 0.443 0.583 0.538 0.521 0.182 1.092-0.092 1.274-0.614l6.993-19.979c0.010-0.027 0.019-0.054 0.027-0.082zM10.779 11.807l-6.068-2.696 13.483-4.72zM19.609 5.806l-4.72 13.483-2.696-6.068z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden md:flex lg:rotate-90 w-[21rem] absolute top-[58%] left-[0%] lg:top-[50%] lg:left-[90%] items-center">
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
            </form>
        </main>
    );
}

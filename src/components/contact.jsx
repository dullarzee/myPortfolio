import { useState } from "react";
import proptype from "prop-types";

Contact1.propTypes = {
    textColor: proptype.string,
};

export function Contact1({ textColor }) {
    return (
        <>
            <section
                className="w-[90%] lg:w-[55%] pl-[7.5%]"
                style={{ color: textColor }}
            >
                <h2 className="text-4xl italic">Contact</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-[2.5rem] gap-[1.5rem]">
                    <div className="inline-flex gap-x-[5%]">
                        <svg
                            style={{ fill: textColor }}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path d="M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z"></path>
                        </svg>
                        <span className="text-lg font-semibold">
                            Timilehin0303@gmail.com
                        </span>
                    </div>
                    <div className="inline-flex gap-x-[5%]">
                        <svg
                            style={{ fill: textColor }}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                        </svg>
                        <span className="text-lg font-semibold">
                            https://github.com/dullarzee
                        </span>
                    </div>
                    <div className="inline-flex gap-x-[5%]">
                        <svg
                            style={{ fill: textColor }}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                        >
                            <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
                        </svg>
                        <span
                            className="text-lg font-semibold line-clamp-1"
                            title="https://www.linkedin.com/in/oluwatimilehin-samuel-27592727a"
                        >
                            https://www.linkedin.com/in/oluwatimilehin-samuel-27592727a
                        </span>
                    </div>
                    <div className="inline-flex gap-x-[5%]">
                        <svg
                            style={{ fill: textColor }}
                            className="w-8 h-8"
                            viewBox="0 0 32 32"
                        >
                            <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                        </svg>
                        <span className="text-lg font-semibold">
                            +234 91 6253 4519
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

export function ContactForm() {
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
        <>
            <div>
                <form>
                    <h3 className="font-inter text-3xl text-slate-300 text-center mb-8">
                        Get in touch
                    </h3>
                    <section className="grid max-md:grid-cols-1 lg:grid-cols-2">
                        <div className="flex flex-col gap-y-[1.5rem] text-slate-200">
                            <label className="flex flex-col space-y-[0.3rem]">
                                <span className="font-karla text-white">
                                    Name
                                </span>
                                <input
                                    value={form.name}
                                    onChange={handleName}
                                    className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[1.9rem] rounded-md pl-3"
                                ></input>
                            </label>
                            <label className="flex flex-col space-y-[0.3rem]">
                                <span className="font-karla text-white">
                                    Email
                                </span>
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

                        <div className="p-7">
                            <div className="text-slate-300 text-2xl lg:text-4xl rounded-lg p-7 bg-blue-500 border-t-3 border-white">
                                I&apos;d love to hear from you! be it a question
                                or just want to say hi, feel free to drop a
                                message.
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </>
    );
}

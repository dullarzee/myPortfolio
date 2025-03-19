import {useState} from 'react'
import proptype from 'prop-types'

Contact1.propTypes = {
    textColor:proptype.string
}

export function Contact1({textColor}){
    return(
        <>
        <section className="w-[90%] lg:w-[55%] pl-[7.5%]" style={{color:textColor}}>
            <h2 className="text-4xl italic">Contact</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-[2.5rem] gap-[1.5rem]">
                <div className="inline-flex gap-x-[5%]">
                    <svg style={{fill:textColor}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M16.319 13.713v5.487h9.075c-0.369 2.356-2.744 6.9-9.075 6.9-5.463 0-9.919-4.525-9.919-10.1s4.456-10.1 9.919-10.1c3.106 0 5.188 1.325 6.375 2.469l4.344-4.181c-2.788-2.612-6.4-4.188-10.719-4.188-8.844 0-16 7.156-16 16s7.156 16 16 16c9.231 0 15.363-6.494 15.363-15.631 0-1.050-0.113-1.85-0.25-2.65l-15.113-0.006z"></path>
                    </svg>
                    <span className="text-lg font-semibold">Timilehin0303@gmail.com</span>
                </div>
                <div className="inline-flex gap-x-[5%]">
                    <svg style={{fill:textColor}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
                    </svg>
                    <span className="text-lg font-semibold">https://github.com/dullarzee</span>
                </div>
                <div className="inline-flex gap-x-[5%]">
                    <svg style={{fill:textColor}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
                    </svg>
                    <span className="text-lg font-semibold line-clamp-1" title="https://www.linkedin.com/in/oluwatimilehin-samuel-27592727a">https://www.linkedin.com/in/oluwatimilehin-samuel-27592727a</span>
                </div>
                <div className="inline-flex gap-x-[5%]">
                    <svg style={{fill:textColor}} version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M23 16.92c0.016-0.714-0.236-1.404-0.673-1.943-0.46-0.566-1.129-0.967-1.925-1.080-0.8-0.098-1.695-0.314-2.586-0.646-0.433-0.159-0.893-0.218-1.344-0.174-0.663 0.064-1.307 0.349-1.819 0.855l-0.72 0.72c-1.77-1.117-3.36-2.667-4.583-4.589l0.726-0.726c0.322-0.33 0.563-0.726 0.707-1.156 0.212-0.632 0.214-1.336-0.039-2.011-0.289-0.753-0.518-1.644-0.644-2.595-0.104-0.714-0.456-1.345-0.963-1.804-0.539-0.486-1.256-0.779-2.027-0.771h-2.996c-0.088 0-0.182 0.004-0.273 0.012-0.824 0.075-1.542 0.478-2.033 1.066s-0.758 1.367-0.683 2.199c0.3 3.076 1.365 6.243 3.216 9.102 1.502 2.413 3.648 4.623 6.298 6.306 2.568 1.697 5.684 2.862 9.086 3.231 0.092 0.009 0.191 0.013 0.288 0.013 0.828-0.003 1.578-0.343 2.118-0.887s0.873-1.297 0.87-2.121zM21 16.92v3c0.001 0.28-0.109 0.53-0.29 0.712s-0.429 0.295-0.706 0.296c-3.149-0.336-5.961-1.391-8.263-2.912-2.428-1.543-4.359-3.537-5.702-5.694-1.697-2.62-2.655-5.481-2.924-8.238-0.024-0.268 0.064-0.526 0.229-0.724s0.403-0.33 0.678-0.355l3.088-0.005c0.271-0.003 0.507 0.094 0.687 0.256 0.17 0.154 0.288 0.366 0.323 0.608 0.142 1.072 0.408 2.117 0.757 3.025 0.081 0.216 0.080 0.447 0.010 0.658-0.049 0.145-0.131 0.281-0.242 0.395l-1.262 1.261c-0.324 0.324-0.379 0.814-0.162 1.201 1.584 2.785 3.839 4.957 6.381 6.378 0.397 0.222 0.882 0.144 1.195-0.166l1.27-1.27c0.166-0.164 0.377-0.257 0.598-0.279 0.152-0.015 0.31 0.005 0.459 0.060 1.022 0.381 2.070 0.636 3.034 0.754 0.241 0.034 0.462 0.166 0.615 0.355 0.147 0.181 0.231 0.412 0.226 0.682z"></path>
                    </svg>
                    <span className="text-lg font-semibold">+234 81 4824 4729</span>
                </div>
            </div>
        </section>
        </>
    );
}

export function ContactForm(){
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    })
    const handleName = (e)=>{setForm({
        ...form,
        name:e.target.value
    })}
    const handleEmail = (e)=>{setForm({
        ...form,
        email:e.target.value
    })}
    const handleMessage = (e)=>{setForm({
        ...form,
        message:e.target.value
    })}
    return(
        <>
         <div>
            <form>
                <h3 className="font-inter text-3xl text-slate-300 text-center mb-8">Get in touch</h3>
                <section className="grid max-md:grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-y-[1.5rem] text-slate-200">
                        <label className="flex flex-col space-y-[0.3rem]">
                            <span className="font-karla text-white">Name</span>
                            <input onChange={handleName} className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[1.9rem] rounded-md pl-3"></input>
                        </label>
                        <label className="flex flex-col space-y-[0.3rem]">
                            <span className="font-karla text-white">Email</span>
                            <input onChange={handleEmail} className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[3rem] rounded-md pl-3"></input>
                        </label>
                        <label className="flex flex-col space-y-[0.3rem]">
                            <span className="font-karla text-white">Message</span>
                            <textarea onChange={handleMessage} className="focus:outline-sky-500 focus:outline-3 outline-2 outline-slate-300 h-[5rem] rounded-md pl-3"></textarea>
                        </label>
                        <button className="inline-flex w-full py-2 bg-sky-500 hover:bg-sky-300 cursor-pointer text-white font-semibold font-inter rounded-md mt-6 justify-center">Send <img alt="" src=""></img></button>
                    </div>

                    <div className="p-7 flex items-center" >
                        <span className="text-slate-300 text-4xl">I&apos;d love to hear from you! be it a question or just want to say hi, feel free to drop a message.</span>
                    </div>
                </section>
            </form>
         </div>
        </>
    );
}
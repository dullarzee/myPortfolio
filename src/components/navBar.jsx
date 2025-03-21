import {useState} from 'react'
import proptype from 'prop-types'

NavBar.propTypes = {
    contactRef:proptype.object
}

export default function NavBar({contactRef}){
    const [openNav, setOpenNav] = useState(false);
    const [showHint, setShowHint] = useState(false);

    const accessLink = (e)=>{if(e.key === "Enter")e.target.click();}
    const handleHomeNav = ()=>{ window.location.hash = '/home'}
    const handlePortfolioNav = ()=>{window.location.hash = '/myPortfolio'}
    const handleAboutNav = ()=>{window.location.hash = '/aboutMe'}
    const handleContactNav = (e)=>{
                                accessLink(e);
                                if(window.location.hash !== '#/home'){
                                    window.location.hash ='/home';
                                    setTimeout(()=>setShowHint(true),1000);
                                    setTimeout(()=>setShowHint(false),4000)
                                }
                                
                                setOpenNav(false);
                                contactRef.current.scrollIntoView({'block':'start'})
                            }
    return(
        <>
         <div>
         <nav className="flex items-center h-[6rem] pl-6 lg:pl-10 justify-between pr-[10%] lg:pr-[17%]">
                    <div className="flex items-center">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="fill-transparent stroke-white w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem] lg:ml-[3rem]" width="28" height="28" viewBox="0 0 28 28">
                        <path d="M20.172 7.438c-0.5-0.562-1.313 0.391-0.875 0.906 0.422 0.516 1.813 0.141 0.875-0.906zM13.984 11.281c-0.172 0.172-0.438 0.172-0.594 0-0.172-0.156-0.172-0.422 0-0.578 0.156-0.172 0.422-0.172 0.594 0 0.156 0.156 0.156 0.422 0 0.578zM16.562 12.437l-0.547 0.547c-0.25 0.266-0.672 0.266-0.938 0l-0.594-0.594c-0.25-0.266-0.25-0.672 0-0.938l0.547-0.547c0.25-0.25 0.672-0.25 0.938 0l0.594 0.609c0.25 0.25 0.25 0.672 0 0.922zM14.859 10.406c-0.156 0.156-0.422 0.156-0.594 0-0.156-0.172-0.156-0.438 0-0.594 0.172-0.172 0.438-0.172 0.594 0 0.172 0.156 0.172 0.422 0 0.594zM21.156 8.875c-0.703 1.328-2.547 1.875-3.672 1.078-1.125-0.812-1.906-2.438-0.672-3.844 1.219-1.406 2.297-0.969 3.375 0.047 0.672 0.641 1.656 1.406 0.969 2.719zM24.297 16.406c0.141-0.906-1.156-0.938-1.437-1.453-0.766-1.359-1.563-2.078-3.078-1.719 0.656-0.453 1.328-0.344 1.328-0.344 0.016-0.359 0-0.734-0.531-1.406 0.219-0.703 0.016-1.266 0.016-1.266 0.875-0.484 1.516-1.375 1.641-2.438 0.203-1.75-1.062-3.344-2.812-3.547-1.25-0.141-2.469 0.438-3.063 1.453-1.313 2.266 0.078 4 1.266 4.594-0.812-0.078-1.937-0.672-2.266-1.937-0.375-1.453 0.156-2.812 0.5-3.469 0 0-0.25-0.328-0.453-0.5 0 0-0.781 0-1.391 0.297 0.672-0.859 1.422-0.812 1.422-0.812 0-0.359-0.031-0.844-0.203-1.219-0.313-0.641-1.406-0.734-1.828 0.234 0.016-0.047 0.031-0.078 0.063-0.109-0.281 0.672-0.063 3.156 0.953 4.922-0.141 0.078-0.516 0.344-0.734 0.562-1.219 0.547-3.172 3.406-3.172 3.406-1.594 0.609-4.375 2.875-4 4.5v0c0.016 0.172 0.078 0.313 0.172 0.422-0.156 0.125-0.313 0.281-0.469 0.469-0.672 0.781-0.297 1.984 1 1.375 0.891-0.406 1.687-1.141 2.063-1.719 0 0-0.328-0.281-0.938-0.25 1.563-0.375 1.953-0.531 2.625-0.516 0.453 0.219 0.453-1.937 0.453-1.937 0-0.828-0.125-1.75-0.625-2.344 0.703 0.688 1.641 1.844 1.578 3.422-0.047 1.031-0.859 1.297-0.859 1.297-0.516 0.938-2.438 3.719-1.719 5.984 0 0-0.547-0.844-0.578-1.25-0.984 1.094-2.641 2.953-1.406 3.641 1.5 0.828 6.156-5 7.141-8.031 1.953-1.172 3.125-2.672 3.609-3.672 1.25 2.484 5.406 5.359 5.734 3.359zM28.031 14c0 7.734-6.281 14-14.016 14s-14.016-6.266-14.016-14 6.281-14 14.016-14 14.016 6.266 14.016 14z"></path>
                        </svg>
                        <span className="inline-block ml-4 text-xl lg:text-2xl text-white">Dullarzee</span>
                    </div>

                    <img alt="" onClick={()=>setOpenNav(true)} className="cursor-pointer lg:hidden" src="/images/icon-hamburger.svg"></img>

                    <div className="hidden lg:flex text-white text-lg font-inter gap-x-[12%] **:hover:text-sky-200">
                        <span tabIndex={0} onKeyUp={(e)=>accessLink(e)} className={window.location.hash === '#/home' || window.location.hash === "" ? "text-sky-500 cursor-pointer"
                        : "text-white cursor-pointer"} onClick={handleHomeNav}>Home</span>
                        <span tabIndex={0} onKeyUp={(e)=>accessLink(e)} className={window.location.hash === '#/myPortfolio' ? "text-sky-700 cursor-pointer" : "text-white cursor-pointer"} 
                        onClick={handlePortfolioNav}>Portfolio</span>
                        <span tabIndex={0} onKeyUp={(e)=>accessLink(e)} className={window.location.hash === '#/aboutMe' ? "text-sky-500 cursor-pointer" : "text-white cursor-pointer"}
                         onClick={handleAboutNav}>About</span>
                        <span tabIndex={0} onKeyUp={(e)=>accessLink(e)} className="navItem cursor-pointer" onClick={handleContactNav}>Contact</span>
                    </div>
                </nav>

                {openNav && <nav>
                    <div onClick={()=>setOpenNav(false)} className="fixed h-[100vh] w-[100vw] bg-black/50 z-20 top-0"></div>
                    <div className="fixed top-0 w-[65%] h-[100vh] left-[35%] bg-slate-100 z-30 pl-[4%] starting:translate-x-[10rem] duration-400">
                        <img onClick={()=>setOpenNav(false)} alt="" className="relative top-[5%] left-[85%]" src="/images/icon-close.svg"></img>
                        <ul className="flex flex-col gap-y-[2rem] mt-[5rem] *:cursor-pointer">
                            <li onClick={handleHomeNav} className={window.location.hash === '#/home' || window.location.hash === "" ? 
                            "text-sky-500 text-2xl text-bold cursor-pointer border-r-4 border-sky-500" : "text-slate-700 text-lg font-inter cursor-pointer" }>Home</li>
                            <li onClick={handlePortfolioNav} className={window.location.hash === '#/myPortfolio' ? 
                            "text-sky-500 text-2xl text-bold cursor-pointer border-r-4 border-sky-500" : "text-slate-700 text-lg font-inter cursor-pointer"}>Portfolio</li>
                            <li onClick={handleAboutNav} className={window.location.hash === '#/aboutMe' ? 
                            "text-sky-500 text-2xl text-bold cursor-pointer border-r-4 border-sky-500" : "text-slate-700 text-lg font-inter cursor-pointer"}>About</li>
                            <li onClick={handleContactNav} className="text-slate-700 text-lg font-inter">Contact</li>
                        </ul>
                    </div>
                </nav>}

                {showHint && <div className='animate-dropIn fixed top-[5rem] w-[20%] left-[40%] right-[40%] bg-white px-7 py-2 font-inter text-slate-500
                text-center rounded-md'>Please click <span className="text-sky-500">Contact</span> button again</div>}

         </div>
        </>
    );
}
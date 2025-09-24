export default function DownloadCv() {
    return (
        <>
            <button
                className="cursor-pointer hover:scale-[1.1] py-2.5 transition-all duration-300
                     text-white font-semibold text-md rounded-full bg-sky-500 w-full"
            >
                <a href="/my_improved_Cv.pdf" download="Timmy's CV.pdf">
                    <span>Download CV</span>
                </a>
            </button>
        </>
    );
}

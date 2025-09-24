import NavBar from "../components/navBar";
import { motion } from "framer-motion";
import Footer from "../components/footer";
import ContactForm from "../components/contactForm";

export default function ContactPage() {
    return (
        <div className="relative min-h-[150vh] bg-blue-950 overflow-hidden ">
            <NavBar />
            {/*absolutely positioned div for aesthetics*/}
            <motion.div
                className="absolute top-30 z-0 w-70 h-70 rounded-full bg-blue-800 blur-2xl"
                inital={{ opacity: 0, x: -100 }}
                transition={{ duration: 1000 }}
                whileInView={{ opacity: 1, x: 40 }}
                viewport={{ once: true }}
            />
            <div className="absolute w-120 h-120 top-1/2 -right-16 bg-blue-700 rotate-45 z-0 blur-lg" />
            <h1 className="relative text-3xl md:text-5xl text-slate-200 font-inter text-center font-medium my-6">
                Contact Me
            </h1>
            <p className="relative text-slate-400 font-karla text-md md:text-xl text-center">
                I&quot;d love to hear what you have to say😊
            </p>
            <ContactForm />
            <Footer />
        </div>
    );
}

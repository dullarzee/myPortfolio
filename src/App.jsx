import { useState, useEffect } from "react";
import "./tailwind/App.css";
import LandingPage from "./pages/landingPage";
import AboutMe from "./pages/aboutMePage.jsx";
import PortfolioPage from "./pages/portfolioPage.jsx";
import ContactPage from "./pages/contactPage.jsx";

function App() {
    const [hash, setHash] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => setHash(window.location.hash);
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    });

    function updatePage() {
        if (hash === "" || hash === "#/home") return <LandingPage />;
        if (hash === "#/aboutMe") return <AboutMe />;
        if (hash === "#/myPortfolio") return <PortfolioPage />;
        if (hash === "#/contactMe") return <ContactPage />;
    }

    return <>{updatePage()}</>;
}

export default App;

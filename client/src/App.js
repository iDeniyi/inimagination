import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <SocialLinks />
            <About />
            <Portfolio />
        </div>
    );
}

export default App;

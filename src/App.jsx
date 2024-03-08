import Header from "./Header";
import Mainsection from "./Mainsection/Mainsection.jsx";
import Footer from "./Footer/Footer.jsx";
import Section from "./section/Section.jsx";


function App() {
    return(
      <>
      <body>
      <Header/>
        <div className="main-container">
            <Mainsection/>
            <Section/>
        </div>
      <Footer/>
      </body>
      </>
    );
}

export default App

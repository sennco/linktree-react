import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Github from "./components/social/Github";
import Linkedin from "./components/social/Linkedin";
import Insta from "./components/social/Insta";
import Footerr from "./components/footer/Footerr";

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {
  return (
    <>
      <div className="flex flex-col align-middle h-screen bg-[url('./src/assets/Background.jpg')] bg-cover">
      <Header />
      <Nav/>
      <Github/>
      <Linkedin/>
      <Insta/>
      <Footerr/>
      </div>
    </>
  );
}

export default App;

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Github from "./components/social/Github";
import Linkedin from "./components/social/Linkedin";
import Insta from "./components/social/Insta";
import Footerr from "./components/footer/Footerr";

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {
  return (
      <div className="flex flex-col align-middle h-screen bg-background bg-cover" style={{backgroundImage: `url(https://lh3.googleusercontent.com/pw/AP1GczNpOu1VOaTez2jJbfLzpZUqNUYF8cld0p5mkfPoiX7m3EWt6PS_WdQAZSLV764Q_EhyPLtplXGNCoOFitjWwpQ0SCewzHkAuDDVL6jIcqf2P5ZBKao6Q1LqDJO4jrDICofWNyJIQJ7b68f0nmt-x7ga=w1234-h878-s-no-gm?authuser=0)`}}>
      <Header />
      <Nav/>
      <Github/>
      <Linkedin/>
      <Insta/>
      <Footerr/>
      </div>
  );
}

export default App;

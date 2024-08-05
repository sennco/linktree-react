import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Github from "./components/social/Github";
import Linkedin from "./components/social/Linkedin";
import Insta from "./components/social/Insta";
import Footerr from "./components/footer/Footerr";

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {
  return (
      <div className="flex flex-col align-middle h-screen bg-background bg-cover" style={{backgroundImage: `url(https://lh3.googleusercontent.com/pw/AP1GczNNX3k5S3Q3yFi9pKbKf8DxmJCO68ZZ-LJwLs42r3xSbFssdFS8LOzM5p7t-eXu4_3eZDTmBDZrO8miDVE5QtxuR6NYfiHjSz5u73V92-LW53bBHsrZwnP3OFq2rPN-gQlY6HGl-kbpc0QfWMdiMugm=w1234-h878-s-no-gm?authuser=0)`}}>
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

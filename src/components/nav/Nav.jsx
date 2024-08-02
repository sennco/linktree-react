import git from '../../assets/Github.svg';
import linkedin from '../../assets/Linkedin.svg';
import insta from '../../assets/Instagram.svg';


const Nav = () => {
  return (
    <nav className="flex flex-row justify-center mt-8 gap-10">
        <a href="https://github.com/sennco"
        ><img className='w-9' src={git}
        /></a>
        <a href="https://www.linkedin.com/in/joaohenrique7369151ab/"
          ><img className='w-9' src={linkedin}
        /></a>
        <a href="https://www.instagram.com/jhsenco/"
          ><img className='w-9' src={insta}
        /></a>
      </nav>
  )
}

export default Nav

import perfil from '../../assets/perfil.png';


const Header = () => {
  return (
    <header className="mt-24 items-center flex flex-col">
        <img
          className="w-36 h-fit"
          src={perfil}
          alt="Foto de perfil de João Senco"
        />
        <h1 className='font-sans text-smoke text-xl font-extralight' >João Senco</h1>
      </header>
  )
}

export default Header;

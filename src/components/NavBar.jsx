const Navbar = () => {
  return (
    <nav className="bg-yellow-200 bg-opacity-75 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        <a className="title-font font-medium text-black">
          <a href="/" className="ml-3 text-xl">
            Inicio
          </a>
        </a>
        <div className="flex flex-wrap items-center text-base justify-center md:justify-end">
          <a href="/About" className="py-1 px-3 hover:bg-yellow-300 rounded text-base md:mr-4">
            Equipo
          </a>
          <a href="/AboutHumedal" className="py-1 px-3 hover:bg-yellow-300 rounded text-base md:mr-4">
            El Humedal
          </a>
          <a href="/Methods" className="py-1 px-3 hover:bg-yellow-300 rounded text-base">
            Metodos y Materiales
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


  
  
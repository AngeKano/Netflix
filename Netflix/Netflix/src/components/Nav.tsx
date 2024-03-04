import { useEffect, useState } from "react";

const Nav = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`w-full flex flex-row items-center px-10 py-5 ${
        prevScrollPos < 100
          ? "bg-gradient-to-t from-transparent from-20% via-transparent to-black"
          : "bg-black"
      } fixed top-0 left-0 z-10 transition-transform ease-in-out duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <img src="./src/assets/logos/NetflixLogo1.png" width="20" alt="" />
      <div className="w-full flex flex-row items-center justify-around px-10 text-white font-gotham">
        <a
          href="#Modeleconomique"
          className="transition-all relative w-min-content before:content-[''] before:w-0 before:h-1 before:absolute before:-bottom-1.5 before:left-0 before:bg-red-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-red-500"
        >
          Modèle Économique
        </a>
        <a
          href="#UniversConcur"
          className="transition-all relative w-min-content before:content-[''] before:w-0 before:h-1 before:absolute before:-bottom-1.5 before:left-0 before:bg-red-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-red-500"
        >
          Concurrence
        </a>
        <a
          href="#Conntreverse"
          className="transition-all relative w-min-content before:content-[''] before:w-0 before:h-1 before:absolute before:-bottom-1.5 before:left-0 before:bg-red-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-red-500"
        >
          Controverses
        </a>
        <a
          href="#Solution"
          className="transition-all relative w-min-content before:content-[''] before:w-0 before:h-1 before:absolute before:-bottom-1.5 before:left-0 before:bg-red-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-red-500"
        >
          Solutions
        </a>
        <a
          href="#"
          className="transition-all relative w-min-content before:content-[''] before:w-0 before:h-1 before:absolute before:-bottom-1.5 before:left-0 before:bg-red-600 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-red-500"
        >
          Bibliographie
        </a>
      </div>
    </nav>
  );
};

export default Nav;

import { useEffect, useRef, useState } from "react";

const Controverse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/lofi.mp3"));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }
  }, []);
  return (
    <section
      id="Conntreverse"
      className="text-white py-44 flex flex-col items-center justify-around px-[14%]  "
    >
      <span className="uppercase font-bold mb-20 items-center self-center flex text-2xl font-gotham">
        Controverses Entourant Netflix
      </span>

      <div className="relative mb-14 ">
        <audio ref={audioRef} src="/audio/lofi.mp3"></audio>
        <img src="/illust/discuss.png" width="400" alt="" />
        <button
          onClick={togglePlayPause}
          className="absolute z-1 -top-0 -right-44  flex flex-row gap-2 font-medium font-gotham items-center justify-center px-7 py-3 rounded-full text-black bg-white"
        >
          <span>Audio</span>
          <img src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"} alt="" />
        </button>
        {isPlaying ? (
          <button
            className="absolute z-1 top-3 -right-6 transition-transform ease-linear duration-700"
            onClick={() => {
              audioRef.current.currentTime = 0;
              audioRef.current.play();
              setIsPlaying(true);
            }}
          >
            <img src="/svg/retry.svg" width={20} alt="" />
            {""}
          </button>
        ) : null}
      </div>
      <div className=" flex flex-col  gap-y-5">
        <p className="text-justify font-gotham text-zinc-400">
          Netflix a été confronté à diverses controverses, notamment des
          préoccupations concernant la représentation culturelle et la diversité
          dans ses contenus originaux. De plus, son modèle de libération de
          contenu intégral a été critiqué pour son impact potentiel sur les
          industries du cinéma et de la télévision traditionnelles, ainsi que
          pour ses implications sur le piratage numérique.
        </p>
        <a href="#" className="flex flex-row items-center gap-3 group">
          En savoir
          <img
            src="/svg/right.svg"
            className="group-hover:ml-2  transition-all ease-in duration-150 "
            alt=""
          />
        </a>
      </div>
    </section>
  );
};

export default Controverse;

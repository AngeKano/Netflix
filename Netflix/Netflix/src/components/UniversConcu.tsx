import { useEffect, useRef, useState } from "react";

const UniversConcu = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/Universconcurrentiel.mp3"));

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
      id="UniversConcur"
      className="text-white py-44 flex flex-col items-center justify-around px-[14%]  "
    >
      <div className="absolute -z-2 top-[22%] -right-[40%] w-[62rem] h-[62rem] rounded-full bg-[url('/gradient/elips2.webp')] bg-cover"></div>
      <div className=" flex flex-col  gap-y-5">
        <span className="uppercase font-bold text-2xl font-gotham">
          Univers Concurrentiel
        </span>
        <p className="text-justify font-gotham text-zinc-400">
          Dans l'industrie du streaming, Netflix fait face à une concurrence
          féroce de la part d'entreprises telles qu'Amazon Prime Video, Disney+,
          Hulu, HBO Max, et d'autres services de streaming émergents. Outre la
          concurrence dans le contenu, Netflix doit également rivaliser pour
          attirer et fidéliser les abonnés avec une expérience utilisateur de
          haute qualité et des prix compétitifs.
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
      <div className="relative ">
        <audio ref={audioRef} src="/audio/Universconcurrentiel.mp3"></audio>
        <img src="/illust/class.webp" width="700" alt="" />
        <button
          onClick={togglePlayPause}
          className="absolute z-1 -top-0 -right-44  flex flex-row gap-2 font-medium font-gotham items-center justify-center px-7 py-3 rounded-full text-black bg-white"
        >
          <span>Audio</span>
          <img src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"} alt="" />
        </button>
        {isPlaying ? (
          <button
            className="absolute -z-1 top-3 -right-6 transition-transform ease-linear duration-700"
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
    </section>
  );
};

export default UniversConcu;

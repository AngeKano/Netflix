import { useEffect, useRef, useState } from "react";

const Solution = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio("/audio/Solution.mp3"));

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
      id="Solution"
      className="text-white h-screen flex flex-row items-center justify-around px-[14%]  "
    >
      <div className="relative ">
        <audio ref={audioRef} src="/audio/Solution.mp3"></audio>
        <img src="/illust/solution.png" width="500" alt="" />
        <button
          onClick={togglePlayPause}
          className="absolute z-1 bottom-7 right-12  flex flex-row gap-2 font-medium font-gotham items-center justify-center px-7 py-3 rounded-full text-black bg-white"
        >
          <span>Audio</span>
          <img src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"} alt="" />
        </button>
        {isPlaying ? (
          <button
            className="absolute z-1 bottom-10 right-52 transition-transform ease-linear duration-700"
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
      <div className=" flex flex-col max-w-[450px] gap-y-5">
        <span className="uppercase font-bold text-2xl font-gotham">
          Solutions pour un Numérique Plus Éthique
        </span>
        <p className="text-justify font-gotham text-zinc-400">
          Pour promouvoir un numérique plus éthique, Netflix pourrait investir
          dans la diversification de ses contenus pour mieux représenter la
          diversité culturelle, ethnique et sociale. De plus, l'entreprise
          pourrait adopter des pratiques de production plus durables et
          écologiques, ainsi que renforcer ses mesures de protection de la vie
          privée des utilisateurs pour garantir une utilisation responsable des
          données personnelles.
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

export default Solution;

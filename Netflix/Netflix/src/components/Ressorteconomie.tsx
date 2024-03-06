import { useEffect, useRef, useState } from "react";

const Ressorteconomie = () => {
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
      id="Ressorteconomique"
      className="text-white h-screen flex flex-row items-center justify-around px-[14%]  "
    >
      <div className=" flex flex-col max-w-[450px] gap-y-5">
        <span className="uppercase font-bold text-2xl font-gotham">
          Ressorts de l'Économie Numérique
        </span>
        <p className="text-justify font-gotham text-zinc-400">
          Netflix tire parti des avancées technologiques dans le streaming
          vidéo, de l'ubiquité de l'accès à Internet et de la prolifération des
          appareils connectés pour fournir un divertissement à la demande à ses
          abonnés. Son algorithme de recommandation basé sur l'apprentissage
          automatique et l'analyse des données permet de personnaliser
          l'expérience de visionnage pour chaque utilisateur, favorisant ainsi
          l'engagement et la fidélité.
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
        <audio ref={audioRef} src="/audio/lofi.mp3"></audio>
        <img src="/illust/netflix.webp" width="200" alt="" />
        <button
          onClick={togglePlayPause}
          className="absolute z-1 -bottom-7 -left-24  flex flex-row gap-2 font-medium font-gotham items-center justify-center px-7 py-3 rounded-full text-black bg-white"
        >
          <span>Audio</span>
          <img
            src={isPlaying ? "/svg/pause.svg" : "/svg/play.svg"}
            alt=""
          />
        </button>
        {isPlaying ? (
          <button
            className="absolute z-1 -bottom-4 left-12 transition-transform ease-linear duration-700"
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

export default Ressorteconomie;

const Stats = () => {
  return (
    <>
      <div className="w-full flex flex-row items-center justify-center h-96 bg-[url('/background/imm.png')] bg-contain bg-center bg-no-repeat">
        <span className="uppercase text-white text-3xl font-bold">
          STATISTICS ET RECORDS
        </span>
      </div>
      <section className="flex flex-col justify-center py-[10%] items-center font-gotham px-[14%] gap-y-20 ">
        <div className="flex flex-col gap-y-5 ">
          <span className="flex flex-col gap-y-2 items-center justify-center text-4xl text-white">
            <span className="text-red-600 font-gotham text-5xl font-semibold">
              +200
            </span>
            Millions d’abonnés
          </span>
          <span className="text-zinc-300 max-w-screen-md text-center ">
            À ce jour, Netflix compte plus de 200 millions d'abonnés dans le
            monde, ce qui en fait l'un des principaux acteurs du marché du
            streaming vidéo.
          </span>
        </div>
        <div className="flex flex-row items-end  justify-around w-full">
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="flex flex-row gap-5 items-end">
              <div className="w-14 h-20 bg-white"></div>
              <div className="w-14 h-32 bg-white"></div>
              <div className="flex flex-col items-center gap-3">
                <span className="text-white font-gotham">2022</span>
                <div className="w-14 h-44 bg-red-600"></div>
              </div>
            </div>
            <span className="flex flex-row justify-end items-end text-lg text-white gap-2">
              <span className="font-gotham text-red-600 text-2xl font-semibold">
                +25 Milliards
              </span>
              de dollars durant l’année 2022
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-7">
            <div className="flex flex-row gap-5 items-start justify-end w-[250px] h-[250px] bg-white rounded-full">
              <div className="w-[125px] h-[125px] bg-red-600 rounded-tr-full flex flex-row items-center justify-center">
                <span className="font-bold text-2xl text-white">25%</span>
              </div>
            </div>
            <span className="flex flex-row justify-end items-end text-lg text-white gap-2">
              <span className="font-gotham text-red-600 text-2xl font-semibold">
                +25%
              </span>
              du marché du streaming vidéos
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-around mt-20 w-full font-gotham">
          <img src="/background/img8.png" width={400} alt="" />
          <span className="text-2xl text-center text-white flex flex-col justify-end items-center gap-3 max-w-[377px]">
            <span className="text-3xl text-red-600 font-bold">
              17 milliards
            </span>
            de dollars dépensé en 2021 dans la production
          </span>
        </div>
      </section>
    </>
  );
};

export default Stats;

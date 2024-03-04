import Nav from "./components/Nav";
import Modeleconomique from "./components/Modeleconomique";
import Ressorteconomie from "./components/Ressorteconomie";
import UniversConcu from "./components/UniversConcu";
import Grille from "./components/Grille";
import Controverse from "./components/Controverse";
import Solution from "./components/Solution";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Finals from "./components/Finals";

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Modeleconomique />
      <Ressorteconomie />
      <UniversConcu />
      <Grille />
      <Controverse />
      <Solution />
      <Stats />
      <Finals />
      <div className="absolute -z-2 top-[22%] -right-[40%] w-[62rem] h-[62rem] rounded-full bg-[url('/gradient/elips2.png')] bg-cover"></div>
      <div className="absolute -z-3 top-[55%] -left-[40%] w-[62rem] h-[62rem] rounded-full bg-[url('/gradient/elips3.png')] bg-cover"></div>
      <div className="absolute -z-6 top-[68%] -right-[35%] w-[62rem] h-[62rem] rounded-full bg-[url('/gradient/elips5.png')] bg-cover"></div>
    </>
  );
}

export default App;

{
  /* <div className="flex flex-col items-center pb-10 bg-black">
  <div className="flex flex-col px-5 mt-72 w-full max-w-[1127px] max-md:mt-10 max-md:max-w-full">
    <div className="self-center max-w-full w-[937px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-xl font-semibold text-center text-black whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a523a03347eb1b624829903bbdcca6b6ac54999bcce4560ac95fc7c0c42615ed?apiKey=43028ea351e04a60a58ebccc886c8606&"
              alt=""
              className="w-40 max-w-full aspect-[0.55]"
            />
            <div className="flex gap-2.5 justify-center self-end px-10 py-4 bg-white rounded-[1000px] max-md:px-5">
              <div>Audio</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bd483b322728fc59054acb4203f0edd4a9f6ffd52099abf5a3e6e0334ccbd6?apiKey=43028ea351e04a60a58ebccc886c8606&"
                alt=""
                className="my-auto aspect-[0.87] fill-black w-[13px]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl font-bold text-center uppercase max-md:max-w-full">
              Modèle Economique
            </div>
            <div className="mt-7 text-lg leading-7 text-justify max-md:max-w-full">
              Netflix est un service de streaming vidéo par abonnement offrant
              une vaste gamme de films, séries télévisées et autres contenus
              originaux et sous licence. Son modèle économique repose sur des
              abonnements mensuels, offrant différents niveaux d'accès en
              fonction du prix. En plus de cela, Netflix génère des revenus
              grâce à ses productions originales, à la publicité et à des
              partenariats de contenu.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-4 justify-center self-end px-8 py-4 mt-3 mr-7 text-xl font-semibold text-center text-white rounded-[1000px] max-md:px-5 max-md:mr-2.5">
      <div>En savoir</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/349768005a0f13a4e1a5a562803278a009b5d1ed47602b907646de2db8baabf5?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="my-auto w-2.5 aspect-[0.63] fill-white"
      />
    </div>
    <div className="self-center mt-80 max-w-full w-[922px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl font-bold uppercase max-md:max-w-full">
              Ressorts de l'Économie Numérique
            </div>
            <div className="mt-7 text-lg leading-7 text-justify max-md:max-w-full">
              Netflix tire parti des avancées technologiques dans le streaming
              vidéo, de l'ubiquité de l'accès à Internet et de la prolifération
              des appareils connectés pour fournir un divertissement à la
              demande à ses abonnés. Son algorithme de recommandation basé sur
              l'apprentissage automatique et l'analyse des données permet de
              personnaliser l'expérience de visionnage pour chaque utilisateur,
              favorisant ainsi l'engagement et la fidélité.
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-xl font-semibold text-center text-black whitespace-nowrap max-md:mt-10">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3bd05cb7fbb489b49b4d35e4ad5becce564eb837d6d5556a449b7c98e12f3e2e?apiKey=43028ea351e04a60a58ebccc886c8606&"
              alt=""
              className="self-end max-w-full aspect-[0.68] w-[199px]"
            />
            <div className="flex gap-2.5 justify-between px-16 py-4 bg-white rounded-[1000px] max-md:px-5">
              <div>Audio</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bd483b322728fc59054acb4203f0edd4a9f6ffd52099abf5a3e6e0334ccbd6?apiKey=43028ea351e04a60a58ebccc886c8606&"
                alt=""
                className="my-auto aspect-[0.87] fill-black w-[13px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-4 justify-center self-start px-8 py-4 mt-1.5 ml-8 text-xl font-semibold text-center text-white rounded-[1000px] max-md:px-5 max-md:ml-2.5">
      <div>En savoir</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/349768005a0f13a4e1a5a562803278a009b5d1ed47602b907646de2db8baabf5?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="my-auto w-2.5 aspect-[0.63] fill-white"
      />
    </div>
    <div className="self-start mt-64 ml-8 text-2xl font-bold text-white uppercase max-md:mt-10 max-md:ml-2.5">
      Univers Concurrentiel
    </div>
    <div className="self-center mt-7 text-lg leading-7 text-justify text-white max-md:max-w-full">
      Dans l'industrie du streaming, Netflix fait face à une concurrence féroce
      de la part d'entreprises telles qu'Amazon Prime Video, Disney+, Hulu, HBO
      Max, et d'autres services de streaming émergents. Outre la concurrence
      dans le contenu, Netflix doit également rivaliser pour attirer et
      fidéliser les abonnés avec une expérience utilisateur de haute qualité et
      des prix compétitifs.
    </div>
    <div className="flex gap-2.5 justify-center self-end px-10 py-4 mt-5 mr-8 text-xl font-semibold text-center text-black whitespace-nowrap bg-white rounded-[1000px] max-md:px-5 max-md:mr-2.5">
      <div>Audio</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bd483b322728fc59054acb4203f0edd4a9f6ffd52099abf5a3e6e0334ccbd6?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="my-auto aspect-[0.87] fill-black w-[13px]"
      />
    </div>
    <div className="self-center py-px max-w-full w-[700px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between self-stretch my-auto max-md:mt-10">
            <div className="flex justify-center items-center px-2.5 my-auto bg-cyan-100 rounded-full h-[100px] w-[100px]">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1c658fb36d8ff00c3221e4befd6590d91f9310bb16102b0183878e72a43204?apiKey=43028ea351e04a60a58ebccc886c8606&"
                alt=""
                className="w-full aspect-[3.33]"
              />
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/629bd41dbdce4bd0d534784031af4a8bce589212d746f85c1cdb317906c0f1e1?apiKey=43028ea351e04a60a58ebccc886c8606&"
              alt=""
              className="max-w-full aspect-[0.4] w-[100px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-5 justify-between items-start max-md:mt-10">
            <div className="flex justify-center items-center self-start px-6 bg-red-300 rounded-full h-[100px] w-[100px] max-md:px-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a827e33aa2a71e36c7971a51a77d12940d63dac26c108a855a1af73fb0498a0d?apiKey=43028ea351e04a60a58ebccc886c8606&"
                alt=""
                className="z-10 w-full aspect-[0.54]"
              />
            </div>
            <div className="flex justify-center items-center self-end px-1.5 mt-12 bg-indigo-300 rounded-full h-[100px] w-[100px] max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/22c82d607854b796610ba8f4d2af9ea4e5c006a53e51023df32f557d19f8c2d7?apiKey=43028ea351e04a60a58ebccc886c8606&"
                alt=""
                className="w-full aspect-[1.52]"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/07e1f6ceb6afeafd352017365f5d5a2b36444c6acc869056e62fa280a7f48437?apiKey=43028ea351e04a60a58ebccc886c8606&"
            alt=""
            className="grow mt-44 max-w-full aspect-[0.39] w-[100px] max-md:mt-10"
          />
        </div>
      </div>
    </div>
    <div className="self-center mt-60 text-3xl font-medium text-center text-white whitespace-nowrap max-md:mt-10">
      GRILLE TARIFAIRE
    </div>
    <div className="flex gap-5 justify-between self-end mt-20 mr-20 max-w-full text-xl font-bold text-center text-white uppercase w-[702px] max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
      <div>Essential avec pub</div>
      <div className="flex gap-5 justify-between my-auto whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto">Essential</div>
        <div className="flex-auto">Standard</div>
        <div className="flex-auto">Premium</div>
      </div>
    </div>
    <div className="flex gap-5 justify-between px-20 py-7 mt-7 w-full text-xl font-medium text-white bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div>Prix </div>
      <div className="flex gap-5 justify-between text-center uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div>5,99€</div>
        <div>10,99€</div>
        <div>13,49€</div>
        <div>19,99€</div>
      </div>
    </div>
    <div className="flex gap-5 justify-between px-20 py-7 text-xl font-medium text-white bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-auto">Écrans en simultané</div>
      <div className="text-center uppercase">1</div>
      <div className="text-center uppercase">1</div>
      <div className="text-center uppercase">2</div>
      <div className="text-center uppercase">4</div>
    </div>
    <div className="flex gap-5 justify-between px-20 py-7 w-full bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-auto text-xl font-medium text-white">HD (1020p)</div>
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ebc186f395e448268c05defce6c08efad035afd0d1f852d66e676a09586ba3?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="my-auto aspect-[0.87] w-[13px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a51b9fafb19abd7f1e9d555de50f41429acf116cd3dd1a198d6d70e69eb70e?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="my-auto aspect-[0.87] w-[13px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/269d117e99c5a6933c75c5c6285cfa33f9a701a1c25b9d3da447535cd5228ebc?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="aspect-[1.16] fill-white w-[22px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/89b68a0ce4d5fe3c9ff80b7ac4b03456132fec7c96b21406dfa513c7493dac7b?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="aspect-[1.16] fill-white w-[22px]"
        />
      </div>
    </div>
    <div className="flex gap-5 justify-between items-center px-20 py-7 text-xl font-medium text-white bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-auto self-stretch">Ultra HD (4K)</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ebc186f395e448268c05defce6c08efad035afd0d1f852d66e676a09586ba3?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="self-stretch my-auto aspect-[0.87] w-[13px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a51b9fafb19abd7f1e9d555de50f41429acf116cd3dd1a198d6d70e69eb70e?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="self-stretch my-auto aspect-[0.87] w-[13px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f5071e1d5e31cf2ddde55b2183d4606db3ee131fca4b7e26118c0301c990c5?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="self-stretch my-auto aspect-[0.87] w-[13px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89b68a0ce4d5fe3c9ff80b7ac4b03456132fec7c96b21406dfa513c7493dac7b?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="self-stretch aspect-[1.16] fill-white w-[22px]"
      />
    </div>
    <div className="flex gap-5 justify-between px-20 py-7 text-xl font-medium text-white whitespace-nowrap bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-auto">Téléchargement</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ebc186f395e448268c05defce6c08efad035afd0d1f852d66e676a09586ba3?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="my-auto aspect-[0.87] w-[13px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/93a51b9fafb19abd7f1e9d555de50f41429acf116cd3dd1a198d6d70e69eb70e?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="my-auto aspect-[0.87] w-[13px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/269d117e99c5a6933c75c5c6285cfa33f9a701a1c25b9d3da447535cd5228ebc?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="aspect-[1.16] fill-white w-[22px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/89b68a0ce4d5fe3c9ff80b7ac4b03456132fec7c96b21406dfa513c7493dac7b?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="aspect-[1.16] fill-white w-[22px]"
      />
    </div>
    <div className="flex gap-5 justify-between px-20 py-7 w-full bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="my-auto text-xl font-medium text-white">Publicité</div>
      <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/528a5effeea2b5beccd474e125965971801edd3e8d68f11a14dcc76cae76a451?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="self-stretch aspect-[1.16] fill-white w-[22px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dafe0ad6521da35103a92b32640310c4af7c2f4e44873f5179c252b7ba6ec7f?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="self-stretch my-auto aspect-[0.87] w-[13px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/121308986d6b9237d9697b6735403dfdfb0f988db0b383cb46e190cec84b79b5?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="self-stretch my-auto aspect-[0.87] w-[13px]"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a7478d03684b520741e912b7de28beb910863c508ddce7c98f90611949f04653?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="self-stretch my-auto aspect-[0.87] w-[13px]"
        />
      </div>
    </div>
    <div className="self-center mt-48 text-2xl font-bold text-white uppercase max-md:mt-10 max-md:max-w-full">
      Controverses Entourant Netflix
    </div>
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e6577a34010f7d7c29c414b922f967fbc8590d3c4bae45f3bdb73f02611a9a96?apiKey=43028ea351e04a60a58ebccc886c8606&"
      alt=""
      className="self-center mt-16 max-w-full aspect-[1.52] w-[524px] max-md:mt-10"
    />
    <div className="self-center mt-16 text-lg leading-7 text-justify text-white w-[808px] max-md:mt-10 max-md:max-w-full">
      Netflix a été confronté à diverses controverses, notamment des
      préoccupations concernant la représentation culturelle et la diversité
      dans ses contenus originaux. De plus, son modèle de libération de contenu
      intégral a été critiqué pour son impact potentiel sur les industries du
      cinéma et de la télévision traditionnelles, ainsi que pour ses
      implications sur le piratage numérique.
    </div>
    <div className="flex gap-4 justify-center self-end px-8 py-4 mt-9 mr-40 text-xl font-semibold text-center text-white rounded-[1000px] max-md:px-5 max-md:mr-2.5">
      <div>En savoir</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/349768005a0f13a4e1a5a562803278a009b5d1ed47602b907646de2db8baabf5?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="my-auto w-2.5 aspect-[0.63] fill-white"
      />
    </div>
  </div>
  <div className="mt-16 w-full max-w-[1116px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden relative flex-col justify-center items-end px-16 py-12 text-xl font-semibold text-center text-black whitespace-nowrap min-h-[600px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5d11b41537ac210e43df95881fcd925a160d786f6ba99c853dcd16382f7de3c1?apiKey=43028ea351e04a60a58ebccc886c8606&"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative gap-2.5 justify-center px-10 py-4 mt-96 mr-20 bg-white rounded-[1000px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
            <div>Audio</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bd483b322728fc59054acb4203f0edd4a9f6ffd52099abf5a3e6e0334ccbd6?apiKey=43028ea351e04a60a58ebccc886c8606&"
              alt=""
              className="my-auto aspect-[0.87] fill-black w-[13px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col px-5 mt-40 text-white max-md:mt-10 max-md:max-w-full">
          <div className="text-2xl font-bold uppercase max-md:max-w-full">
            Solutions pour un Numérique Plus Éthique
          </div>
          <div className="mt-7 text-lg leading-7 text-justify max-md:max-w-full">
            Pour promouvoir un numérique plus éthique, Netflix pourrait investir
            dans la diversification de ses contenus pour mieux représenter la
            diversité culturelle, ethnique et sociale. De plus, l'entreprise
            pourrait adopter des pratiques de production plus durables et
            écologiques, ainsi que renforcer ses mesures de protection de la vie
            privée des utilisateurs pour garantir une utilisation responsable
            des données personnelles.
          </div>
          <div className="flex gap-4 justify-center self-end px-8 py-4 mt-9 text-xl font-semibold text-center rounded-[1000px] max-md:px-5">
            <div>En savoir</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/349768005a0f13a4e1a5a562803278a009b5d1ed47602b907646de2db8baabf5?apiKey=43028ea351e04a60a58ebccc886c8606&"
              alt=""
              className="my-auto w-2.5 aspect-[0.63] fill-white"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="overflow-hidden relative flex-col justify-center items-center self-stretch px-16 pt-44 pb-28 mt-36 w-full text-5xl font-medium text-center text-white min-h-[351px] max-md:px-5 max-md:py-10 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/83a960630343acea4c51630d640ea2c03fa44587df43ec7a1cd2834206ed4760?apiKey=43028ea351e04a60a58ebccc886c8606&"
      alt=""
      className="object-cover absolute inset-0 size-full"
    />
    STATISTICS ET RECORDS
  </div>
  <div className="mt-44 text-5xl font-bold text-center text-white max-md:mt-10 max-md:text-4xl">
    <span className="text-red-600">+200</span>
    <br />
    <span className="text-4xl">Millions d’abonnés</span>
  </div>
  <div className="mt-9 text-lg font-light leading-7 text-center text-white w-[1022px] max-md:max-w-full">
    À ce jour, Netflix compte plus de 200 millions d'abonnés dans le monde, ce
    qui en fait l'un des principaux acteurs du marché du streaming vidéo.
    <br />
  </div>
  <div className="mt-52 text-2xl font-bold leading-8 text-center text-white max-md:mt-10">
    2022
  </div>
  <div className="flex gap-5 justify-between mt-2.5 max-w-full text-2xl font-bold leading-8 text-center text-white whitespace-nowrap w-[871px] max-md:flex-wrap">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a90e0651a348bc935d92040fcd9fb746ff003d85eebb9ab0d6468c6a2f8c13bd?apiKey=43028ea351e04a60a58ebccc886c8606&"
      alt=""
      className="self-start mt-3.5 max-w-full aspect-[0.92] w-[217px]"
    />
    <div className="overflow-hidden relative flex-col justify-center items-end px-16 pt-16 pb-12 aspect-square max-md:px-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f8370f36f3e38fd7af579f3778cb39b90f3bfbc634ab5910b21a4440b01d14f?apiKey=43028ea351e04a60a58ebccc886c8606&"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      25%
    </div>
  </div>
  <div className="flex gap-5 justify-between pr-5 mt-16 max-w-full text-3xl font-medium leading-10 text-center text-white w-[967px] max-md:flex-wrap max-md:mt-10">
    <div className="flex-auto">
      <span className="text-4xl text-red-600">+25</span>
      <span className="text-red-600"> Milliards</span> de dollars durant l’année
      2022
    </div>
    <div className="flex-auto">
      <span className="text-4xl text-red-600">+25%</span> du marché du streaming
      vidéos
    </div>
  </div>
  <div className="mt-80 w-full max-w-[987px] max-md:mt-10 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
      <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/61d4ce9e39234e3ab60745941d93080dc498ba5382d8d59ee212a19f72f6c2e6?apiKey=43028ea351e04a60a58ebccc886c8606&"
          alt=""
          className="grow w-full aspect-[1.1] max-md:mt-10 max-md:max-w-full"
        />
      </div>
      <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
        <div className="self-stretch my-auto text-3xl font-medium leading-10 text-center text-white max-md:mt-10">
          <span className="text-3xl font-bold text-red-600">17 milliards</span>{" "}
          de dollars dépensé en 2021 dans la production
        </div>
      </div>
    </div>
  </div>
  <div className="overflow-hidden relative flex-col justify-center items-center self-stretch px-16 pt-80 pb-64 mt-32 w-full text-5xl font-medium text-center text-white min-h-[766px] max-md:px-5 max-md:py-10 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5eb625d596a3b93e03e476ca283b93329d486d44847cda48fd16599ebe4cce9f?apiKey=43028ea351e04a60a58ebccc886c8606&"
      alt=""
      className="object-cover absolute inset-0 size-full"
    />
    <span className="font-bold text-red-600">+7000</span> Films et séries
    disponible
  </div>
  <div className="self-stretch mt-20 w-full bg-neutral-500 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
  <div className="flex flex-col self-start mt-16 ml-52 max-w-full w-[738px] max-md:mt-10">
    <div className="max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-lg font-medium text-center text-white whitespace-nowrap max-md:mt-10">
            <div className="underline">Controverses</div>
            <div className="mt-12 underline max-md:mt-10">Solutions</div>
            <div className="mt-12 underline max-md:mt-10">
              Economie Numérique
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-lg font-medium text-center text-white whitespace-nowrap max-md:mt-10">
            <div className="underline">Modèle Économique</div>
            <div className="mt-12 underline max-md:mt-10">Statistique</div>
            <div className="mt-12 underline max-md:mt-10">
              Univers Concurrentiel
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-lg font-medium text-center text-white max-md:mt-10">
            <div className="underline whitespace-nowrap">
              Bibliographie / Sitographie
            </div>
            <div className="mt-12 underline max-md:mt-10">A propos</div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-end mt-28 text-sm font-medium text-center text-zinc-300 max-md:mt-10 max-md:max-w-full">
      Copyright © 2024 . All Right Reserve MASTER I E-BIHAR ESATIC{" "}
    </div>
  </div>
</div>; */
}

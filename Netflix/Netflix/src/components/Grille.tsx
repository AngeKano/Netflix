const Grille = () => {
  return (
    <section className="text-white py-28  font-gotham  items-center justify-around px-[14%] ">
      <span className="uppercase flex items-center justify-center self-center text-xl font-bold">
        Grille Tarrifaire
      </span>
      <div className="flex gap-5 justify-end items-end self-end mt-20 mr-20 max-w-full text-xl  text-white uppercase  max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
        <div className="flex gap-10 justify-end font-bold my-auto whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto">Essential avec pub</div>
          <div className="flex-auto">Essential</div>
          <div className="flex-auto">Standard</div>
          <div className="flex-auto">Premium</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-20 py-5 mt-7 w-full text-xl font-medium text-white bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>Prix </div>
        <div className="flex gap-24 justify-around text-center uppercase whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
          <div>5,99€</div>
          <div>10,99€</div>
          <div>13,49€</div>
          <div>19,99€</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-20 py-3 text-xl font-medium text-white bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto">Écrans en simultané</div>
        <div className="flex flex-row w-full  justify-end gap-x-40">
          <div className="text-center uppercase">1</div>
          <div className="text-center uppercase">1</div>
          <div className="text-center uppercase">2</div>
          <div className="text-center uppercase">4</div>
        </div>
      </div>
      <div className="flex gap-5 justify-between px-20 py-7 w-full bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto text-xl font-medium text-white">
          HD (1020p)
        </div>
        <div className="flex gap-x-36 w-full justify-end max-md:flex-wrap max-md:max-w-full">
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
      <div className="flex gap-5 justify-between items-center px-20 py-3 text-xl font-medium text-white bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto self-stretch">Ultra HD (4K)</div>
        <div className="flex gap-x-36 w-full justify-end max-md:flex-wrap max-md:max-w-full">
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
      </div>
      <div className="flex gap-5 justify-between px-20 py-7 text-xl font-medium text-white whitespace-nowrap bg-black max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex-auto">Téléchargement</div>
        <div className="flex gap-x-36 w-full justify-end max-md:flex-wrap max-md:max-w-full">
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
      <div className="flex gap-5 justify-between px-20 py-7 w-full bg-neutral-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="my-auto text-xl font-medium text-white">Publicité</div>
        <div className="flex gap-x-36 w-full justify-end max-md:flex-wrap max-md:max-w-full">
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
    </section>
  );
};

export default Grille;

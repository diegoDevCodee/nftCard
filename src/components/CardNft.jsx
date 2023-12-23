const CardNft = () => {
  return (
    <article className="w-[20rem] p-6 bg-cardBg rounded-2xl shadow-2xl">
      <div className="group rounded-lg overflow-hidden relative ">
        <img
          src="images/image-equilibrium.jpg"
          alt="nft image"
          className="object-cover w-full"
        />
        <div className="absolute z-10 top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyanNft/45 w-full h-full flex items-center justify-center">
          <img src="images/icon-view.svg" />
        </div>
      </div>

      <section className="mt-5 flex flex-col gap-5">
        <h1 className="text-xl font-bold text-whiteNft hover:text-cyanNft cursor-pointer transition-all">
          Equilibrium #3426
        </h1>
        <p className="text-softBlue">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <div>
              <img src="images/icon-ethereum.svg" alt="icon ethereum" />
            </div>
            <span className="font-bold text-cyanNft"> 0.041 ETH</span>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div>
              <img src="images/icon-clock.svg" alt="" />
            </div>
            <span className="text-softBlue">3 days left</span>
          </div>
        </div>
        <div className="w-full h-[0.13rem] bg-line"></div>
      </section>

      <footer className="flex items-center gap-3 mt-4">
        <img
          src="images/image-avatar.png"
          alt="user image"
          width={32}
          height={32}
          className="border rounded-full border-t-whiteNft"
        />

        <p className="text-softBlue">
          Creation of{" "}
          <span className="text-whiteNft cursor-pointer hover:text-cyanNft transition-all">
            Jules Wyver
          </span>
        </p>
      </footer>
    </article>
  );
};

export default CardNft;

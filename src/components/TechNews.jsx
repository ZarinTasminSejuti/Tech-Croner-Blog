const TechNews = () => {
  return (
    <div className="w-[1280px] mx-auto my-24">
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-2 gap-6">
          <img className="w-[900px] h-[300px]" src="https://i.ibb.co/nC21Rsd/Rectangle-2-6.png" alt="" />
          <img className="w-[900px] h-[300px]" src="https://i.ibb.co/nC21Rsd/Rectangle-2-6.png" alt="" />
          <img className="w-[900px] h-[300px]" src="https://i.ibb.co/nC21Rsd/Rectangle-2-6.png" alt="" />
          <img className="w-[900px] h-[300px]" src="https://i.ibb.co/nC21Rsd/Rectangle-2-6.png" alt="" />
        </div>
        <div className="p-5">
          <h1 className="font-bold text-5xl">
            <span className="text-slate-500">Latest list</span> of Our{" "} <br />
            <span className="text-blue-600 mt-4"> Tech News</span>
          </h1>
          <p className="text-grey text-justify w-full my-5 text-gray-500">
            Dive into the latest in tech news to uncover groundbreaking
            discoveries, futuristic trends, and the ever-evolving landscape of
            technology. Explore the frontiers of AI, quantum computing, the meta
            verse, sustainability, and cybersecurity.
          </p>
          <button className="btn bg-blue-600 text-white">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default TechNews;

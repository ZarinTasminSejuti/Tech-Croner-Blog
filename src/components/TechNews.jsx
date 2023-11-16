const TechNews = () => {
  return (
    <div className="w-full lg:w-[1280px] mx-auto my-24">
      <div className="flex flex-col lg:flex-row gap-3">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6">
          <img className="w-[900px] h-[180px] lg:h-[280px] rounded-md" src="https://i.ibb.co/Lg6LsdT/tech1.jpg" alt="" />
          <img className="w-[900px] h-[180px] lg:h-[280px] rounded-md" src="https://i.ibb.co/c6jdQ8z/tech2.jpg" alt="" />
          <img className="w-[900px] h-[180px] lg:h-[280px] rounded-md" src="https://i.ibb.co/nDmg8j4/tech3.jpg" alt="" />
          <img className="w-[900px] h-[180px] lg:h-[280px] rounded-md" src="https://i.ibb.co/6rwx37C/tech4.jpg" alt="" />
        </div>
        <div className="p-5">
          <h1 className="font-bold text-5xl">
            <span className="text-slate-500">Latest list</span> of Our{" "} <br />
            <span className="text-blue-600"> Tech News</span>
          </h1>
          <p className="text-grey text-justify w-full my-5 text-gray-500">
            Dive into the latest in tech news to uncover groundbreaking
            discoveries, futuristic trends, and the ever-evolving landscape of
            technology. Explore the frontiers of AI, quantum computing, the meta
            verse, sustainability, and cybersecurity.
          </p>
          <button className="btn bg-blue-600 text-white hover:text-blue-600">Explore more</button>
        </div>
      </div>
    </div>
  );
};

export default TechNews;

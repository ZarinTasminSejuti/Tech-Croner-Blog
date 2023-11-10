import { useContext } from "react";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import RecentBlogs from "../components/RecentBlogs";
import TechNews from "../components/TechNews";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
  const { allBlog } = useContext(AuthContext);

    const mainFeaturedPost = {
      title: 'Your Tech Adventure',
      title1: 'Starts Here...',
        description:
          "Dive into the ever-evolving insightful articles of gadgets, software, tech landscape, innovations, and digital trends and embrace the future of technology with confidence.",
      
      };
      




  return (
    <div className="w-full mx-auto">
     
      <Banner post={mainFeaturedPost}></Banner>
      <RecentBlogs allBlog={allBlog}></RecentBlogs>
      <TechNews></TechNews>
    <Newsletter></Newsletter>
      
     
    </div>
  );
};

export default Home;

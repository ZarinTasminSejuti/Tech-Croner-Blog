import { useContext } from "react";
import Banner from "../components/Banner";
import RecentBlogs from "../components/RecentBlogs";
import { AuthContext } from "../providers/AuthProvider";


const Home = () => {
  const { allBlog } = useContext(AuthContext);

    const mainFeaturedPost = {
      title: 'Your Tech Adventure',
      title1: 'Starts Here...',
        description:
          "Dive into the ever-evolving insightful articles of gadgets, software, tech landscape, innovations, and digital trends and embrace the future of technology with confidence.",
        image: 'https://i.ibb.co/3FgMPXm/blog-banner.jpg',
        // imageText: 'main image description',
        // linkText: 'Continue reading…',
      };
      




  return (
    <div>
     
      <Banner post={mainFeaturedPost}></Banner>
      <RecentBlogs allBlog={allBlog}></RecentBlogs>
     
    </div>
  );
};

export default Home;

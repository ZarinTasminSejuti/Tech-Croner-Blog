import Banner from "../components/Banner";
import RecentBlogs from "../components/RecentBlogs";


const Home = () => {

    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
          "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random?wallpapers',
        imageText: 'main image description',
        linkText: 'Continue reading…',
      };
      




  return (
    <div>
     
      <Banner post={mainFeaturedPost}></Banner>
      <RecentBlogs></RecentBlogs>
     
    </div>
  );
};

export default Home;

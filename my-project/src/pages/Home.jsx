import React from "react";
import ReactDOM from "react-dom";
import anime from "./animeback.jpg";  // Background image for the page
import AnimeCard from "./AnimeCard";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center p-5 bg-gray-800 text-white">
        <div>
          <p className="font-mono text-xl">AnimeRate</p>
        </div>
        <div className="ml-auto space-x-10">
          <a href="/" className="hover:text-blue-400">HOME</a>
          <a href="/Login" className="hover:text-blue-400">LOGIN</a>
          <a href="/SignUp" className="hover:text-blue-400">SIGN UP</a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="restpage flex py-0">
        {/* Background Image */}
        <img src={anime} alt="anime background" className="w-1/2 object-cover m-0" />
        
        {/* Text Section */}
        <div className="right border-gray-950 border-x-8 border-y-8 bg-gray-800 text-white text-center w-1/2 m-0">
          <h1 className="py-9 px-4 font-mono text-6xl">AnimeRate</h1>
          <p className="font-mono px-4 text-2xl">
            AnimeRate is a platform created for anime enthusiasts, by anime enthusiasts! Dive into a vibrant community where your opinions matter. Whether you're a seasoned otaku or a casual viewer, AnimeRate provides a space to share your thoughts, write detailed reviews, and rate your favorite anime shows.
          </p>
        </div>
      </div>

      {/* Anime Cards Section */}
      <div className="animecard my-0 bg-gray-800 py-5">
        <div className="flex flex-wrap justify-center m-0 gap-12  ">
          <AnimeCard
            animeName="Naruto"
            imageUrl="https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
          />
          <AnimeCard
            animeName="Tokyo Ghoul"
            imageUrl="https://m.media-amazon.com/images/M/MV5BZWI2NzZhMTItOTM3OS00NjcyLThmN2EtZGZjMjlhYWMwODMzXkEyXkFqcGc@._V1_.jpg"  // Corrected link
          />
          <AnimeCard
            animeName="One Piece"
            imageUrl="https://wallpapers.com/images/featured/one-piece-iphone-6cakwu3a3exyh3p3.jpg"  // Provided link
          />
          <AnimeCard
            animeName="JoJo's Bizarre Adventure"
            imageUrl="https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/jojos-bizzare-adventure-franchise-poster.jpg"  // Provided link
          />
          <AnimeCard
            animeName="Attack on Titan"
            imageUrl="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg"  // Provided link
          />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));

export default Home;

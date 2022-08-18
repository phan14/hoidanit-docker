import videoHomePage from "../../asset/video-hompage.mp4";
import "./home.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
    </div>
  );
};

export default Homepage;

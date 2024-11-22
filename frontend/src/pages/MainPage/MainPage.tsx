import Hero from "./Sections/Hero";
import './mainpage.css';
import NewestGame from "./Sections/NewestGame";
const MainPage = () => {
  return (
    <div className="mainpageCont">
      <div className="wrapper">
        <Hero></Hero>
        <NewestGame></NewestGame>
      </div>
    </div>
    
  )
}

export default MainPage

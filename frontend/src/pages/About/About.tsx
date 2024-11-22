
import People from '../../components/people/People';
import './about.css';
import aboutImg from '../../assets/about.svg';
const About = () => {
  return (
    <div className='aboutCont'>
      <div className="wrapper">
        <div className="aboutStudio">
          <div className="aboutText">
            <h2>Něco o studiu</h2>
            <p>Rok vzniku: <strong>2020</strong></p>
            <p>Sídlo: <strong>Brno, Česká republika</strong></p>
            <p>Zaměření: <strong>Vývoj nezávislých her</strong></p>
            <p>Velikost týmu: <strong>6 členů</strong></p>
          </div>
          <div><img src={aboutImg} alt="" /></div>
        </div>
        <h2>Náš tým</h2>
        <People></People>
      </div>
    </div>
  )
}

export default About

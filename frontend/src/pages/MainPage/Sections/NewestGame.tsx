
import bookImage from '../../../assets/book.svg';
import handImage from './../../../assets/hand.svg';
import magivWandImage from './../../../assets/magic-wand.svg';
const NewestGame = () => {
  return (
    <div className="gameCont">
        <h2>Naše nejnovější hra</h2>
        <div className='gameStack'>
            <div className='gameInfo'>
                <p><span className="blue">Echoes of Eldoria</span> je akční RPG s otevřeným světem, kde magie a technologie tvoří harmonický celek. Objevte příběh, který se mění podle vašich rozhodnutí.</p>
                <button className='secondary'>Více o hře</button>
            </div>
            <div className="gameFacts">
                <div className="gameFact">
                    <img src={bookImage} alt="" />
                    <p>Unikátní systém magie</p>
                </div>
                <div className="gameFact">
                    <img src={handImage} alt="" />
                    <p>Co-op mód</p>
                </div>
                <div className="gameFact">
                    <img src={magivWandImage} alt="" />
                    <p>Procedurálně generované dungeony</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewestGame

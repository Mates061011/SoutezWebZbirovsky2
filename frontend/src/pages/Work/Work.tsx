
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { cs } from 'date-fns/locale'; // Import Czech locale
import './work.css';
const Countdown: React.FC = () => {
  // Set your target time (for example, a future date)
  const targetDate = new Date('2024-12-31T23:59:59').getTime();

  const [timeLeft, setTimeLeft] = useState<number>(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [targetDate]);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Function to get today's date in the format: "Je pátek 22. listopadu 2024"
  const getTodayDate = () => {
    return `Je ${format(new Date(), 'EEEE dd. MMMM yyyy', { locale: cs })}`;
  };

  return (
    <div className="workCont">
      <div className='wrapper'>
        <h2>Dnešní datum:</h2>
        <p>{getTodayDate()}</p>
        <h1><span className="blue">Echoes of Eldoria</span> výjde již za:</h1>
        <div className="workTimeFull">
          <div className="timePart">
              <div>{days}</div>
              <p className="workPopisek">DNÍ</p>
            </div>
            <div className="timePart">
              <div>{hours}</div>
              <p className="workPopisek">HODIN</p>
            </div>
            <div className="timePart">
              <div>{minutes}</div>
              <p className="workPopisek">MINUT</p>
            </div>
            <div className="timePart">
              <div>{seconds}</div>
              <p className="workPopisek">SEKUND</p>
            </div> 
          </div>     
      </div>  
    </div>
  );
};

export default Countdown;

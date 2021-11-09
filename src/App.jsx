import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [waterVolume, setWaterVolume] = useState(0);
  const [isIncrease, setIsIncrease] = useState(false);

  const step = 20;
  const interval = 2000;

  const fullValue = 100;
  const emptyValue = 0;

  useEffect(() => {
    const delay = setInterval(() => {
      isIncrease && waterVolume < fullValue
        ? setWaterVolume((prevVolume) => prevVolume + step)
        : !isIncrease && waterVolume > emptyValue 
          ? setWaterVolume((prevVolume) => prevVolume - step)
          : setWaterVolume(waterVolume)
    }, interval)
    return () => clearInterval(delay)
  }, [waterVolume, isIncrease])

  return (
    <div className="App">
      <div className="water-main">
        <div className="water-container">
          <div className="water-level" style={{height: `${waterVolume}%`}}>    
          </div>

        </div>
        <p className="measure__stats">
              {waterVolume + '%'}
              <br />
              {
                isIncrease && waterVolume < fullValue
                  ? 'increasing'
                  : !isIncrease && waterVolume > emptyValue 
                    ? 'decreasing'
                    : waterVolume
                      ? 'full'
                      : 'empty'
              }
            </p>
        <div className="water-button-group">
          <button className='water-volume__increment' onClick={() => setIsIncrease(true)}>
            fill
          </button>
          <button className='water-volume__decrement' onClick={() => setIsIncrease(false)}>
            empty
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

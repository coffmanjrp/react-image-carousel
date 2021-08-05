import { useEffect, useState } from 'react';
import images from './utils/images';
import './App.scss';

function App() {
  const [carousel, setCarousel] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const length = images.length - 1;
  const time = 5000;
  let interval;

  useEffect(() => {
    startInterval();

    // eslint-disable-next-line
  }, []);

  const startInterval = () => {
    interval = setInterval(() => {
      setCarousel((carousel) => (carousel >= length ? 0 : carousel + 1));
    }, time);

    setIntervalId(interval);
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    startInterval();
  };

  const handleNext = () => {
    setCarousel((carousel) => (carousel >= length ? 0 : carousel + 1));
    resetInterval();
  };

  const handlePrev = () => {
    setCarousel((carousel) => (carousel <= 0 ? length : carousel - 1));
    resetInterval();
  };

  return (
    <div className="App">
      <div className="carousel">
        <div className="image-container">
          {images.length > 0 &&
            images.map((image) => (
              <img
                key={image.id}
                src={image.url}
                alt={image.alt}
                style={{ transform: `translateX(-${carousel * 100}%)` }}
              />
            ))}
        </div>
        <div className="buttons-container">
          <button className="btn left" onClick={handlePrev}>
            Prev
          </button>
          <button className="btn right" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

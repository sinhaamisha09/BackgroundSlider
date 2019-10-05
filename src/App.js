import React from 'react';
import Navigation from './components/navigation/navigation.component';
import BackgroundSlider from 'react-background-slider';
import 'tachyons';
import './App.css';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

function App() {
  return (
    <div className="App">
   	 <div className='header' >
      <header className="App-header">
       <h2 className='title'>Borano</h2>
       <Navigation/>
      </header>
      <BackgroundSlider
          images={[image1, image2, image3]}
          duration={3}
          transition={2}
      />
      <footer>
        <div class="controls-wrapper">
            <button class="sideslide swiper-prev">
              <i class="fa fa-chevron-left"></i>
            </button>
            <button class="sideslide swiper-play hidden">
              <i class="fa fa-play"></i>
            </button>
            <button class="sideslide swiper-pause">
              <i class="fa fa-pause"></i>
            </button>
            <button class="sideslide swiper-next">
              <i class="fa fa-chevron-right"></i>
            </button>
            <button class="sideslide expand">
              <i class="fa fa-expand"></i>
            </button>
          </div>
      </footer>
     </div>
     
    </div>
  );
}

export default App;

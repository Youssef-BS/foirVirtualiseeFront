import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

function Slide() {
  
  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="mx-auto mt-7 max-w-screen-md w-9/14 relative">
      <Slider {...settings} className="rounded-lg overflow-hidden" ref={sliderRef}>
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo 1" className="w-full" />
        </div>
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo 2" className="w-full" />
        </div>
        <div className="w-full">
          <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photo 3" className="w-full" />
        </div>
      </Slider>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-lg z-10 bg-gray-800 rounded-full p-2 w-11 h-11" onClick={() => sliderRef.current.slickPrev()}>
        &lt;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-lg z-10 bg-gray-800 rounded-full p-2 w-11 h-11" onClick={() => sliderRef.current.slickNext()}>
        &gt;
      </button>
    </div>
  );
}

export default Slide;

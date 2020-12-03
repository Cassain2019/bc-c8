import React from 'react';
import './App.css';
import useWebAnimations from '@wellyshen/use-web-animations';
function App() {

  const BoxMovement1 = [
    { transform: "translate(0,0)" },
    { transform: "translate(1200px,0)" }

  ];

  const BoxTiming1 = {
    duration: 1500,
    iterations: Infinity
  };

  const BoxNumber1 = useWebAnimations({
    keyframes: BoxMovement1,
    timing: BoxTiming1
  })


  const BoxMovement2 = [
    { transform: "translate(0,0)" },
    { transform: "translate(1200px,0)" }

  ];

  const BoxTiming2 = {
    duration: 2000,
    iterations: Infinity
  };

  const BoxNumber2 = useWebAnimations({
    keyframes: BoxMovement2,
    timing: BoxTiming2
  })

  const BoxMovement3 = [
    { transform: "translate(0,0)" },
    { transform: "translate(1200px,0)" }
  ];

  const BoxTiming3 = {
    duration: 1800,
    iterations: Infinity
  };

  const BoxNumber3 = useWebAnimations({
    keyframes: BoxMovement3,
    timing: BoxTiming3
  })

  return (
    <div>
      <div id="BoxNumber1" className="target" ref={BoxNumber1.ref}>
      </div>

      <div id="BoxNumber2" className="target1" ref={BoxNumber2.ref}>
      </div>

      <div id="BoxNumber3" className="target2" ref={BoxNumber3.ref}>
      </div>
    </div>
  );
};

export default App;

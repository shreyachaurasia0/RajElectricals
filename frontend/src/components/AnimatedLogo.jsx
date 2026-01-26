import React from "react";

const AnimatedLogo = () => {
  return (
    <div
      className="stage"
      style={{
         position: "fixed",
        top: "0",   // stick to very top
        left: "0",  // stick to very left
        width: "350px", // slightly smaller for balance
        maxWidth: "75vw",
        padding: "0px", // no padding
        margin: "0px",  // no margin
        zIndex: 1000,
      }}
    >
      <style>{`
        :root{
          --bg:#000000;
        }
        .stage{width:500px;max-width:80vw}
        svg{display:block;width:100%;height:auto}
        .brand-text{
          font-weight:800;
          letter-spacing:0.6px;
          font-size:50px;
          fill: url(#textGradient);
          opacity:0;
          transform:translateY(6px);
          animation:fadeUp 1s ease forwards 0.6s, sparkRandom 3s infinite 2s;
          filter:drop-shadow(0 0 6px rgba(255,255,255,0.3));
        }
        @keyframes fadeUp{to{opacity:1;transform:translateY(0)}}
        @keyframes sparkRandom {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(255,255,255,0.3)); }
          10% { filter: drop-shadow(0 0 14px rgba(255,255,0,0.7)); }
          23% { filter: drop-shadow(0 0 10px rgba(255,102,0,0.7)); }
          37% { filter: drop-shadow(0 0 16px rgba(0,204,255,0.75)); }
          52% { filter: drop-shadow(0 0 8px rgba(153,51,255,0.7)); }
          68% { filter: drop-shadow(0 0 14px rgba(255,0,128,0.65)); }
          84% { filter: drop-shadow(0 0 10px rgba(255,255,255,0.5)); }
        }
        .tagline{
          font-size:13px;
          opacity:0;
          animation:fadeUp 1s ease forwards 1.2s, flicker 3s infinite 2.4s;
          fill: black;
        }
        /* Switch tagline color in dark theme */
        @media (prefers-color-scheme: dark) {
          .tagline {
            fill: white;
          }
        }

        @keyframes flicker {
          0%, 90%, 100% { opacity: 1; }
          45%, 48% { opacity: 0.7; }
          60% { opacity: 0.5; }
        }
        @media (max-width:520px){.brand-text{font-size:32px}}
      `}</style>
      <svg
        viewBox="10 60 500 100"//0 60 500 70
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="titleDesc"
        role="img"
      >
        <title id="titleDesc">Raj Electricals </title>
        {/* <defs>
          <linearGradient id="textGradient" gradientTransform="rotate(15)">
            <stop offset="0%" stopColor="#ff9933" />
            <stop offset="30%" stopColor="#ff0066" />
            <stop offset="65%" stopColor="#9933ff" />
            <stop offset="100%" stopColor="#00ccff" />
          </linearGradient>
        </defs> */}
        <defs>
          <linearGradient id="textGradient" gradientTransform="rotate(15)">
            <stop offset="0%" stopColor="#0f172a" />   {/* deep navy / slate */}
            <stop offset="40%" stopColor="#1e293b" />  {/* dark grayish navy */}
            <stop offset="70%" stopColor="#0a0a0a" />  {/* blackish */}
            <stop offset="100%" stopColor="#111827" /> {/* near black */}
          </linearGradient>

          {/* Drop shadow filter */}
          <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="black" floodOpacity="0.6" />
          </filter>
        </defs>

        <g transform="translate(30,50)"> 
          <text x="0" y="80" className="brand-text">
            Raj Electricals
          </text>
          <text x="0" y="110" className="tagline ">
            Reliable • Electric • Affordable
          </text>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedLogo;

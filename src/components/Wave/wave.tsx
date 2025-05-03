import React from "react";

interface WaveProps {
  bgColor: string;
  waveRGB: string;
}

const Wave: React.FC<WaveProps> = ({ bgColor, waveRGB }) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "15vh", minHeight: "100px" }}>
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{ background: `rgb(${waveRGB})` }}
      >
        <div className={`${bgColor} w-full h-full`}>
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use xlinkHref="#gentle-wave" x="48" y="0" fill={`rgba(${waveRGB},0.5)`} />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill={`rgba(${waveRGB},0.3)`} />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill={`rgba(${waveRGB},0.15)`} />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill={`rgba(${waveRGB},1)`} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Wave;

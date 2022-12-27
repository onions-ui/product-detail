import React from "react";

export interface FreeShipIconProps {
  color?: Color | "currentColor";
  width?: number;
  height?: number;
}

export const FreeShipIcon: React.FC<FreeShipIconProps> = ({
  color = "currentColor",
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "24px"}
      height={height || "24px"}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      fill={color}
    >
      <g
        id="Icons-24/Icons/Free-Shipping/Freeshipping-(Color)"
        stroke="none"
        strokeWidth="1"
      >
        <g
          id="Group-24-Copy-6"
          transform="translate(1.000000, 6.000000)"
          fill="#61C94D"
        >
          <path
            d="M16.1391,9.3880459e-13 C16.6571,9.3880459e-13 17.1281,0.306 17.3401,0.779 L18.7391,3.903 L20.3971,4.582 C21.3271,4.962 21.9271,5.859 21.9271,6.866 L21.9271,9.612 C21.9271,9.966 21.6391,10.254 21.2851,10.254 L20.243,10.254 L20.2408356,10.3220585 C20.1647855,11.3528256 19.3044364,12.1674 18.2573,12.1674 C17.1883824,12.1674 16.3135075,11.3170359 16.2709236,10.2545559 L8.566,10.254 L8.56353559,10.3220585 C8.48748554,11.3528256 7.62713636,12.1674 6.58,12.1674 C5.51108237,12.1674 4.63620754,11.3170359 4.59362357,10.2545559 L3.7681,10.254 C3.4131,10.254 3.1261,9.966 3.1261,9.612 L3.126,8.284 L1.642,8.285 C1.287,8.285 1,7.998 1,7.643 C1,7.288 1.287,7 1.642,7 L3.126,6.999 L3.126,5.734 L1.013,5.734 C0.658,5.734 0.37,5.446 0.37,5.091 C0.37,4.737 0.658,4.449 1.013,4.449 L3.126,4.449 L3.126,3.284 L0.643,3.285 C0.288,3.285 -3.15303339e-13,2.997 -3.15303339e-13,2.642 C-3.15303339e-13,2.288 0.288,2 0.643,2 L3.126,1.999 L3.1261,0.643 C3.1261,0.288 3.4131,9.3880459e-13 3.7681,9.3880459e-13 L16.1391,9.3880459e-13 Z M7.27939805,10.2547087 L5.881,10.254 L5.88244213,10.2694874 C5.92916667,10.6151917 6.22433333,10.8824 6.58,10.8824 C6.94071875,10.8824 7.23920654,10.6075466 7.27939805,10.2547087 Z M18.9566981,10.2547087 L17.559,10.254 L17.5607225,10.2694874 C17.6073069,10.6151917 17.9016333,10.8824 18.2573,10.8824 C18.6180187,10.8824 18.9165065,10.6075466 18.9566981,10.2547087 Z M9.87096111,4 L8.95001667,4 C8.82046111,4 8.73612778,4.09777778 8.73612778,4.209 L8.73612778,4.209 L8.73612778,7.03905556 C8.73612778,7.18144444 8.90968333,7.25233333 9.08323889,7.25233333 C9.25679444,7.25233333 9.43035,7.18144444 9.43035,7.03905556 L9.43035,7.03905556 L9.43035,5.96655556 L9.72368333,5.96655556 L10.3335722,7.15027778 C10.3824611,7.24377778 10.4674056,7.27922222 10.5560167,7.27922222 C10.7607389,7.27922222 10.99235,7.09222222 10.99235,6.91866667 C10.99235,6.89666667 10.9874611,6.8655 10.9697389,6.83861111 L10.9697389,6.83861111 L10.4270722,5.85533333 C10.7387389,5.73555556 10.9654611,5.45077778 10.9654611,4.95211111 C10.9654611,4.22672222 10.4802389,4 9.87096111,4 L9.87096111,4 Z M7.84616667,4.00024444 L6.3025,4.00024444 C6.15155556,4.00024444 6,4.07113333 6,4.21352222 L6,4.21352222 L6,7.03868889 C6,7.18107778 6.17355556,7.25257778 6.34711111,7.25257778 C6.52066667,7.25257778 6.69422222,7.18107778 6.69422222,7.03868889 L6.69422222,7.03868889 L6.69422222,5.89102222 L7.36583333,5.89102222 C7.51311111,5.89102222 7.57483333,5.74863333 7.57483333,5.62824444 C7.57483333,5.48646667 7.49966667,5.35691111 7.36583333,5.35691111 L7.36583333,5.35691111 L6.69422222,5.35691111 L6.69422222,4.60524444 L7.84616667,4.60524444 C7.98,4.60524444 8.05577778,4.46285556 8.05577778,4.29846667 C8.05577778,4.15546667 7.99344444,4.00024444 7.84616667,4.00024444 L7.84616667,4.00024444 Z M13.6659611,4.00030556 L12.0819611,4.00030556 C11.9310167,4.00030556 11.7794611,4.07119444 11.7794611,4.21358333 L11.7794611,4.21358333 L11.7794611,7.03875 C11.7794611,7.18113889 11.9310167,7.25263889 12.0819611,7.25263889 L12.0819611,7.25263889 L13.6659611,7.25263889 C13.8126278,7.25263889 13.8749611,7.09680556 13.8749611,6.95441667 C13.8749611,6.78941667 13.7997944,6.64702778 13.6659611,6.64702778 L13.6659611,6.64702778 L12.4736833,6.64702778 L12.4736833,5.89108333 L13.1410167,5.89108333 C13.2882944,5.89108333 13.3506278,5.74869444 13.3506278,5.62830556 C13.3506278,5.48591667 13.27485,5.35697222 13.1410167,5.35697222 L13.1410167,5.35697222 L12.4736833,5.35697222 L12.4736833,4.60530556 L13.6659611,4.60530556 C13.7997944,4.60530556 13.8749611,4.46291667 13.8749611,4.29852778 C13.8749611,4.15552778 13.8126278,4.00030556 13.6659611,4.00030556 L13.6659611,4.00030556 Z M16.5090333,4.00030556 L14.9250333,4.00030556 C14.7740889,4.00030556 14.6225333,4.07119444 14.6225333,4.21358333 L14.6225333,4.21358333 L14.6225333,7.03875 C14.6225333,7.18113889 14.7740889,7.25263889 14.9250333,7.25263889 L14.9250333,7.25263889 L16.5090333,7.25263889 C16.6557,7.25263889 16.7180333,7.09680556 16.7180333,6.95441667 C16.7180333,6.78941667 16.6428667,6.64702778 16.5090333,6.64702778 L16.5090333,6.64702778 L15.3167556,6.64702778 L15.3167556,5.89108333 L15.9840889,5.89108333 C16.1313667,5.89108333 16.1930889,5.74869444 16.1930889,5.62830556 C16.1930889,5.48591667 16.1179222,5.35697222 15.9840889,5.35697222 L15.9840889,5.35697222 L15.3167556,5.35697222 L15.3167556,4.60530556 L16.5090333,4.60530556 C16.6428667,4.60530556 16.7180333,4.46291667 16.7180333,4.29852778 C16.7180333,4.15552778 16.6557,4.00030556 16.5090333,4.00030556 L16.5090333,4.00030556 Z M9.87096111,4.605 C10.1196833,4.605 10.2712389,4.70705556 10.2712389,5.01872222 C10.2712389,5.33038889 10.1196833,5.43244444 9.87096111,5.43244444 L9.87096111,5.43244444 L9.43035,5.43244444 L9.43035,4.605 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  );
};

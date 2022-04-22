import * as React from 'react';
import Svg, { G, Path, Defs, LinearGradient, Stop } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={62} height={61} fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        stroke="url(#b)"
        strokeWidth={4.173}
        d="M58.913 30c0 15.416-12.497 27.913-27.913 27.913S3.087 45.416 3.087 30 15.584 2.087 31 2.087 58.913 14.584 58.913 30Z"
        shapeRendering="crispEdges"
      />
    </G>
    <Path
      fill="#6C0263"
      d="M20.5 42.25a3.51 3.51 0 0 0 3.5 3.5h14a3.51 3.51 0 0 0 3.5-3.5v-21h-21v21Zm3.5-17.5h14v17.5H24v-17.5ZM37.125 16l-1.75-1.75h-8.75L24.875 16H18.75v3.5h24.5V16h-6.125Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={22.842}
        x2={22.842}
        y1={-7.468}
        y2={52.532}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6C0263" />
        <Stop offset={1} stopColor="#6C0263" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgComponent;

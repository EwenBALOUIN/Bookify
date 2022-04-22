import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <Svg
    width={62}
    height={61}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M58.913 30c0 15.416-12.497 27.913-27.913 27.913S3.087 45.416 3.087 30 15.584 2.087 31 2.087 58.913 14.584 58.913 30Z"
        stroke="url(#b)"
        strokeWidth={4.173}
        shapeRendering="crispEdges"
      />
    </G>
    <Path
      stroke="#6C0263"
      strokeWidth={4.637}
      strokeLinecap="round"
      d="M31.232 16.507v26.151M44.122 30.046H17.971"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={22.842}
        y1={-7.468}
        x2={22.842}
        y2={52.532}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#6C0263" />
        <Stop offset={1} stopColor="#6C0263" stopOpacity={0.5} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent

/////////////////////////////////////////////////////////////////////////////////
// Background_svg.js
// Contains a function that return SVG as JSX
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
// Imports
/////////////////////////////////////////////////////////////////////////////////

import React from "react";
import Svg, { Defs, Image, Path, Use } from "react-native-svg";
import Background from '../svg/Game_background';
import Home from '../svg/Home_background';
import Instruction from '../svg/Instruction_background';

/////////////////////////////////////////////////////////////////////////////////
// Functions
/////////////////////////////////////////////////////////////////////////////////

// Game Background SVG
const Game_background = (props) => {
  return (
    <Svg
      preserveAspectRatio="none"
      viewBox="0 0 810 1440"
      {...props}
    >
      <Defs>
        <Image
          id="prefix__a"
          width={2880}
          height={1800}
          xlinkHref={Background.game_background}
        />
      </Defs>
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Use xlinkHref="#prefix__a" transform="matrix(.8 0 0 .8 -747 0)" />
    </Svg>
  )
}

// Home Background SVG
const Home_background = (props) => {
  return (
    <Svg
      preserveAspectRatio="none"
      viewBox="0 0 810 1440"
      {...props}
    >
      <Defs>
        <Image
          id="prefix__a"
          width={2880}
          height={1800}
          xlinkHref={Home.home_background}
        />
      </Defs>
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Use xlinkHref="#prefix__a" transform="matrix(.8 0 0 .8 -747 0)" />
    </Svg>
  )
}

// Home Background SVG
const Instruction_background = (props) => {
  return (
    <Svg
      preserveAspectRatio="none"
      viewBox="0 0 810 1440"
      {...props}
    >
      <Defs>
        <Image
          id="prefix__a"
          width={2880}
          height={1800}
          xlinkHref={Instruction.instruction_background}
        />
      </Defs>
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Use xlinkHref="#prefix__a" transform="matrix(.8 0 0 .8 -747 0)" />
    </Svg>
  )
}

/////////////////////////////////////////////////////////////////////////////////
// Exports
/////////////////////////////////////////////////////////////////////////////////

export { Game_background, Home_background, Instruction_background };


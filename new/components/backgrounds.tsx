import Svg, { Defs, Image, Path, Use, SvgProps } from 'react-native-svg';
import GameData from './svg/game-background-data';
import HomeData from './svg/home-background-data';
import InstructionData from './svg/instruction-background-data';

function Background({ href, ...props }: SvgProps & { href: string }) {
  return (
    <Svg preserveAspectRatio="none" viewBox="0 0 810 1440" {...props}>
      <Defs>
        <Image id="prefix__a" width={2880} height={1800} href={href} />
      </Defs>
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Path fill="#fff" d="M0 0h810v1440H0z" />
      <Use href="#prefix__a" transform="matrix(.8 0 0 .8 -747 0)" />
    </Svg>
  );
}

export const GameBackground = (props: SvgProps) => (
  <Background href={GameData.game_background} {...props} />
);

export const HomeBackground = (props: SvgProps) => (
  <Background href={HomeData.home_background} {...props} />
);

export const InstructionBackground = (props: SvgProps) => (
  <Background href={InstructionData.instruction_background} {...props} />
);

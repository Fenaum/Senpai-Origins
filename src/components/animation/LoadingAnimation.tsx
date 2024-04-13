import effects from "../../../constants/effect";
import Image from "next/image";
import "./loadingAnimation.css"

type LoadingAnimationProps = {
 transitionClassName: string;
};

export default function LoadingAnimation({ transitionClassName }: LoadingAnimationProps) {
 return (
    <div className={transitionClassName} style={{ position: "relative" }}>
      <Image src={effects.speed1} alt="Loading..." className="e1"></Image>
      <Image src={effects.speed2} alt="Loading..." className="e2"></Image>
    </div>
 );
}
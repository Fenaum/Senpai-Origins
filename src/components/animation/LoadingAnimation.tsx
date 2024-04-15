import effects from "../../../constants/effect";
import Image from "next/image";
import "./loadingAnimation.css";

type LoadingAnimationProps = {
  isLoading?: boolean;
};

export default function LoadingAnimation({
  isLoading,
}: LoadingAnimationProps) {
  const transitionClassName = isLoading ? "transition-effect" : "";


  return (
    <>
      {isLoading && (
        <div className={transitionClassName} style={{ position: "relative" }}>
          <Image src={effects.speed1} alt="Loading..." className="e1"></Image>
          <Image src={effects.speed2} alt="Loading..." className="e2"></Image>
        </div>
      )}
    </>
  );
}

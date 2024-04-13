"use client";
import { useRouter } from "next/navigation";
import { useLoadingStore } from "../../utils/zustand";
import Image from "next/image";
import effects from "../../../constants/effect";

const LoadingAnimation = () => {
  const router = useRouter();
  const { isLoading, startLoading, stopLoading } = useLoadingStore();

  const transitionAnimation = (href: string) => {
    startLoading();
    setTimeout(() => {
      stopLoading();
      router.push(href); // Navigate to the desired path after loading is complete
    }, 500);
  };

  const transitionClassName = isLoading ? "transition-effect" : "";
  return (
    <div className={transitionClassName} style={{ position: "relative" }}>
      <Image src={effects.speed1} alt="Loading..." className="e1"></Image>
      <Image src={effects.speed2} alt="Loading..." className="e2"></Image>
    </div>
  );
};

export default LoadingAnimation;

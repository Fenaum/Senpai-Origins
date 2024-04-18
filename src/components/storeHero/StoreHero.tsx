import Image from "next/image";
import "./storeHero.css";
import testImages from "../../../constants/test";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="StoreHero-grid">
      <div className="StoreHero-panel">
        <Image
          alt="panel 2"
          src={testImages.testimage2}
          className="StoreHero-image"
        ></Image>
      </div>
      <div className="StoreHero-panel">
        <Image
          alt="panel 2"
          src={testImages.testimage5}
          className="StoreHero-image"
        ></Image>
      </div>
      <div className="StoreHero-panel">
        <Image
          alt="panel 2"
          src={testImages.testimage4}
          className="StoreHero-image"
        ></Image>
      </div>
    </div>
  );
}

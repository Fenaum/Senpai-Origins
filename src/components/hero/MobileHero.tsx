import Image from "next/image";
import "./mobileHero.css";
import testImages from "../../../constants/test";
import Link from "next/link";

export default function mobileHero() {
  return (
    <div className="mobileHero-grid">
      <div className="mobileHero-panel">
        <Image
          alt="panel 1"
          src={testImages.testimage2}
          className="mobileHero-image"
        ></Image>
      </div>
      <div className="mobileHero-panel">
        <Image
          alt="panel 2"
          src={testImages.testimage5}
          className="mobileHero-image"
        ></Image>
      </div>
        <div className="mobileHero-panel">
          <Image
            alt="panel 3"
            src={testImages.testimage4}
            className="mobileHero-image"
          ></Image>
        </div>
    </div>
  );
}

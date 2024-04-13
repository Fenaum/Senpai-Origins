import Image from "next/image";
import "./hero.css";
import testImages from "../../../constants/test"
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero-grid">
      <div className="hero-panel-1">
        <div className="sub-panel-1">
          <Image alt="panel 2" src={testImages.testimage2} className="hero-image"></Image>
        </div>
        <div className="sub-panel-2">
          <Image alt="panel 2" src={testImages.testimage6} className="hero-image"></Image>
        </div>
      </div>
      <div className="hero-panel-2">
        <div className="sub-panel-1">
          <Image alt="panel 2" src={testImages.testimage5} className="hero-image"></Image>
        </div>
        <div className="sub-panel-2">
          <Image alt="panel 2" src={testImages.testimage3} className="hero-image"></Image>
          <button className="call-to-action">
            <Link href="/store">SHOP HERE!!!!</Link>
          </button>
        </div>
      </div>
      <div className="hero-panel-3">
        <div className="sub-panel-1">
          <Image alt="panel 2" src={testImages.testimage4} className="hero-image"></Image>
        </div>
        <div className="sub-panel-2">
          <Image alt="panel 2" src={testImages.testimage1} className="hero-image"></Image>
        </div>
      </div>
    </div>
  );
}

import "./BannerComponent.css"
import image from "../images/BannerImage.png"

export const BannerComponent = () => {
  return (
    <div className="container banner-wrapper border-bottom border-top">
      <div className="banner-text">
        <div className="text">
          <h2 className="title">Fashion Sale</h2>
          <h1>Minimal Menz Style</h1>
        </div>
      </div>
      <div className="banner-image">
        <img src={image } style={{ height: "100%", width: "auto", objectFit: "cover"}} alt=""/>
      </div>
    </div>
  );
}

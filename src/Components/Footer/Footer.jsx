import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <div className="bg-black d-flex align-items-center justify-content-center" style={{ height: "100px", width: "100%" }}>
      <h5 style={{color: "white", textAlign: "center"}}>Copyright <FontAwesomeIcon icon={faCopyright} /> Your WebSite 2024</h5>
    </div>
  );
};

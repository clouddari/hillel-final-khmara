import rozetkaLogo from "../../assets/rozetka-logo-white.svg";
import "./logoHeader.css";

function LogoHeader() {
  return (
    <div className="logo-rozetka-white">
      <img src={rozetkaLogo} alt="Rozetka Logo" />
    </div>
  );
}
export default LogoHeader;

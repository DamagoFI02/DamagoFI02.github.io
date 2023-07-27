import header from "../../images/header.png";
import BtnLink from "../Buttons/BtnLink";

function Header() {
    return (
      <header>
            <div>
            <img
					src={header}
					alt="Moontruck"
					className="w-full "
				/>
                    <BtnLink to="/mail" >Mail</BtnLink>
            </div>

      </header>
    );
  }

  export default Header;

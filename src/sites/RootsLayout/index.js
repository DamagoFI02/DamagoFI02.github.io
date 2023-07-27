import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

function RootsLayout() {
    return (
      <>
      <Navigation/>
      <Outlet/>
      </>
    );
  }
  
  export default RootsLayout;
  
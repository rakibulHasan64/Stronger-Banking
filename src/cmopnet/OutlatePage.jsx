import { Outlet } from "react-router-dom";
import Naver from "./Naver";
import Footer from "./Footer";
import Questions from "./home/Questions";

function OutlatePage() {
   return (
      <>
         <Naver />
         <Outlet />
         <Questions />
         <Footer />
   
         
      </>
   );
}

export default OutlatePage;
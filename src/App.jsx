import { Routes, Route } from "react-router-dom";
import OutlatePage from "./cmopnet/OutlatePage";
import AllLayout from "./cmopnet/home/AllLayout";
import AboutAllLayout from "./cmopnet/about/AboutAllLayout";
import AllPricinge from "./cmopnet/Pricing/AllPricinge";
import Allcontact from "./cmopnet/contact/Allcontact";
import AllQutions from "./cmopnet/qution/AllQutions";
import AllCarensey from "./cmopnet/CarenseAcount/AllCarensey";
import AllDetalls from "./cmopnet/planedetals.jsx/AllDetalls";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<OutlatePage />} >
          <Route path="/Features" element={<AllLayout />} />
          <Route path="about" element={<AboutAllLayout />} />
          <Route path="Pricing" element={<AllPricinge />} />
          <Route path="contact" element={<Allcontact />} />
          <Route path="contactme" element={<AllQutions />} />
          <Route path="Tooto" element={<AllCarensey />} />
          <Route path="Lastest" element={<AllDetalls />} />
        </Route>
      
    
  
      </Routes>
    </>
  );
}

export default App;

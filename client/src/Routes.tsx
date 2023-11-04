import {Route, Routes} from "react-router-dom";
import EP50x from "./Pages/error/EP50x";
import './reset.css';
import EP404 from "./Pages/error/EP404";

const Index = () => {
  return (
    <div className="App">
      <Routes>
        {/*<Route path="/maintenance" element={<EP50x/>}/>*/}
        <Route path="/404" element={<EP404/>}/>
        <Route path="*" element={<EP50x/>}/>
      </Routes>
    </div>
  );
}

export default Index;
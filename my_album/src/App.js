import { Route, Routes } from "react-router-dom";
import Gallery from "./containers/Gallery";
import GalleryDetails from "./containers/GalleryDetails";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/details" element={<GalleryDetails />} />
      </Routes>
    </>
  );
}

export default App;

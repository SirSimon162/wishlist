import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WishList from "./components/WishList";
import WishData from "./data/WishData";
import InputForm from "./components/InputForm";
import AboutPage from "./pages/About";
import AboutLink from "./components/AboutLink";
import Instructions from "./components/Instructions";

function App() {
  const [wish, setWish] = useState(WishData);
  const deleteWish = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setWish(wish.filter((item) => item.id !== id));
    }
  };

  const addWish = (newWish) => {
    newWish.id = uuidv4();
    setWish([newWish, ...wish]);
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <InputForm handleAdd={addWish} />
                <Instructions/>
                <WishList wish={wish} handleDelete={deleteWish} />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutLink />
      </div>
    </Router>
  );
}

export default App;

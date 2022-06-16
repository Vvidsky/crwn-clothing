import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component"
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component"

import './app.scss'

function Shop() {
  return (
    <div>Shop</div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;

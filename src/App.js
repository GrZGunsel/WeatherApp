import { useEffect, useState } from "react";
import "./App.css";
import Home from "./component/homepage/Home";
import Loader from "./component/Loader/Loader";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  });
  return <>{loading ? <Loader /> : <Home />}</>;
}

export default App;

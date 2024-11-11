import { Route, Routes } from "react-router-dom";
import { rouTes } from "./Utils";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {rouTes.map((route, key) => {
          return <Route key={key} path={route.path} element={route.element} />;
        })}
      </Routes>
    </div>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CakeProvider } from "./provider/CakeProvider";
import { routes } from "./routes/routes";
function App() {
  return (
    <CakeProvider>
      <Router>
        <div className="App">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </div>
      </Router>
    </CakeProvider>
  );
}

export default App;

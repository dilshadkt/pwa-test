import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PWAInstallPrompt from "./PWAInstallPrompt";
import { RestoreLastPage } from "./LastVisit";

function App() {
  return (
    <>
      <BrowserRouter>
        <RestoreLastPage />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>This is Helo World updated</h1>
                <PWAInstallPrompt />
              </>
            }
          />
          <Route
            path="/list"
            element={
              <>
                <h1>gasdgd</h1>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

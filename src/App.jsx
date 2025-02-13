import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PWAInstallPrompt from "./PWAInstallPrompt";

function App() {
  // const [deferredPrompt, setDeferredPrompt] = useState(null);
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const handler = (event) => {
  //     event.preventDefault(); // Prevent automatic prompt
  //     setDeferredPrompt(event);
  //     setShowPopup(true); // Show our custom popup
  //   };

  //   window.addEventListener("beforeinstallprompt", handler);

  //   return () => {
  //     window.removeEventListener("beforeinstallprompt", handler);
  //   };
  // }, []);

  // const handleInstallClick = () => {
  //   if (deferredPrompt) {
  //     deferredPrompt.prompt(); // Show the real install prompt
  //     deferredPrompt.userChoice.then((choiceResult) => {
  //       if (choiceResult.outcome === "accepted") {
  //         console.log("User accepted the PWA installation");
  //       } else {
  //         console.log("User dismissed the PWA installation");
  //       }
  //       setDeferredPrompt(null);
  //       setShowPopup(false); // Hide popup after interaction
  //     });
  //   }
  // };

  return (
    <>
      <h1>Heoo worlgasd</h1>
      {/* {showPopup && (
        <div className="fixed bottom-5 right-5 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <p>Install this app for a better experience!</p>
          <button
            onClick={handleInstallClick}
            className="bg-blue-500 px-3 py-2 rounded mt-2"
          >
            Install
          </button>
        </div>
      )} */}
      <PWAInstallPrompt />
    </>
  );
}

export default App;

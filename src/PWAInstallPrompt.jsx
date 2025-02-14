import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    // Detect if PWA is already installed (for iOS & Android)
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone
    ) {
      setShowInstallButton(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const isIOS = () => {
    return /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
  };

  useEffect(() => {
    if (isIOS() && !window.navigator.standalone) {
      setShowInstallButton(true); // Show install message for iOS users
    }
  }, []);
  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the PWA installation");
        } else {
          console.log("User dismissed the PWA installation");
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  return (
    <AnimatePresence>
      {showInstallButton && (
        <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-5 left-1/2 transform -translate-x-1/2
           bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          <button onClick={handleInstallClick}>Install App</button>
          {isIOS() && showInstallButton && (
            <div className="ios-install-message">
              Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>{" "}
              to install the app.
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;

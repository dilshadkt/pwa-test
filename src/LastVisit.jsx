import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RestoreLastPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const lastVisitedPage = localStorage.getItem("lastVisitedPage");
    if (lastVisitedPage && lastVisitedPage !== "/") {
      navigate(lastVisitedPage);
    }
  }, [navigate]);

  return null;
};

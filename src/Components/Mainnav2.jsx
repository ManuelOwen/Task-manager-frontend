import { useContext } from "react";
import { Context2 } from "../Context2/Context2";
import "../Pages/Notification.css";

//side nav
export default function Sidenav2() {
  const { dispatch } = useContext(Context2);

  const handleComments = () => {
    dispatch({ type: "Comments", payload: "Comments" });
  };

  const handleYourtasks = () => {
    dispatch({ type: "Yourtasks", payload: "Yourtasks" });
  };

  const handleCalendar = () => {
    dispatch({ type: "Calendar", payload: "Calendar" });
  };

  ////side nav
  return (
    <div className="sidenave">
      <h1>Dashboard</h1>
      <div className="nave" onClick={handleComments}>
        Comments
      </div>
      <div className="nave" onClick={handleYourtasks}>
        Your task
      </div>
      <div className="nave" onClick={handleCalendar}>
        Calendar
      </div>
    </div>
  );
}

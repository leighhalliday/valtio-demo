import { state } from "../state";
import { useEffect } from "react";
import { useSnapshot } from "valtio";

function Times() {
  const snap = useSnapshot(state);

  useEffect(() => {
    const interval = setInterval(() => {
      state.times += 1;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div className="Times">{snap.times}s</div>;
}

export default Times;

import { state } from "../state";
import { useSnapshot } from "valtio";

function Count() {
  const snap = useSnapshot(state);

  return (
    <button
      className="Count"
      onClick={() => {
        state.count += 1;
      }}
    >
      {snap.count}
    </button>
  );
}

export default Count;

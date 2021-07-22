import { useEffect } from "react";
import { proxy, useSnapshot } from "valtio";

export default function Home() {
  return (
    <div>
      <Times />
      <Count />
    </div>
  );
}

function Times() {
  return <div className="Times">TIMES</div>;
}

function Count() {
  return <button className="Count">CLICK</button>;
}

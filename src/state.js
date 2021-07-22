import { proxy } from "valtio";

const state = proxy({
  times: 0,
  count: 0,
});

export { state };

import { GNB } from "../main.js";
import { Select } from "./Select.js";

GNB({
  parent: ".gnb ul",
  depthClassName: "depth2",
});
Select((value) => {
  console.log(value);
});

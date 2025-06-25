import { GNB } from "../main.js";
import { Select } from "./Select.js";
import { Alarm } from "./Alarm.js";
GNB({
  parent: ".gnb ul",
  depthClassName: "depth2",
});
Select((value) => {
  console.log(value);
});
Alarm();

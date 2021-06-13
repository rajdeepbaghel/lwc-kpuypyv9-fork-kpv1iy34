import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "RAJDEEP'S COMPONENT!";

  showFeatures = true;

  /**
   * Getter for the features property
   */
  get features() {
    return [
      {
        label: "APEX.",
        icon: "utility:edit",
      },
      {
        label: "Apex specialist and Process Specialist.",
        icon: "utility:refresh",
      },
      {
        label: "Lightning Web Components.",
        icon: "utility:brush",
      },
    ];
  }
}

import App from "./demo.svelte";

export const mount = () => {
  class RabbyKit extends HTMLElement {
    constructor() {
      super();
    }
  }
  if (!customElements.get("rabby-kit")) {
    customElements.define("rabby-kit", RabbyKit);
  }

  let mountNode = document.querySelector("[data-rk-mounted]");
  if (!mountNode) {
    // mountNode = document.createElement("div");
    mountNode = document.createElement("rabby-kit");
    mountNode.setAttribute("data-rk-mounted", "");
    // const target =
    mountNode.attachShadow({ mode: "open" });
    document.body.insertAdjacentElement("afterend", mountNode!);
  }
  // handle refresh
  const child = mountNode?.shadowRoot?.querySelector("[data-rabbykit]");
  if (child) {
    window.location.reload();
  }

  if (!child) {
    // mountNode.removeChild(child);
    new App({ target: mountNode!.shadowRoot! });
  }
};

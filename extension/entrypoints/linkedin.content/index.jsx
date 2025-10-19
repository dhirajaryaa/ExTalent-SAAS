import "../../assets/index.css";
import React from "react";
import ReactDOM from "react-dom/client";

export default defineContentScript({
  matches: ["*://*/*"],
  async main(ctx) {
    const ui = await createUI(ctx);

    ui.mount();
  },
});

const createUI = async (ctx) => {
  return await createShadowRootUi(ctx, {
    name: "extalent-linkedin-ui",
    position: "inline",
    anchor: document.querySelector("#home"),
    onMount: (container) => {
      const app = document.createElement("div");
      app.id = 'extalent_ui';
      container.append(app);
      const root = ReactDOM.createRoot(app);
      root.render(
        <h1 className="text-8xl dark:text-white bg-red-600">hello</h1>
      );
      return root;
    },
    onRemove: (root) => {
      // Unmount the root when the UI is removed
      root?.unmount();
    },
  });
};

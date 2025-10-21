import { browser } from "#imports";
//   create context menu new options on right click
export const createContextMenu = browser.contextMenus.create({
  id: "extalent",
  title: "Scan Job with Extalent",
  contexts: ["all"],
  documentUrlPatterns: [
    "https://www.linkedin.com/jobs/collections/recommended/*",
  ],
});

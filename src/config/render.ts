export const SANITIZE_OPTIONS = {
  allowedTags: ["b", "i", "em", "strong", "a", "div", "p", "h2"],
  allowedAttributes: {
    a: ["href"],
    div: ["style", "class"],
  },
  allowedIframeHostnames: ["www.youtube.com"],
};

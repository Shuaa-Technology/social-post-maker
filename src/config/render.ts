export const SANITIZE_OPTIONS = {
  allowedTags: ["b", "i", "em", "strong", "a", "div", "p","h1", "h2","h3","h4","h5","h6","img","section"],
  allowedAttributes: {
    a: ["href"],
    div: ["id","style", "class"],
    p: ["id","style", "class"],
    h1: ["id","style", "class"],
    h2: ["id","style", "class"],
    h3: ["id","style", "class"],
    h4: ["id","style", "class"],
    h5: ["id","style", "class"],
    h6: ["id","style", "class"],
    img: ["id","style", "class", "src"],
    section: ["id","style", "class"],
  },
  allowedIframeHostnames: [],
};

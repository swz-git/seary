import App from "./App.svelte";

window.env = {};
window.env.APPNAME = "%APPNAME%";
window.env.SEARXDOMAIN = "%SEARXDOMAIN%";

document.setFavicon = (url) => {
  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = url;
};

const app = new App({
  target: document.body,
});

export default app;

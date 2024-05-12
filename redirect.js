function redirectToCompose() {
    if (window.location.hostname === "twitter.com" && !window.location.pathname.startsWith("/compose/post")) {
      window.location.pathname = "/compose/post";
    }
  }
  
redirectToCompose();
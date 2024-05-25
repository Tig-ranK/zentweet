function redirectToCompose() {
    if (window.location.hostname === "x.com" && !window.location.pathname.startsWith("/compose/post")) {
      window.location.pathname = "/compose/post";
    }
  }
  
redirectToCompose();
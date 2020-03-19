export default function({ app, store, req }) {
  console.log("middle worked!");

  if (req && req.headers) {
    const jwt = app.context.req.headers["kpc_jwt"];
    if (jwt !== "undefined") {
      app.$cookies.set("kpc_jwt", jwt);
      console.log("kpc_jwt in header is " + jwt);
    }
  }
}

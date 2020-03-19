// export default function({ context, app }) {
//   //   context.userAgent = process.server
//   //     ? context.req.headers["user-agent"]
//   //     : navigator.userAgent;

//   console.log("middle worked!");
//   console.log(context.req.headers["test_header"]);
// }

export default function({ app, context }) {
  console.log("middle worked!");

  const jwt = app.context.req.headers["kpc_jwt"];
  if (jwt !== "undefined") {
    app.$cookies.set("kpc_jwt", jwt);
    console.log("kpc_jwt in header is " + jwt);
  }
}

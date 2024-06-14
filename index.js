const jsonServer = require("json-server");
const RServer = jsonServer.create();

const middleware = jsonServer.defaults();
const route = jsonServer.router("db.json");

const PORT = 3000 || process.env.PORT;

RServer.use(middleware);
RServer.use(route);
RServer.listen(PORT, () => {
  console.log(
    `Media Player Server Started at por ${PORT} and waiting for client request `
  );
});

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/back", {
      target: "http://3.36.53.222:5000",
      pathRewrite: {
        "^/back": "",
      },
      changeOrigin: true,
    })
  );
};

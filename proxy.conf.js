const PROXY_CONFIG = [{
    context: [
        "/user",
        "/product"
    ],
    target: "http://localhost:8080",
    secure: false,
    changeOrigin: true
}]

module.exports = PROXY_CONFIG;
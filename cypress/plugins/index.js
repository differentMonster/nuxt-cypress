const {
    startDevServer
} = require("@cypress/webpack-dev-server");
const custom = require("@vue/cli-service/webpack.config");
module.exports = (on, config) => {
    //require("@cypress/code-coverage/task")(on, config);
    on("dev-server:start", (options) => {
        return startDevServer({
            options,
            custom
        });
    });
    return config;
};
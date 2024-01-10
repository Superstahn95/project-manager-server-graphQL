const projectResolvers = require("./projects");
const clientResolvers = require("./client");

const resolvers = {
  Query: {
    ...projectResolvers.Query,
    ...clientResolvers.Query,
  },
};

module.exports = resolvers;

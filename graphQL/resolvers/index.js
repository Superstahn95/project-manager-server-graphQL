const projectResolvers = require("./projects");
const clientResolvers = require("./client");

const resolvers = {
  Query: {
    ...projectResolvers.Query,
    ...clientResolvers.Query,
  },
  Mutation: {
    ...projectResolvers.Mutation,
    ...clientResolvers.Mutation,
  },
};

module.exports = resolvers;

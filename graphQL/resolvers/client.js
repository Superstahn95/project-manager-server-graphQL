const Client = require("../../models/clientModel");

const resolvers = {
  Query: {
    async getClients() {
      try {
        const clients = await Client.find();
        return clients;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;

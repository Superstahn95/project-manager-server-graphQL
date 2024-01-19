const Client = require("../../models/clientModel");
const Project = require("../../models/projectModel");

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
    async getClient(_, args) {
      const { clientId } = args;
      try {
        const client = await Client.findById(clientId);
        if (client) {
          return client;
        } else {
          throw new Error("Client not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Mutation: {
    async createClient(_, args, context, info) {
      const {
        clientInput: { name, email, phone },
      } = args;
      const client = new Client({
        name,
        email,
        phone,
        createdAt: new Date().toISOString(),
      });
      const savedClient = await client.save();
      return savedClient;
    },
    async deleteClient(_, { clientId }) {
      const client = await Client.findByIdAndDelete(clientId);
      if (client) {
        //get projects belonging to that client and delete
        const projects = await Project.find({ clientId });
        for (const project of projects) {
          await Project.findByIdAndDelete(project._id);
        }
        return "Client and projects belonging to this client has been deleted";
      } else {
        throw new Error("Client not found");
      }
    },
  },
};

module.exports = resolvers;

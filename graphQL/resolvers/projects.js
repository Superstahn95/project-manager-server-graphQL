const Project = require("../../models/projectModel");
const resolvers = {
  Query: {
    async getProjects() {
      try {
        const projects = await Project.find();
        return projects;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;

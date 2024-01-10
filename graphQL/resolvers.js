const Projects = require("../models/projectModel");

const resolvers = {
  Query: {
    async getProjects() {
      try {
        const projects = await Projects.find();
        return projects;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;

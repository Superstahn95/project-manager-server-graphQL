const Project = require("../../models/projectModel");
const Timer = require("../../models/timerModel");
const resolvers = {
  Query: {
    async getProjects() {
      try {
        const projects = await Project.find().populate("clientId");
        return projects;
      } catch (error) {
        throw new Error(error);
      }
    },
    async getProject(_, args) {
      const { projectId } = args;
      try {
        const project = await Project.findById(projectId).populate("clientId");
        if (project) {
          return project;
        } else {
          throw new Error("Project not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
  Mutation: {
    async createProject(_, args, context, info) {
      //destructure params from our args
      const {
        projectInput: { name, description, clientId, countDownHours },
      } = args;
      //validate data
      //convert hours to  milliseconds => might make some changes here while figuring my UI out
      const countDownEndTime = new Date(Date.now() + countDownHours * 3600000);
      try {
        const newProject = new Project({
          name,
          description,
          clientId,
          countDownEndTime,
          createdAt: new Date().toISOString(),
        });
        const project = await newProject.save();
        //timer model has a project id and an end time
        const timer = new Timer({
          project: project._id,
          endTime: countDownEndTime,
        });
        await timer.save();
        return project;
      } catch (error) {
        throw new Error(error);
      }
    },
    async deleteProject(_, args) {
      const { projectId } = args;
      try {
        const project = await Project.findByIdAndDelete(projectId);
        if (project) {
          return "Project deleted successfully";
        } else {
          throw new Error("Project not found");
        }
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = resolvers;

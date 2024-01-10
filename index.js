const { ApolloServer } = require("@apollo/server");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./graphQL/typeDefs");
const resolvers = require("./graphQL/resolvers");

dotenv.config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to database"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(() => console.log(`🚀  Server running`));

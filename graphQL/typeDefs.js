const typeDefs = `#graphql
type Client{
    id: ID!,
    name: String!,
    email: String!,
    phone: String!,
    createdAt: String!
}
type Project{
    id: ID!,
    name: String!,
    description: String!,
    status: Boolean!,
    clientId: Client!,
    countDownEndTime: String!,
    createdAt: String!
}

input ProjectInput{
    name: String!,
    description: String!,
    clientId: ID!,
    countDownHours: Int!,
}
input ClientInput{
   name: String!,
   email: String!,
   phone: String!,
}

type Query{
    getProjects: [Project],
    getClients: [Client],
    getProject(projectId: ID!) : Project!
    getClient(clientId: ID!): Client!
}
type Mutation{
    createProject(projectInput: ProjectInput) : Project!,
    createClient(clientInput: ClientInput) : Client!,
    deleteClient(clientId: ID!) : String,
    deleteProject(projectId: ID!) : String!
}
`;

module.exports = typeDefs;

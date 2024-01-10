const typeDefs = `#graphql
type Project{
    id: ID!,
    name: String!,
    description: String!,
    status: String!,
    clientId: String!,
    countDownEndTime: String!,
    createdAt: String!
}
type Client{
    id: ID!,
    name: String!,
    email: String!,
    phone: String!,
    createdAt: String!
}

type Query{
    getProjects : [Project],
    getClients : [Client]
}
`;

module.exports = typeDefs;

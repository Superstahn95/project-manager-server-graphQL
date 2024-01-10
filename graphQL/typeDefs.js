const typeDefs = `#graphql
type Project{
    id: ID!,
    name: String!,
    description: String!,
    status: String!,
    clientId: String!,
    countDownEndTime: String!
}

type Query{
    getProjects : [Project]
}
`;

module.exports = typeDefs;

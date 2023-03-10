import { gql } from "graphql-tag";

// Lines ending with `!` mean "require/not null"
// `_id` is MongoDB id
const typeDefs = gql`
  type Query {
    "Get all the classes. If there are no classes, return an empty array."
    indexClasses: [Class]!
  }
  "A class in our school."
  type Class {
    "The unique identifier for the class. This is a MongoDB ID."
    id: ID!
    "Name of the class."
    name: String!
    "In what classroom and building is the class."
    building: String!
    "Number of credit hours the class is worth."
    creditHours: Int!
  }
`;

export default typeDefs;

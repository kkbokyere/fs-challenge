const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`    
  enum DeviceTypeEnum {
      SENSOR
      TAP
  }
  type Plant {
      name: String,
      id: ID!
  }
  type User {
    username: String,
    password: String
  }

  type Device {
    id: ID!, 
    type: DeviceTypeEnum,
    label: String,
    plant: Plant
    plantId: ID!
  }
  type Query {
    plants: [Plant],
    devices: [Device]
    users: [User]
    getUserByUsername(username: String!): User
  }
  
  type Mutation {
    addDevice(type: DeviceTypeEnum!, plantId: ID!, label: String!): Device
  }
  
`;

module.exports = typeDefs;

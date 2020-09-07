const { buildSchema } = require('graphql');

const schema = buildSchema(`
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
    type: String,
    label: String,
    plantId: ID!
  }

  type Query {
    plants: [Plant],
    devices: [Device]
    users: [User]
  }
  
  type Mutation {
    addDevice(type: String!, plantId: ID!, label: String!): Device
  }
  
`);

module.exports = schema;

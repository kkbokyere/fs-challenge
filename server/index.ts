const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const cors = require('cors');

const { plants, devices, users } = require('./data');

const createdNewId = (array) => {
  const highest = array.sort((itemA, itemB) => itemA.id - itemB.id);
  return highest.id + 1;
}

const schema = buildSchema(`
  type Plant {
    name: String,
    id: Int
  }

  type Device {
    id: Int, 
    type: String,
    label: String,
    plantId: Int
  }

  input DeviceInput {
    name: String,
    type: String,
    plantId: Int
  }

  type Query {
    plants: [Plant],
    devices: [Device]
  }
  
  type Mutation {
    addDevice(device: DeviceInput): [Device]
  }
  
`);

const root = {
  plants: () => plants,
  devices: () => devices,
  users: () => users,
  addDevice: ({ device }) => {
    devices.push({ id: createdNewId(devices), type: device.type, label: device.label});
    return plants;
  }
};

const server = express();
server.use(cors());
server.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
server.listen(4000);
console.log('Listening on localhost:4000/graphql');

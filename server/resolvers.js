const { v4: uuidv4 } = require('uuid');
const { plants, devices, users } = require('./data');

const resolvers = {
    DeviceTypeEnum: {
      SENSOR: 'sensor',
        TAP: 'tap'
    },
    Query: {
        plants: () => plants,
        devices: () => devices,
        users: () => users,
        getUserByUsername: (parent, { username }) => {
            return users.find(user => user.username === username)
        },
    },
    Device: {
        plant: parent => {
            return plants.find(plant => plant.id === parent.plantId)
        }
    },
    Mutation: {
        addDevice: (parent, { label, type, plantId }) => {
            const newDevice = {id: uuidv4(), type, label, plantId};
            devices.push(newDevice);
            return newDevice;
        }
    }
};

module.exports = resolvers;

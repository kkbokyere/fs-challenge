const { v4: uuidv4 } = require('uuid');
const { plants, devices, users } = require('./data');

const resolvers = {
    plants: () => plants,
    devices: () => devices,
    users: () => users,
    addDevice: ({ label, type, plantId }) => {
        const newDevice = { id: uuidv4(), type, label, plantId};
        devices.push(newDevice);
        return newDevice;
    }
};

module.exports = resolvers;

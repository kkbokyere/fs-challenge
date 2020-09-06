const { plants, devices, users } = require('./data');

const createdNewId = (array) => {
    const highest = array.sort((itemA, itemB) => itemA.id - itemB.id);
    return highest.id + 1;
};

const resolvers = {
    plants: () => plants,
    devices: () => devices,
    users: () => users,
    addDevice: ({ device }) => {
        devices.push({ id: createdNewId(devices), type: device.type, label: device.label});
        return plants;
    }
};

module.exports = resolvers;

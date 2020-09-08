export const DeviceTypeEnum = {
    SENSOR: 'SENSOR',
    TAP: 'TAP'
};

export type Device = {
    id: any,
    plantId: any,
    label: string,
    type: string,
    plant: object,
}

export type Plant = {
    name?: string
    id?: string
}

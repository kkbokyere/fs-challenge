import React from 'react';
type Props = {
    id: any,
    plantId: any,
    label: string,
    type: string,
    plant: object
}

const DeviceListItem = ({ id, label, plant }: Props) => {
    console.log(plant)
    return <li>{label}</li>
};

export default DeviceListItem;

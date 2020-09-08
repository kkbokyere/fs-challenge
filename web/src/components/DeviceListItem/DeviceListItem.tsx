import React from 'react';
import {Plant} from "../../types";

type Props = {
    id: any,
    plantId: any,
    label: string,
    type: string,
    plant: Plant
}

const DeviceListItem = ({ id, label, plant }: Props) => {
    return (
        <li>{label}</li>)
};

export default DeviceListItem;

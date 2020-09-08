import React from 'react';
import DeviceListItem from "../DeviceListItem";
import {Device} from "../../types";

type Props = {
    devices: Device[],
    filterType: String,
    heading?: String
}

const List = ({ devices, filterType, heading} : Props) => {
    return (
        <div>
            <h3>{heading}</h3>

            <ul>
            {devices
                .filter((device) => device.type === filterType)
                .map((device) => {
                    return <DeviceListItem key={device.id} {...device}/>
                })}
        </ul>
        </div>
    )
};

export default List;

import React from 'react';
import { useQuery } from "@apollo/client";
import styles from './DevicesList.module.scss'
import {GET_DEVICES} from "../../queries/devices";

type Device = {
    id: any,
    plantId: any,
    label: string,
    type: string,
}

interface DevicesData {
    devices: Device[],
    loading: boolean
}

const DevicesList = () => {
    const { data, loading } = useQuery<DevicesData>(GET_DEVICES);

    if (loading) {
        return null;
    }

    if (!data) return <div>No data!</div>;

    return (
        <div className={styles.devicesList}>
            <h2>Devices List</h2>

            <h3>Sensor Devices</h3>
            {data.devices
                .filter(({ type }) => type ==='sensor')
                .map(({id, label}) => {
                return <li key={id}>{label}</li>
            })}

            <h3>Tap Devices</h3>

            {data.devices
                .filter(({ type }) => type === 'tap')
                .map(({id, label, type}) => {
                return <li key={id}>{label}</li>
            })}
        </div>
    );
};

export default DevicesList;

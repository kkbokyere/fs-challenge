import React from 'react';
import { useQuery } from "@apollo/client";
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './DevicesList.module.scss'
import {GET_DEVICES} from "../../queries/devices";
import {Device, DeviceTypeEnum} from "../../types";
import List from "./List";

interface DevicesData {
    devices: Device[],
    loading: boolean
}

const DevicesList = () => {
    const { data, loading } = useQuery<DevicesData>(GET_DEVICES);
    if (loading) {
        return <CircularProgress data-testid="loading-spinner"/>;
    }

    if (!data) return <div>No data!</div>;
    return (
        <React.Fragment>
            <h2>Devices List</h2>
            <div className={styles.devicesList} data-testid="devices-list">
                <List devices={data.devices} filterType={DeviceTypeEnum.SENSOR} heading="Sensor Devices"/>
                <List devices={data.devices} filterType={DeviceTypeEnum.TAP} heading="Tap Devices"/>
            </div>
        </React.Fragment>
    );
};

export default React.memo(DevicesList);

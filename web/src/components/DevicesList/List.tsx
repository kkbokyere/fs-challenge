import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';

import DeviceListItem from "../DeviceListItem";
import {Device} from "../../types";
import styles from './DevicesList.module.scss'

type Props = {
    devices: Device[],
    filterType: String,
    heading?: String
}

const DeviceList = ({ devices, filterType, heading} : Props) => {
    return (
        <List
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <span className={styles.subheader}>{heading}</span>
                </ListSubheader>
            }
            className={styles.list}>
            {devices
                .filter((device) => device.type === filterType)
                .map((device) => {
                    return <DeviceListItem key={device.id} {...device}/>
                })}
        </List>
    )
};

export default DeviceList;

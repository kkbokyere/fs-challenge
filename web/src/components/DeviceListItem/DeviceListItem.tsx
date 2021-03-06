import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import DeviceHub from '@material-ui/icons/DeviceHub';
import Divider from '@material-ui/core/Divider';

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
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <DeviceHub />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={label} secondary={`${plant.name}`}/>
            <Divider/>
        </ListItem>)
};

export default DeviceListItem;

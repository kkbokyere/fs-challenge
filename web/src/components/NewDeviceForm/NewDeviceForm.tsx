import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import {Plant, DeviceTypeEnum} from "../../types";
import {useQuery, useMutation} from "@apollo/client";
import {GET_PLANTS} from "../../queries/plants";
import {ADD_DEVICE, GET_DEVICES} from "../../queries/devices";

import styles from './NewDeviceForm.module.scss'

interface PlantsData {
    plants: Plant[],
    loading: boolean
}

const NewDeviceForm = () => {
    const { data, loading } = useQuery<PlantsData>(GET_PLANTS);
    const [addDevice] = useMutation(ADD_DEVICE, {
        refetchQueries: [{ query: GET_DEVICES }],
        awaitRefetchQueries: true
    });

    const [plant, setPlant] = useState('');
    const [label, setLabel] = useState('');
    const [type, setType] = useState(DeviceTypeEnum.SENSOR);

    if (loading) {
        return null;
    }
    // @ts-ignore
    const handleOnChangePlant = (event) => {
        setPlant(event.target.value)
    };
    // @ts-ignore
    const handleOnChangeType = (event) => {
        setType(event.target.value)
    };
    // @ts-ignore
    const handleOnChangeLabel = (event) => {
        setLabel(event.target.value)
    };
    const handleOnSubmitForm = (event: React.FormEvent<EventTarget>) => {
        event.preventDefault();
        addDevice({ variables: { label, type, plantId: plant} });
    };
    return (
        <div className={styles.form} data-testid="new-device-form">
        <form onSubmit={handleOnSubmitForm} >
            <div>
            <TextField
                data-testid="label-input"
                id="label-input"
                label="Device Label"
                defaultValue={label}
                onChange={handleOnChangeLabel}
            />
            </div>
            <div>
            <Select
                data-testid="type-select"
                id="type-select"
                value={type}
                onChange={handleOnChangeType}
            >
                <MenuItem value={DeviceTypeEnum.SENSOR}>Sensor</MenuItem>
                <MenuItem value={DeviceTypeEnum.TAP}>Tap</MenuItem>
            </Select>
            </div>
            <div>
            <Select
                data-testid="plant-select"
                id="plant-select"
                value={plant}
                onChange={handleOnChangePlant}
            >
                {data && data.plants.map(plant => <MenuItem key={plant.id} value={plant.id}>{plant.name}</MenuItem>)}
            </Select>
            </div>
            <Button data-testid="submit-btn" variant="contained" color="primary" type="submit">
                Add Device
            </Button>
        </form>
        </div>
    );
};

export default NewDeviceForm;

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

import Select from '@material-ui/core/Select';
import {Plant} from "../../types";
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
    const [type, setType] = useState('SENSOR');

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
        <div className={styles.form}>
        <form onSubmit={handleOnSubmitForm} >
            <div>
            <TextField
                id="label"
                label="Device Label"
                defaultValue="Default Value"
                onChange={handleOnChangeLabel}
            />
            </div>
            <div>
            <Select
                id="type-select"
                value={type}
                onChange={handleOnChangeType}
            >
                <MenuItem value="SENSOR">Sensor</MenuItem>
                <MenuItem value="TAP">Tap</MenuItem>
            </Select>
            </div>
            <div>
            <Select
                id="plant-select"
                value={plant}
                onChange={handleOnChangePlant}
            >
                {data && data.plants.map(plant => <MenuItem key={plant.id} value={plant.id}>{plant.name}</MenuItem>)}
            </Select>
            </div>
            <Button variant="contained" color="primary" type="submit">
                Primary
            </Button>
        </form>
        </div>
    );
};

export default NewDeviceForm;

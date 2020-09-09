import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import {Plant, DeviceTypeEnum} from "../../types";
import {useQuery, useMutation} from "@apollo/client";
import {GET_PLANTS} from "../../queries/plants";
import {ADD_DEVICE, GET_DEVICES} from "../../queries/devices";

import styles from './NewDeviceForm.module.scss'

interface PlantsData {
    plants: Plant[],
    loading: boolean
}

type Props = {
    handleOnAddDevice: (response: any) => void
}

const NewDeviceForm = ({ handleOnAddDevice }: Props) => {
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
        addDevice({ variables: { label, type, plantId: plant} }).then((response) => {
            handleOnAddDevice(response)
        });
    };
    return (
        <div data-testid="new-device-form">
        <form onSubmit={handleOnSubmitForm} className={styles.form} >
            <div>
            <TextField
                data-testid="label-input"
                id="label-input"
                label="Device Label"
                fullWidth
                placeholder="e.g. My custom device"
                variant="outlined"
                defaultValue={label}
                onChange={handleOnChangeLabel}
            />
            </div>
            <div>
                <TextField
                    data-testid="type-select"
                    id="type-select"
                    select
                    fullWidth
                    label="Sensor Type"
                    value={type}
                    onChange={handleOnChangeType}
                    variant="outlined"
                >
                <MenuItem value={DeviceTypeEnum.SENSOR}>Sensor</MenuItem>
                <MenuItem value={DeviceTypeEnum.TAP}>Tap</MenuItem>
            </TextField>
            </div>
            <div>
                <TextField
                    data-testid="plant-select"
                    id="plant-select"
                    select
                    fullWidth
                    label="Plant"
                    value={plant}
                    onChange={handleOnChangePlant}
                    variant="outlined"
                >
                {data && data.plants.map(plant => <MenuItem key={plant.id} value={plant.id}>{plant.name}</MenuItem>)}
            </TextField>
            </div>
            <Button data-testid="submit-btn" variant="contained" color="primary" type="submit">
                Add Device
            </Button>
        </form>
        </div>
    );
};

export default NewDeviceForm;

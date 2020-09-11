import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import DevicesList from "../components/DevicesList/DevicesList";
import SimpleModal from "../components/SimpleModal";
import NewDeviceForm from "../components/NewDeviceForm";

const DevicesPage = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };
    return (
        <div>
            <Button onClick={handleOpen} variant="contained" color="primary">
                Add Device
            </Button>
            <h2>Devices List</h2>

            <DevicesList/>
            <SimpleModal
                title="Add Device Form"
                openModal={openModal}
                handleClose={handleClose}
            >
                <NewDeviceForm handleOnAddDevice={handleClose}/>
            </SimpleModal>
        </div>
    )
};

export default DevicesPage;

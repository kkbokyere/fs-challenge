import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Header from "./components/Header";
import Layout from "./components/Layout/Layout";
import DevicesList from "./components/DevicesList";
import './styles/App.scss'
import NewDeviceForm from "./components/NewDeviceForm";
import SimpleModal from "./components/SimpleModal";

function App() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };
  return (
    <div className="App">
      <Header/>
      <Layout>
          <Button onClick={handleOpen} variant="contained" color="primary">
              Add Device
          </Button>
          <DevicesList/>
      </Layout>
        <SimpleModal
            title="Add Device Form"
            openModal={openModal}
            handleClose={handleClose}
        >
            <NewDeviceForm handleOnAddDevice={handleClose}/>
        </SimpleModal>
    </div>
  );
}

export default App;

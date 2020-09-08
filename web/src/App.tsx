import React, { useState } from 'react';

import Header from "./components/Header";
import Layout from "./components/Layout/Layout";
import DevicesList from "./components/DevicesList";
import Modal from '@material-ui/core/Modal';
import './styles/App.scss'
import NewDeviceForm from "./components/NewDeviceForm";

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
          <button type="button" onClick={handleOpen}>
              Add Device
          </button>
          <DevicesList/>
      </Layout>
        <Modal
            data-testid="new-device-modal"
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {<React.Fragment><NewDeviceForm/></React.Fragment>}
        </Modal>
    </div>
  );
}

export default App;

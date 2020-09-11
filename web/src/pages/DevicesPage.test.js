import React from 'react';

import { render, screen, fireEvent } from '../test/helper'
import DevicesPage from './DevicesPage';


describe('App Tests', () => {
    const setup = (componentProps = {}, renderProps = { }) => {
        return render(<DevicesPage {...componentProps}/>, renderProps);
    };
    it('should render initial App', async () => {
        const { asFragment } = setup();

        const addDeviceButton = await screen.findByText('Add Device');

        expect(asFragment()).toMatchSnapshot();
        expect(addDeviceButton).toBeInTheDocument();
    });

    it('should open new device form when click add device', async () => {
        const { getByTestId } = setup();
        const addDeviceButton = await screen.findByText('Add Device');
        fireEvent.click(addDeviceButton);
        const deviceModal = await getByTestId('new-device-modal');
        expect(deviceModal).toBeVisible()
    });

    it('should add devices when form is filled', async () => {
        const { getByTestId, getByText } = setup();
        await new Promise(resolve => setTimeout(resolve, 0)); // wait for response

        //Open form
        const addDeviceButton = await screen.findByText('Add Device');
        fireEvent.click(addDeviceButton);

        await new Promise(resolve => setTimeout(resolve, 0)); // wait for form to open

        // input device details
        const newDeviceForm = await getByTestId('new-device-form');
        const labelInput = await getByTestId('label-input');
        const typeSelect = await getByTestId('type-select');
        const plantSelect = await getByTestId('plant-select');
        const submitBtn = await getByTestId('submit-btn');
        labelInput.value = "My test Label";
        typeSelect.value = "SENSOR";
        plantSelect.value = "1";
        fireEvent.change(labelInput);
        fireEvent.change(typeSelect);
        fireEvent.change(plantSelect);
        fireEvent.submit(newDeviceForm)

    });
});

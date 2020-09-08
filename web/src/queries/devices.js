import { gql } from '@apollo/client';

export const GET_DEVICES = gql`
    query getDevices {
        devices{
            type
            label
            id
            plantId
        }
    }
`;

export const ADD_DEVICE = gql`
    mutation AddDevice($label: String!, $plantId: ID!, $type: DeviceTypeEnum!) {
        addDevice(label: $label, plantId: $plantId, type: $type){
            label
            type
            plantId
            plant {
                name
                id
            }
        }
    }
`;

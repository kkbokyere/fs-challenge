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

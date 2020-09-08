import { gql } from '@apollo/client';

export const GET_PLANTS = gql`
    query getPlants {
        plants{
            name
            id
        }
    }
`;

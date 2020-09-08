import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query GetUsers {
        users{
            username
        }
    }
`;

export const GET_USER_BY_USERNAME = gql`
    query GetUsersByUsername($username: String!) {
        getUserByUsername(username: $username){
            username
        }
    }
`;

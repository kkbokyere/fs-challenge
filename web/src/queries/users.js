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

export const LOGIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        loginUser(username: $username, password: $password){
            username
        }
    }
`;

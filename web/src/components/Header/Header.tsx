import React from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Header.module.scss'
import {useQuery} from "@apollo/client";
import {GET_USER_BY_USERNAME} from "../../queries/users";

interface User {
    username: string
}

interface UsersData {
    getUserByUsername: User,
    loading: boolean
    error: any
}

const Header = () => {
    const { data, loading, error } = useQuery<UsersData>(GET_USER_BY_USERNAME, {
        variables: { username: 'Tom Cruise'},
        errorPolicy: "all"
    });
    if (loading) {
        return <CircularProgress data-testid="loading-spinner"/>
    }
    if (error) {
        return <p>Error :(</p>
    }
    return (
        <div className={styles.header}>
            You're logged in as: {data && data.getUserByUsername.username}
        </div>
    );
};


Header.propTypes = {
    user: PropTypes.any,
};

export default Header;

import React, {useState} from "react";
import Alert from '@material-ui/lab/Alert';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {useMutation} from "@apollo/client";
import {LOGIN_USER} from "../queries/users";

type Props = {
    onHandleLogin?: (arg1:any) => void
}

interface LoginData {
    loginUser: object,
    loading: boolean
}

function LoginPage({ onHandleLogin = () => {} } : Props) {
    const [loginUser] = useMutation(LOGIN_USER);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e: React.FormEvent<EventTarget>) => {
        setLoginError('');
        loginUser({ variables: { username, password }}).then((res) => {
            const { data } = res;
            if (data.loginUser) {
                onHandleLogin(data.loginUser);
            } else {
                setLoginError('unable to login, please try again')
            }
        }).catch((err) => {
            setLoginError('unable to login, please try again');
        });
        e.preventDefault();
    };

    return (
        <div>
            <h2>Login</h2>
            {loginError && <Alert severity="error">{loginError}</Alert>}
            <form onSubmit={handleLogin}>
                <div>
                    <Input required placeholder="Username" type="text" onChange={(e) => setUsername(e.currentTarget.value)}/>
                </div>
                <div>
                    <Input required placeholder="Password" type="password" onChange={e => setPassword(e.currentTarget.value)}/>
                </div>
                    <Button type="submit" variant="contained" color="primary">Log in</Button>
            </form>
        </div>
    );
}

export default LoginPage;

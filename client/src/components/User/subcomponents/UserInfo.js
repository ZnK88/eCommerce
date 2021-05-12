import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import UserCard from './UserCard';

import Box from '@material-ui/core/Box';
import { Alert } from '@material-ui/lab';

const UserInfo = () => {
    
    const [user, setUser] = useState([]);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        const getuserInfo = () => {
            let token = localStorage.getItem('token');
            Axios.get(`http://localhost:5000/users`, {
                headers: {
                    token: token
                }
            }).then(response => {
                setSuccessMsg(true);
                setUser(response.data);
            })
            .catch(error => {
                setErrorMsg(error.response.data.msg);
            })
        }

        getuserInfo();
    }, []);
    
    return (
        <Box>
            { successMsg && (
                <UserCard user={user} />
            )
            }
            { errorMsg && (
                <Alert severity="error">{errorMsg}</Alert>
            )
            }
        </Box>
    );
}

export default UserInfo;
import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserOneInfo} from "../redux/actions/action";


const User = ({userInfo}) => {
    const dispatch = useDispatch()

    const getOneUser = (e) => {
        dispatch(fetchUserOneInfo(e.target.value))
    }
    return (

        <ul>
            <li>name: {userInfo.name}</li>
            <li>email: {userInfo.email}</li>

            <li>
                <button value={userInfo.id} onClick={getOneUser}>get one user</button>
            </li>
        </ul>
    );
};

export default User;
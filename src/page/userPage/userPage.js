import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchUsersAction} from "../../redux/actions/action";
import User from "../../components/User";


const UserPage = () => {

    const dispatch = useDispatch()

    const {users , oneUser  } = useSelector(state => state.userReducer)
    const getUsers = () => {
       dispatch(fetchUsersAction())
    }


    return (
        <div>
            {oneUser && oneUser.address && (
                <ul>
                    <li>name:{oneUser.name}</li>
                    <li>username:{oneUser.username}</li>
                    <li>email:{oneUser.email}</li>
                    <li>address:{oneUser.address.street}</li>
                </ul>
            )}
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User userInfo={user}/>)}
        </div>
    );
};

export default UserPage;
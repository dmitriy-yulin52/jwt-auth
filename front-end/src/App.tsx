import * as React from 'react';
import LoginForm from "./components/LoginForm";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./servies/UserService";

function App() {

    const {store} = useContext(Context)
    const {checkAuth} = store
    const [users,setUsers] = useState<IUser[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth().then((res) => console.log(res, 'res'))
        }
    }, [])


   async function getUsers(){
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data)
        }catch (e){
            console.log(e)
        }
    }


    if(store.isLoading){
        return <div>Загрузка</div>
    }

    if (!store.isAuth) {
        return <LoginForm/>
    }

    return (
        <div>
            <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'Авторизуйтесь'}</h1>
            <button onClick={()=>store.logout}>Выйти</button>
            <div>
                <button onClick={getUsers}>Получить пользователей</button>
            </div>
            {users.map((user)=><div key={user.email}>{user.email}</div>)}
        </div>
    );
}

export default observer(App);

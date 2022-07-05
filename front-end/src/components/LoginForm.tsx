import * as React from 'react';
import {ChangeEvent, FC, ReactElement, useCallback, useContext, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

type LoginFormProps = {};


 const LoginForm: FC<LoginFormProps> = (props): ReactElement => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const {store} = useContext(Context)
    const {login,registration}=store

    const onChangeSetEmail = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.currentTarget.value)
    },[setEmail,email])
    const onChangeSetPassword = useCallback((e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.currentTarget.value)
    },[setPassword,password])


    return (
        <div>
            <input
                value={email}
                onChange={onChangeSetEmail}
                type="text"
                placeholder={'Email'}
            />
            <input
                value={password}
                onChange={onChangeSetPassword}
                type="password"
                placeholder={'Password'}
            />
            <button onClick={()=>login(email,password)}>Логин</button>
            <button onClick={()=>registration(email,password)}>Регистрация</button>
        </div>
    );
};


 export default observer(LoginForm)
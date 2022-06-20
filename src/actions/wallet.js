import api from '../utils/api';

import { GET_TRANSACTION, SEND_TOKEN, AUTH_ERROR } from './types';
import { toast } from 'react-toastify';

//sendToken
export const sendToken = (data) => async dispatch => {

    try {
        toast.warning('Transaction is Pending', {
            position: "top-right",
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })  
        const res = await api.post('/users/sendToken', data);
        const res_tran = await api.get(`/users/getPastLogs/${data.fromAddress}`);
        toast.clearWaitingQueue();
        toast.success('Transaction  Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        dispatch({
            type: GET_TRANSACTION,
            payload: res_tran.data
        });
    } catch (err) {
        //err msg
            toast.error('Transaction  Error', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })  
    }
}

export const getTransaction = (data) => async dispatch => {
    try {
        const res_tran = await api.get(`/users/getPastLogs/${data}`);
        dispatch({
            type: GET_TRANSACTION,
            payload: res_tran.data
        });
    } catch (err) {
        //err msg
        toast.error('Transaction  Error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            })  
    }
}
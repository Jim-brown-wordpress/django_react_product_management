import React , { useEffect, useState } from 'react';
import axios from 'axios';

import {API_URL} from '../constants';

const NewStudentForm = ({

}) => {
    useEffect(() =>{
        axios.get(API_URL)
            .then(res => {
                console.log(res.data)
            });
    } ,[]);

    return (
        <div>
            <h2>This is NewStudentForm</h2>
        </div>
    )
}

export {NewStudentForm}

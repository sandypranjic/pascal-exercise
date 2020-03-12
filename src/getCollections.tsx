import axios from 'axios';
import { generateSelectOptions } from './generateSelectOptions';

interface collectionsData {
    id: number;
    title: string;
}

export const getCollections = () => {
    return axios.get(`https://api.unsplash.com/collections/?page=1&per_page=30&client_id=SQQgMgec18KujiGCQXh7U3R-woF0f-J3HI_DHhoOgzk`)
    .then(data => {
        // console.log(data.data);
        console.log(data);
        generateSelectOptions([...data.data]);
    })
    .catch(err => {
        console.log('Error happened during fetching!', err);
    });
}
import axios from 'axios';

interface collectionsData {
    id: number;
    title: string;
}

export const getCollections = () => {
    const collections: any = [];
    return axios.get(`https://api.unsplash.com/collections/?page=1&per_page=30&client_id=SQQgMgec18KujiGCQXh7U3R-woF0f-J3HI_DHhoOgzk`)
    .then(data => {
        data.data.forEach( (item: any) => {
            collections.push(item);
        })
        return collections;
    })
    .catch(err => {
        console.log('Error happened during fetching!', err);
    });
}
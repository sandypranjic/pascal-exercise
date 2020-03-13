import axios from 'axios';

export const apiCall = (searchQuery: string, collection: string) => {
    const search: any = `${searchQuery} ${collection}`;
    if (searchQuery && collection) {
        return axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${search}&client_id=SQQgMgec18KujiGCQXh7U3R-woF0f-J3HI_DHhoOgzk`)
        .then(data => {
            console.log(data.data);
            return data.data;
        })
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    }
}

export const getUsersCollections = () => {
    return axios.get(`https://api.unsplash.com/collections/490/photos/?page=1&per_page=10&client_id=SQQgMgec18KujiGCQXh7U3R-woF0f-J3HI_DHhoOgzk`)
        .then(data => {
            console.log(data.data);
            return data.data;
        })
        .catch(err => {
            console.log('Error happened during fetching!', err);
        });
}
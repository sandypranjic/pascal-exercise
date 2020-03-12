import axios from 'axios';

export const apiCall = (searchQuery: string) => {
    return axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${searchQuery}&client_id=SQQgMgec18KujiGCQXh7U3R-woF0f-J3HI_DHhoOgzk`)
    .then(data => {
        console.log(data.data);
    })
    .catch(err => {
        console.log('Error happened during fetching!', err);
    });
}
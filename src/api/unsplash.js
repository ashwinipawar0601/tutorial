import axios from 'axios';

axios.create({
    basrURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
         'Client-ID 1ab8c049667aeb58e278f90814f959da20f42fb1794bff22fa7072897c31c3ee'
    }

});
export default axios;
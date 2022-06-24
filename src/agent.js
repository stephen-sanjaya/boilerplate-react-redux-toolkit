import SuperAgent from 'superagent';
import SuperAgentPromise from 'superagent-promise';

const superAgent = SuperAgentPromise(SuperAgent,global.Promise);

const API_ROOT = 'https://pokeapi.co/api/v2';

const encode =  encodeURIComponent;
const responseBody  =  (res) => res.body;

const token =  null;
const tokenPlugin =  req => {
    if(token){
        req.set('authorization',`Token ${token}`);
    }
}

const requests = {
    del : url  => superAgent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    get : url  => superAgent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
    put : (url,body)  => superAgent.put(`${API_ROOT}${url}`,body).use(tokenPlugin).then(responseBody),
    post: (url, body) => superAgent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
}


const Pokemon = {
    getDito: () => requests.get('/pokemon/ditto'),
};

export default {
    Pokemon,
    setToken: _token => { token = _token; }
};


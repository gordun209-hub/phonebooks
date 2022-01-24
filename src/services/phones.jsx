import axios from 'axios'

const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl)

    return request.then(res => res.data)
}


const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
};


const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    console.log(request)
    return request.then(res => res.data)
}

export default {getAll, remove, create}

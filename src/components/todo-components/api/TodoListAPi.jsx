import axios from 'axios';

const apiClient = axios.create({
    baseURL: `http://localhost:8080`
});

export function retrieveListForUsername(username){
     return apiClient.get(`/users/${username}/list`)
}

export function retrieveItem(id){
     return apiClient.get(`/updateItem/${id}`)
}

export function deleteItem(id){
    return apiClient.delete(`deleteItem/${id}`)
}

export function updateItem(id, todo){
    return apiClient.put(`/updateItem/${id}`, todo)
}

export function addItem(todo){
    return apiClient.put(`/addItem`, todo)
}
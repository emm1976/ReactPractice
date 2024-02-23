import axios from "axios"

const JSON_SERVER_URL = 'http://localhost'
const JSON_SERVER_PORT = 3001

export const apiAxios = axios.create({ baseURL: `${JSON_SERVER_URL}:${JSON_SERVER_PORT}` })
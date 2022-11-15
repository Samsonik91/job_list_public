import axios from 'axios'

const URL = "https://api.json-generator.com/templates/ZM1r0eic3XEy/data"

const Api = axios.create({
    baseURL: URL
})

const authInterceptor = config => {
    config.headers.authorization = 'Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
    return config
}

Api.interceptors.request.use(authInterceptor)

export const fetchJobs = () => Api.get('/')


import axios from 'axios'
import TokenGenerator from './token.generator'
import getEnv from './env'

const baseURL = getEnv('TALKDESK_API_URL');

const HttpClient = axios.create({
  baseURL,
  timeout: 5000
});

HttpClient.interceptors.request.use(async function tokenInterceptor(config) {
  const accessToken = await TokenGenerator.get();

  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`
    }
  }
});

export default HttpClient;

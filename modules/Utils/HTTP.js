import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getToken = async() => {
   const token =  await AsyncStorage.getItem('accessToken');
    return token;
}

const API_URL = 'https://mytownstor.cloud/api'

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.accessToken = getToken();

export default axios;
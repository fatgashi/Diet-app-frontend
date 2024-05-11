import axios from "@/methods/axios.js"
import { isTokenAvaible, removeToken } from "./localStorage"
import configuration from "./config";
import { jwtDecode } from 'jwt-decode';
import router from "../router";

export function getTokenExpiration(token) {
    const decoded = jwtDecode(token);
    if (decoded.exp) {
        return decoded.exp * 1000; // Convert to milliseconds
    }
    return null;
}

export function logout() {
    removeToken();
    router.push('/home');
}

export async function isAdmin(){
    const config = configuration();

    try {
        const user = await axios.get(`/user/profile`, config).then(res => {
            return res.data;
        });
        
        return user.role == 'admin' ? true : false;

    } catch(err) {
        return err.message;
    }

}

export async function getCurrentUser(){
    const config = configuration();

    try {
        if(isTokenAvaible()){
            const user = await axios.get(`/user/profile`, config).then(res => {
                return res.data;
            });
            
            return user;

        }

    } catch(err) {
        return err.message;
    }

}

export async function checkTokenExpired () {
    const config = configuration();
    try {
        if (isTokenAvaible()) {
            const data = await axios.get(`/users/hasTokenExpired`, config).then(res => {
                return res.data;
            });
        
            if (data.expired === true) {
              removeToken();
            }
          }
    } catch (err) {
        return err.message;
    }
}


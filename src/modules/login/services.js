import { httpClient } from "../../plugins/axios";

// let jdata = {
//     "matricula" : this.user,
//     "contraseña" : this. password
//      };

export default{
 
    login ({user, password}){return httpClient.post('api/login', {user, password})},
    logout({user, password}){ return httpClient.post('/logout', {user, password})
    }
}
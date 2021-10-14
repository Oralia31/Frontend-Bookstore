// import LoginServices from '/services'

// export const SET_TOKEN = 'login/SET_TOKEN'

// export const LoginStore = {
//     namespaced: true,
//     state: {
//         token: ''
//     },
//     actions:{
//         login: async ({ commit }, payload) => {
//             const res = await LoginServices.login(payload)
//             const token = res.data.token
//             commit (SET_TOKEN, token)
//         },

//         logout: async ({ commit }, payload) => {
//             const res = await LoginServices.logout(payload)
//             const token = res.data.token
//             commit (SET_TOKEN, token)
//         }

//     },
//     mutations:{
//         [SET_TOKEN] (state, payload){
//             state.token = payload
//         }
//     }
// }
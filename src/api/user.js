import https from "../common/https.js";

export const loginGet = (async () => {
    return await https.get('/getUser');
})

export const loginPost = (async user => {
    return await https.post('/getUser',user);
})
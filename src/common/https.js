class Https {
    URL;
    header;

    constructor() {
        this.URL = 'https://1b4e8bbf-9095-4ab5-a560-9d307c3074c6.mock.pstmn.io';
        this.header = {};
    }

    setHeader = (method) => {
        if (method == 'POST' || method == 'PUT') this.header['Content-Type'] = 'application/json';
        this.header['Accept'] = 'application/json'
        return this.header;
    }

    setUrl = (url) => {
        return this.URL + url;
    }

    catchError = (err) => {
        console.log(err);
    }

    get = (async (url) => {
        try {
            const response = await fetch(this.setUrl(url), {
                method: 'GET',
                headers: this.setHeader('GET')
            });

            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        } catch (e) {
            this.generateError(e);
        }
    });

    post = (async (url,body) => {
        try {
            const response = await fetch(this.setUrl(url), {
                method: 'POST',
                headers: this.setHeader('POST'),
                body: JSON.stringify(body)
            });

            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        } catch (e) {
            this.generateError(e);
        }
    });

    delete = (async (url,body) => {
        try {
            const response = await fetch(this.setUrl(url), {
                method: 'DELETE',
                headers: this.setHeader('DELETE')
            });

            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        } catch (e) {
            this.generateError(e);
        }
    });

    put = (async (url,body) => {
        try {
            const response = await fetch(this.setUrl(url), {
                method: 'PUT',
                headers: this.setHeader('PUT'),
                body: JSON.stringify(body)

            });

            if(!response.ok){
                throw new Error(response.status);
            }
            return response.json();
        } catch (e) {
            this.catchError(e);
        }
    });


}

const https = new Https();

export default https;
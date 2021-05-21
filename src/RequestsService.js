class RequestsService {

    getAll = async (path) => {
        return fetch('http://localhost:9000/' + path, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }).then(response => {
            return response.json
        }).then(responseData => {
            return responseData
        });
    }

    add = async (path, body) => {
        return fetch('http://localhost:9000/' + path, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            body: body
        }).then(response => {
            return response.json
        }).then(responseData => {
            return responseData
        });
    }

    update = async (path, body) => {
        return fetch('http://localhost:9000/' + path, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
            body: body
        }).then(response => {
            return response.json
        }).then(responseData => {
            return responseData
        });
    }

    remove = async (path) => {
        return fetch('http://localhost:9000/' + path, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            }
        }).then(response => {
            return response.json
        }).then(responseData => {
            return responseData
        });
    }

}

export default RequestsService;

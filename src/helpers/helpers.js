export function postToServer(url, data) {
    return fetch("localhost:8000/" + url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            ...csrfToken(),
        },
        body: JSON.stringify(data)
    })
        .then(checkStatus)
        .then(response => response.json())
        .catch(handleError)
}

export function getFromServer(url, data) {
    return fetch(url, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            ...csrfToken(),
        },
        body: JSON.stringify(data)
    })
        .then(checkStatus)
        .then(response => response.json())
        .catch(handleError)
}

function checkStatus(response) {
    console.log("helpers - response: ", response);
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        let error = new Error(response.statusText, response.status);
        error.status = response.status;
        error.response = response;
        error.data = response.json();
        throw error;
    }
}

function csrfToken() {
    const csrfElement = document.querySelector('meta[name="csrf-token"]');
    if (csrfElement) {
        return {
            'X-CSRF-TOKEN': csrfElement.content,
        };
    }
    return {};
}

function handleError(error) {
    return {
        error: {
            status: error.status,
            response: error.reponse,
            message: error.response.statusText,
            data: error.data,
            show: true,
        },
    };
}

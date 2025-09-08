import http from "../http-common";

let root = "/utenti.php";

const getListaUtenti = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getListaUtenti"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getUtente = (token: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getUtente"], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const inserisciUtente = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inserisciUtente"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, jsonBody, { params, headers: headers });
}

const modificaUtente = (token: any, jsonBody: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "modificaUtente"], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const eliminaUtente = (token: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "eliminaUtente"], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.delete(root, { params, headers: headers });
}

const bloccaUtente = (token: any, jsonBody: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "bloccaUtente"], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const sbloccaUtente = (token: any, jsonBody: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "sbloccaUtente"], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}


const utentiService = {
    getListaUtenti,
    getUtente,
    inserisciUtente,
    modificaUtente,
    eliminaUtente,
    bloccaUtente,
    sbloccaUtente
};
export default utentiService;
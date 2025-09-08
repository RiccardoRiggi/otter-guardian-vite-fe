import http from "../http-common";

let root = "/notifiche.php";

const getListaNotifiche = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getListaNotifiche"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const inserisciNotifica = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inserisciNotifica"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, jsonBody, { params, headers: headers });
}

const modificaNotifica = (token: any, jsonBody: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "modificaNotifica"], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const eliminaNotifica = (token: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "eliminaNotifica"], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.delete(root, { params, headers: headers });
}

const getNotifica = (token: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNotifica"], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getDestinatariNotifica = (token: any, pagina: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getDestinatariNotifica"], ["pagina", pagina], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const inviaNotificaTutti = (token: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inviaNotificaTutti"], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, null, { params, headers: headers });
}

const inviaNotificaRuolo = (token: any, idTipoRuolo: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inviaNotificaRuolo"], ["idTipoRuolo", idTipoRuolo], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, null, { params, headers: headers });
}

const inviaNotificaUtente = (token: any, idUtente: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inviaNotificaUtente"], ["idUtente", idUtente], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, null, { params, headers: headers });
}

const getNotificaLatoUtente = (token: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNotificaLatoUtente"], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNotificheLatoUtente = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNotificheLatoUtente"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const eliminaNotificaLatoUtente = (token: any, idNotifica: any) => {
    const params = new URLSearchParams([["nomeMetodo", "eliminaNotificaLatoUtente"], ["idNotifica", idNotifica]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.delete(root, { params, headers: headers });
}

const leggiNotificheLatoUtente = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "leggiNotificheLatoUtente"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, null, { params, headers: headers });
}


const notificheService = {
    getListaNotifiche,
    inserisciNotifica,
    modificaNotifica,
    eliminaNotifica,
    getNotifica,
    getDestinatariNotifica,
    inviaNotificaTutti,
    inviaNotificaRuolo,
    inviaNotificaUtente,
    getNotificaLatoUtente,
    getNotificheLatoUtente,
    eliminaNotificaLatoUtente,
    leggiNotificheLatoUtente

};
export default notificheService;
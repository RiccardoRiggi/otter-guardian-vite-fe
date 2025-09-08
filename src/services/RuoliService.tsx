import http from "../http-common";

let root = "/ruoli.php";

const getRuoli = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getRuoli"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getRuolo = (token: any, idTipoRuolo: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getRuolo"], ["idTipoRuolo", idTipoRuolo]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const inserisciRuolo = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inserisciRuolo"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, jsonBody, { params, headers: headers });
}

const modificaRuolo = (token: any, jsonBody: any, idTipoRuolo: any) => {
    const params = new URLSearchParams([["nomeMetodo", "modificaRuolo"], ["idTipoRuolo", idTipoRuolo]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const eliminaRuolo = (token: any, idTipoRuolo: any) => {
    const params = new URLSearchParams([["nomeMetodo", "eliminaRuolo"], ["idTipoRuolo", idTipoRuolo]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.delete(root, { params, headers: headers });
}

const associaRuoloUtente = (token: any, jsonBody: any, idTipoRuolo: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "associaRuoloUtente"], ["idTipoRuolo", idTipoRuolo], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const dissociaRuoloUtente = (token: any, jsonBody: any, idTipoRuolo: any, idUtente: any) => {
    const params = new URLSearchParams([["nomeMetodo", "dissociaRuoloUtente"], ["idTipoRuolo", idTipoRuolo], ["idUtente", idUtente]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const getUtentiPerRuolo = (token: any, idTipoRuolo: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getUtentiPerRuolo"], ["idTipoRuolo", idTipoRuolo], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const associaRuoloRisorsa = (token: any, jsonBody: any, idTipoRuolo: any, idRisorsa: any) => {
    const params = new URLSearchParams([["nomeMetodo", "associaRuoloRisorsa"], ["idTipoRuolo", idTipoRuolo], ["idRisorsa", idRisorsa]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const dissociaRuoloRisorsa = (token: any, jsonBody: any, idTipoRuolo: any, idRisorsa: any) => {
    const params = new URLSearchParams([["nomeMetodo", "dissociaRuoloRisorsa"], ["idTipoRuolo", idTipoRuolo], ["idRisorsa", idRisorsa]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const getRisorsePerRuolo = (token: any, idTipoRuolo: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getRisorsePerRuolo"], ["idTipoRuolo", idTipoRuolo], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const associaRuoloVoceMenu = (token: any, jsonBody: any, idTipoRuolo: any, idVoceMenu: any) => {
    const params = new URLSearchParams([["nomeMetodo", "associaRuoloVoceMenu"], ["idTipoRuolo", idTipoRuolo], ["idVoceMenu", idVoceMenu]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const dissociaRuoloVoceMenu = (token: any, jsonBody: any, idTipoRuolo: any, idVoceMenu: any) => {
    const params = new URLSearchParams([["nomeMetodo", "dissociaRuoloVoceMenu"], ["idTipoRuolo", idTipoRuolo], ["idVoceMenu", idVoceMenu]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const getVociMenuPerRuolo = (token: any, idTipoRuolo: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getVociMenuPerRuolo"], ["idTipoRuolo", idTipoRuolo], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}


const ruoliService = {
    getRuoli,
    getRuolo,
    inserisciRuolo,
    modificaRuolo,
    eliminaRuolo,
    associaRuoloUtente,
    dissociaRuoloUtente,
    getUtentiPerRuolo,
    associaRuoloRisorsa,
    dissociaRuoloRisorsa,
    getRisorsePerRuolo,
    associaRuoloVoceMenu,
    dissociaRuoloVoceMenu,
    getVociMenuPerRuolo

};
export default ruoliService;
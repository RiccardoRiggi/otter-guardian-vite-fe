import http from "../http-common";

let root = "/dispositivoFisico.php";

const getDispositiviFisici = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getDispositiviFisici"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getDispositiviFisiciTelegram = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getDispositiviFisiciTelegram"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const generaIdentificativoDispositivoFisico = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "generaIdentificativoDispositivoFisico"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}


const generaIdentificativoTelegram = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "generaIdentificativoTelegram"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const isDispositivoAbilitato = (token: any, idDispositivoFisico: any) => {
    const params = new URLSearchParams([["nomeMetodo", "isDispositivoAbilitato"], ["idDispositivoFisico", idDispositivoFisico]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const isDispositivoTelegramAbilitato = (token: any, idDispositivoFisico: any) => {
    const params = new URLSearchParams([["nomeMetodo", "isDispositivoTelegramAbilitato"], ["idDispositivoFisico", idDispositivoFisico]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getListaDispositiviFisici = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getListaDispositiviFisici"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getListaDispositiviFisiciTelegram = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getListaDispositiviFisiciTelegram"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const rimuoviDispositivoFisico = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "rimuoviDispositivoFisico"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const rimuoviDispositivoFisicoTelegram = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "rimuoviDispositivoFisicoTelegram"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const dispositiviFisiciService = {
    getDispositiviFisici,
    getDispositiviFisiciTelegram,
    generaIdentificativoDispositivoFisico,
    generaIdentificativoTelegram,
    isDispositivoAbilitato,
    isDispositivoTelegramAbilitato,
    getListaDispositiviFisici,
    getListaDispositiviFisiciTelegram,
    rimuoviDispositivoFisico,
    rimuoviDispositivoFisicoTelegram

};
export default dispositiviFisiciService;
import http from "../http-common";

let root = "/vociMenu.php";

const getVociMenuPerUtente = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getVociMenuPerUtente"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getVociMenu = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getVociMenu"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const eliminaVoceMenu = (token: any, idVoceMenu: any) => {
    const params = new URLSearchParams([["nomeMetodo", "eliminaVoceMenu"], ["idVoceMenu", idVoceMenu]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.delete(root, { params, headers: headers });
}

const getVoceMenu = (token: any, idVoceMenu: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getVoceMenu"], ["idVoceMenu", idVoceMenu]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const inserisciVoceMenu = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "inserisciVoceMenu"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.post(root, jsonBody, { params, headers: headers });
}

const modificaVoceMenu = (token: any, jsonBody: any, idVoceMenu: any) => {
    const params = new URLSearchParams([["nomeMetodo", "modificaVoceMenu"], ["idVoceMenu", idVoceMenu]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const vociMenuService = {
    getVociMenuPerUtente,
    getVociMenu,
    eliminaVoceMenu,
    getVoceMenu,
    inserisciVoceMenu,
    modificaVoceMenu
};
export default vociMenuService;
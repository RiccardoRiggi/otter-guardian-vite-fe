import http from "../http-common";

let root = "/gestioneAccessi.php";

const getListaAccessi = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getListaAccessi"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const terminaAccesso = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "terminaAccesso"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const gestioneAccessiService = {
    getListaAccessi,
    terminaAccesso
};
export default gestioneAccessiService;
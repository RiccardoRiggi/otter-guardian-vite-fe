import http from "../http-common";

let root = "/indirizziIp.php";

const getIndirizziIp = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getIndirizziIp"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const sbloccaIndirizzoIp = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "sbloccaIndirizzoIp"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const bloccaIndirizzoIp = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "bloccaIndirizzoIp"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const azzeraContatoreAlert = (token: any, jsonBody: any) => {
    const params = new URLSearchParams([["nomeMetodo", "azzeraContatoreAlert"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.put(root, jsonBody, { params, headers: headers });
}

const indirizziIpService = {
    getIndirizziIp,
    sbloccaIndirizzoIp,
    bloccaIndirizzoIp,
    azzeraContatoreAlert
};
export default indirizziIpService;
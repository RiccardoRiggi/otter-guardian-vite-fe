import http from "../http-common";

let root = "/statistiche.php";

const getStatisticheMetodi = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getStatisticheMetodi"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroVociMenu = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroVociMenu"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroRuoli = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroRuoli"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroUtenti = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroUtenti"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroAccessiAttivi = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroAccessiAttivi"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroRisorse = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroRisorse"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroLogin = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroLogin"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroIndirizziIp = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroIndirizziIp"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNumeroDispositiviFisiciAttivi = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNumeroDispositiviFisiciAttivi"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}


const statisticheService = {
    getStatisticheMetodi,
    getNumeroVociMenu,
    getNumeroRuoli,
    getNumeroUtenti,
    getNumeroAccessiAttivi,
    getNumeroRisorse,
    getNumeroLogin,
    getNumeroIndirizziIp,
    getNumeroDispositiviFisiciAttivi
};
export default statisticheService;
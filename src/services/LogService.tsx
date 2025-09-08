import http from "../http-common";

let root = "/log.php";

const getLogs = (token: any, pagina: any, livelloLog: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getLogs"], ["pagina", pagina], ["livelloLog", livelloLog.toUpperCase()]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getLogsTelegram = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getLogsTelegram"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getNotificheTelegram = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getNotificheTelegram"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}



const logService = {
    getLogs,
    getLogsTelegram,
    getNotificheTelegram
};
export default logService;
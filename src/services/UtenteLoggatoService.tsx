import http from "../http-common";

let root = "/utenteLoggato.php";

const getUtenteLoggato = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getUtenteLoggato"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const invalidaToken = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "invalidaToken"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    let config = { params, headers: headers };

    return http.put(root, null, config);
}

const verificaAutenticazione = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "verificaAutenticazione"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getStoricoAccessi = (token: any, pagina: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getStoricoAccessi"], ["pagina", pagina]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const generaCodiciBackup = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "generaCodiciBackup"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getMetodiAutenticazionePerUtenteLoggato = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getMetodiAutenticazionePerUtenteLoggato"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const abilitaTipoMetodoLogin = (token: any, idTipoMetodoLogin: any) => {
    const params = new URLSearchParams([["nomeMetodo", "abilitaTipoMetodoLogin"], ["idTipoMetodoLogin", idTipoMetodoLogin]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    let config = { params, headers: headers };

    return http.put(root, null, config);
}

const disabilitaTipoMetodoLogin = (token: any, idTipoMetodoLogin: any) => {
    const params = new URLSearchParams([["nomeMetodo", "disabilitaTipoMetodoLogin"], ["idTipoMetodoLogin", idTipoMetodoLogin]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    let config = { params, headers: headers };

    return http.put(root, null, config);
}

const getMetodiRecuperoPasswordPerUtenteLoggato = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getMetodiRecuperoPasswordPerUtenteLoggato"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const abilitaTipoRecuperoPassword = (token: any, idTipoMetodoRecPsw: any) => {
    const params = new URLSearchParams([["nomeMetodo", "abilitaTipoRecuperoPassword"], ["idTipoMetodoRecPsw", idTipoMetodoRecPsw]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    let config = { params, headers: headers };

    return http.put(root, null, config);
}

const disabilitaTipoRecuperoPassword = (token: any, idTipoMetodoRecPsw: any) => {
    const params = new URLSearchParams([["nomeMetodo", "disabilitaTipoRecuperoPassword"], ["idTipoMetodoRecPsw", idTipoMetodoRecPsw]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    let config = { params, headers: headers };

    return http.put(root, null, config);
}

const utenteLoggatoService = {
    getUtenteLoggato,
    invalidaToken,
    verificaAutenticazione,
    getStoricoAccessi,
    generaCodiciBackup,
    getMetodiAutenticazionePerUtenteLoggato,
    abilitaTipoMetodoLogin,
    disabilitaTipoMetodoLogin,
    getMetodiRecuperoPasswordPerUtenteLoggato,
    abilitaTipoRecuperoPassword,
    disabilitaTipoRecuperoPassword
};
export default utenteLoggatoService;
import http from "../http-common";

let root = "/combo.php";

const getComboVociMenu = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getComboVociMenu"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}

const getComboRuoli = (token: any) => {
    const params = new URLSearchParams([["nomeMetodo", "getComboRuoli"]]);
    const headers = {
        "X-Token": token,
        "Content-type": "application/json",
    }

    return http.get(root, { params, headers: headers });
}



const comboService = {
    getComboVociMenu,
    getComboRuoli
};
export default comboService;
export default class RemoteData {
    static url = "http://localhost:3002/users";

    /**
     * Execute une requête Http avec le verbe GET
     * afin de récupérer la liste des utilisateurs
     * @returns Promise <Users []>
     */
    static loadUsers() {
        return fetch(RemoteData.url)
            .then((response) => {
                console.log('response.status', response.status);
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(
                        "Problème de serveur dans loadUsers " + response.status);
                }
            })
            .then((users) => {
                console.log('users', users);
                return users;
            });
    }

    /**
     * Permet de savoir si l'utilisateur est connecté (login et pwd ok)
     * @param {string} login
     * @param {string} pwd
     * @returns Promise <boolean>
     */
    static isLogged(login, pwd) {
        console.log(`Dans isLogged`, login, pwd);
        return RemoteData.loadUsers().then((users) => {
            let isLogged = false;
            for (let i = 0; i < users.length; i++) {
                if (login === users[i].login && pwd === users[i].pwd) {
                    return true;
                }
            }
            return false;
        });
    }
}

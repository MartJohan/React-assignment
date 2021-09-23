const url = "https://vuejs-assignment-3.herokuapp.com/translations";
const key = "RakrKsq94tlf3PZmAnuQ";

export async function GetUsers() {
    try {
        const users = await fetch(`${url}`).then(response => response.json())
        if(users.length >= 1) { return users[0]; }
        else { return null; }
    } catch(error) {
        return null;
    }
}

export async function GetUser(user : string) {
    try {
        const userfromDB = await fetch(`${url}?username=${user}`)
        .then(response => response.json());
        if(userfromDB.length !== 0) { return userfromDB[0]; }
        else { return null; }
    } catch(error) {
        return false;
    }
}

export async function PostUser(username : string) {
    try {
        return await fetch(`${url}`, {
            method : 'POST',
            headers : {
                'X-API-Key' : key,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : username,
                translations : []
            })
        })
        .then(response => {
            if(!response.ok) {
                throw new Error("Could not create new user")
            }
            return response.json()
        })
        .then(newUser => {
            return newUser
        })
    } catch (error) {
    }
}

export async function PatchTranslations(userId : number, translations : string[]) {
    try {
        return await fetch(`${url}/${userId}`, {
            method : 'PATCH',
            headers : {
                'X-API-Key' : key,
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                translations : translations
            })
        })
        .then(response => {
            if(!response.ok) {
                throw new Error("Could not update translations history")
            }
            return response.json()
        })
        .then(updatedUser => {
            return updatedUser;
        })
    } catch(error) {
        return null;
    }
}
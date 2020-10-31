import Axios from "axios";

export const fireBaseAxios = Axios.create({
    baseURL: "https://vue-new-york-times-reader.firebaseio.com/"
})
export const authenticateUser = async(userData) => {
    const allUsers = await fireBaseAxios.get("/Users.json");
    const usersArray = Object.values(allUsers.data);
    let authenticated = false;
    let user;
    usersArray.forEach((fetchedUser) => {
        if (
            fetchedUser.username === userData.username &&
            fetchedUser.password === userData.password
        ) {
            authenticated = true;
            user = fetchedUser;
        }
    });
    return [authenticated, user];
}

export const SignUpUser = async(user) => {
    fireBaseAxios.post("/Users.json", user)
}

export const checkNameAvailability = async(username) => {
    const usersObj = await fireBaseAxios.get("/Users.json");
    const usersArr = Object.values(usersObj.data);
    let available = true;
    usersArr.forEach((user) => {
        if (user.username === username) {
            available = false;
        }
    })
    return available;
}

export const addArticle = async(userId, payload) => {
    const userIdentifier = await getUserIdentifier(userId);
    fireBaseAxios.post(`/Users/${userIdentifier[0]}/articles.json`, payload);
}


const getUserIdentifier = async(userId) => {
    const users = await fireBaseAxios.get("/Users.json");
    const usersArr = Object.entries(users.data);
    const userIdentifier = usersArr.filter(user => {
        return user[1].id === userId
    })[0];
    return userIdentifier;
}

export const updateArticles = async(userId) => {
    const userIdentifier = await getUserIdentifier(userId);
    const articles = await fireBaseAxios.get(`/Users/${userIdentifier[0]}/articles.json`);
    return articles;
}
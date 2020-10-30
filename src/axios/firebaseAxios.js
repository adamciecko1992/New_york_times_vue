import Axios from "axios";

export const fireBaseAxios = Axios.create({
    baseURL:"https://vue-new-york-times-reader.firebaseio.com/"
})
export const authenticateUser = async (userData) =>{
    const allUsers = await fireBaseAxios.get("/Users.json");
    const usersArray = Object.values(allUsers.data);
    let authenticated;
    usersArray.forEach((fetchedUser) => {
      if (
        fetchedUser.username === userData.username &&
        fetchedUser.password === userData.password
      ) {
        authenticated = true;
      }else{
        authenticated = false;
      }
    });
    return authenticated;
}


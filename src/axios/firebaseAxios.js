import Axios from "axios";

export const fireBaseAxios = Axios.create({
    baseURL:"https://vue-new-york-times-reader.firebaseio.com/"
})
export const authenticateUser = async (userData) =>{
    const allUsers = await fireBaseAxios.get("/Users.json");
    const usersArray = Object.values(allUsers.data);
    let authenticated = false;
    usersArray.forEach((fetchedUser) => {
      if (
        fetchedUser.username === userData.username &&
        fetchedUser.password === userData.password
      ) {
        authenticated = true;
      }
    });
    return authenticated;
}

export const SignUpUser =async (user)=>{
  fireBaseAxios.post("/Users.json",user)
}

export const checkNameAvailability = async (username)=>{
  const usersObj = await fireBaseAxios.get("/Users.json");
  const usersArr = Object.values(usersObj.data);
  let available = true;
  usersArr.forEach((user)=>{
    if(user.username===username){
      available=false;    
    }
  })
  return available;
}


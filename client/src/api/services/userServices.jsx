import axios from "axios";

async function getUsers() {
 
  const requestUrl: string = "";
}

async function login(data) {
  const requestUrl =
    "https://admin.tourdubaireservations.com/bookings/api/v1/login/";

  const response = await axios.post(requestUrl, data);
  return response;
  console.log(response);
}

export { getUsers, login };

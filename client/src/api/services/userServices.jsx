import axios from "axios";

async function getUsers() {
  // TODO: base url must come from env
  const requestUrl: string = "";
}

async function login(data) {
  const requestUrl ="https://fakestoreapi.com/auth/login";

  const response = await axios.post(requestUrl, data);
  return response;
  console.log(response);
}

export { getUsers, login };

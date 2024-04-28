const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const signUpApi = async (payload: {
  userName: string;
  email: string;
  password: string;
}) => {
  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    "http://localhost:3000/users/signUp",
    requestOptions
  );

  return response.json();
};

export const updateUserIdAndToken = async (payload: {
  userId: string;
  userFbId: string;
  accessToken: string;
}) => {
  const raw = JSON.stringify(payload);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch(
    "http://localhost:3000/users/add-id",
    requestOptions
  );

  return response.text();
};

export const getPages = async (payload: { userId: string }) => {
  console.log(payload);
  const raw = JSON.stringify(payload);

  const response = await fetch(
    "http://localhost:3000/pages?id=" + payload.userId
  );

  return response.json();
};

export const connectPage = async () => {
  const response = await fetch(
    "http://localhost:3000/conversations/connect-page"
  );

  return response.json();
};

export const getConversations = async (payload: { pageId: string }) => {
  console.log(payload);

  const response = await fetch(
    "http://localhost:3000/conversations?pageId=" + payload.pageId
  );

  return response.json();
};

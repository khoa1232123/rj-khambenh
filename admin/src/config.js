const accessToken = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user")).accessToken
  : "";

export const configAxios = {
  headers: {
    token: "bearer " + accessToken,
  },
};

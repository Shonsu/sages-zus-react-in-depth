// https://developer.spotify.com/documentation/web-api/tutorials/implicit-flow
const client_id = "793ec472d90147518aab693219128707";
const scope = "user-read-private user-read-email";

const url = "https://accounts.spotify.com/authorize";
const redirect_uri = "http://localhost:5173/callback";

let access_token: string | null = "";

export const login = () => {
  const params = new URLSearchParams({
    response_type: "token",
    client_id,
    scope,
    redirect_uri,
    state: "",
  });
  window.location.href = url + "?" + params;
};

export const getToken = () => {
  return access_token;
};

export const checkLogin = () => {
  access_token = new URLSearchParams(window.location.hash.slice(1)).get(
    "access_token"
  );
  if (access_token) {
    sessionStorage.setItem("access_token", access_token);
    window.location.hash = "";
  } else {
    access_token = sessionStorage.getItem("access_token");
  }
};

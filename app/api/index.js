const api = "https://reqres.in/api/users";

/**
 *  get users
 *
 */
export const getUsers = async () => {
  let res = await fetch(`${api}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  return await res.json();
};

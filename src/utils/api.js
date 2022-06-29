const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const headers = new Headers();
headers.append("Content-Type", "application/json");

async function fetchJson(url, options, onCancel) {
  try {
    const response = await fetch(url, options);
    if (response.status === 204) return null;
    const payload = await response.json();
    if (payload.error) return Promise.reject({ message: payload.error });
    
    return payload.data;
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error(error.stack);
      throw error;
    }
    return Promise.resolve(onCancel);
  }
}

export async function createGame(game, signal) {
  const url = `${REACT_APP_API_URL}/games`;
  const options = { method: "POST", headers, body: JSON.stringify({ data: game }), signal };
  return await fetchJson(url, options, {});
}

export async function listObjectsFromAPI(signal, router) {
  const url = `${REACT_APP_API_URL}/${router}`;
  const options = { method: "GET", headers, signal };
  return await fetchJson(url, options, {});
}

export async function readObjectFromAPI(id, signal, router) {
  const url = `${REACT_APP_API_URL}/${router}/${id}`;
  const options = { method: "GET", headers, signal };
  return await fetchJson(url, options, {});
}
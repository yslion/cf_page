export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    url.host = "api.fish.audio";
    // openai is already set all CORS heasders 
    return fetch(url, {
      headers: request.headers,
      method: request.method,
      body: request.body,
      redirect: 'follow'
    });
  }
}

const queryToString = (query) => {
  if(Object.keys(query).length <= 0) return '';
  return '?' + Object.keys(query).map(k => `${k}=${query[k]}`).join('&');
};

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

export class APIService{
  constructor(base_url="/api"){
    if(base_url[0] !== '/') return console.error('base_url should start with /');
    if(base_url[base_url.length - 1] === '/') return console.error('base_url should not end with /');

    this._base_url = base_url;
  }

  _fullAPIPath(endpoint){
    if(endpoint[0] !== '/') return console.error('endpoint should start with /');
    return this._base_url + endpoint;
  }

  async _fetch(method, endpoint, {query={}, body={}, headers={}}){
    body = JSON.stringify(body);
    headers = new Headers(Object.assign({}, DEFAULT_HEADERS, headers));

    const res = await fetch(this._fullAPIPath(endpoint) + queryToString(query), {
      headers,
      method,
      body
    });

    if(!res.ok) throw res.json();
    return res.json();
  }

  get(...args){
    return this._fetch('GET', ...args);
  }

  post(...args){
    return this._fetch('POST', ...args);
  }

  put(...args){
    return this._fetch('PUT', ...args);
  }

  delete(...args){
    return this._fetch('DELETE', ...args);
  }
}

export default new APIService();

const API_ENDPOINT = 'your-end-point';
type Params = { [key: string]: string | number };

class ApiClient {
  get = async <T>(path: string, params: Params = {}): Promise<T> => {
    const url = this.createUrl(path, params);
    console.log(`url: ${url}`);
    const response = await fetch(url);
    if (response.ok) {
      return (await response.json()) as T;
    } else {
      const status = response.status;
      const body = await response.text();
      throw new Error(`status: ${status}, body: ${body}`);
    }
  };

  post = async <T>(path: string, body: string): Promise<T> => {
    const url = this.createUrl(path);
    const request: RequestInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    };
    const response = await fetch(url, request);
    if (response.ok) {
      return (await response.json()) as T;
    } else {
      const status = response.status;
      const body = await response.text();
      throw new Error(`status: ${status}, body: ${body}`);
    }
  };

  private createUrl(path: string, params: Params = {}): string {
    let url: string;
    if (Object.keys(params).length !== 0) {
      const encoded_params = this.encoded_params(params);
      url = `${API_ENDPOINT}/${path}?${encoded_params.join('&')}`;
    } else {
      url = `${API_ENDPOINT}/${path}`;
    }
    return url;
  }

  private encoded_params(params: Params): string[] {
    return Object.keys(params).map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(String(params[key]))}`,
    );
  }
}
export default new ApiClient();

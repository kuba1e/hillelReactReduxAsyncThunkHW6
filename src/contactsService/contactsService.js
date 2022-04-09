export default class ContactsService {
  _baseUrl = "https://contacts12.herokuapp.com/users";

  getOptions = (method, data) => {
    const dataSettings = data
      ? {
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      : {};
    return {
      method,
      ...dataSettings,
    };
  };

  requestData = async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  fetchContacts = async () => {
    try {
      const { data } = await this.requestData(this._baseUrl);
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  sendContact = async (data) => {
    try {
      await this.requestData(this._baseUrl, this.getOptions("POST", data));
    } catch (error) {
      throw new Error(error.message);
    }
  };

  updateContact = async (data) => {
    try {
      const { id } = data;
      delete data.id;
      await this.requestData(
        this._baseUrl + `/${id}`,
        this.getOptions("PUT", data)
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };

  deleteContact = async (id) => {
    try {
      await this.requestData(
        this._baseUrl + `/${id}`,
        this.getOptions("DELETE")
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

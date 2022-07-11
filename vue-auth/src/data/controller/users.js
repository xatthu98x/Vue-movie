export default {
  async getAllProducts(axios) {
    const response = await axios.get("http://localhost:8000/api/getAll");
    return response.data;
  },
};

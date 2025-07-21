import axios from "axios";

export default class PostService {
  static async getAll(signal) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        { signal }
      );
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.warn("Запит скасовано:", error.message);
      } else {
        console.error("Помилка отримання постів:", error);
      }
      throw error;
    }
  }
}

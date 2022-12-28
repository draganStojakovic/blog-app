import ApiService from "./ApiService";

class PostService extends ApiService {
  async getAll() {
    return await this.client.get("/posts");
  }
  async get(id) {
    return await this.client.get(`/posts/${id}`);
  }
}

export const postService = new PostService();

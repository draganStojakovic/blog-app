import ApiService from "./ApiService";

class PostService extends ApiService {
  async getAll() {
    return await this.client.get("/posts");
  }
}

export const postService = new PostService();

import ApiService from "./ApiService";

class PostService extends ApiService {
  async getAll() {
    return await this.client.get("/posts");
  }
  async get(id) {
    return await this.client.get(`/posts/${id}`);
  }
  async add(post) {
    await this.client.post("/posts", post);
  }
  async edit(id, post) {
    await this.client.put(`/posts/${id}`, post);
  }
}

export const postService = new PostService();

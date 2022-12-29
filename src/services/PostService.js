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
  async delete(id) {
    await this.client.delete(`/posts/${id}`);
  }
}

export const postService = new PostService();

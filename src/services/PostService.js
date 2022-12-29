import ApiService from "./ApiService";

class PostService extends ApiService {
  async getAll() {

    return await this.client.get(`/posts?filter={"include":["comments"]}`);
  }
  async get(id) {
    return await this.client.get(`/posts/${id}?filter={"include":["comments"]}`);
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
  async addComment(comment, postId) {
    return await this.client.post(`/posts/${postId}/comments`, comment);
  }
}

export const postService = new PostService();

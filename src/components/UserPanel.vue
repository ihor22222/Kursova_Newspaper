<template xmlns:th="http://www.w3.org/1999/xhtml">
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
  </head>

  <div>



    <h1>Панель керування</h1>
    <div class="row p-5 pb-5 pe-lg-5 pt-lg-4 align-items-end rounded-3 border shadow-lg">
      <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>

      <button class="create-button" @click="editPost(post)">Редагувати</button>
      <button class="create-button" @click="deletePost(post.id)">Видалити</button>

    </div>
        </div>
    </div>

    <div class="row p-5 pb-5 pe-lg-5 pt-lg-4 align-items-end rounded-3 border shadow-lg">
      <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
    <div v-if="editedPost.id !== null">
      <h2>Редагувати пост</h2>
      <input v-model="editedPost.title" placeholder="Новий заголовок">
      <textarea v-model="editedPost.content" placeholder="Новий контент"></textarea>
      <button class="create-button" @click="savePost">Зберегти</button>
    </div>
      </div>
    </div>

    <div>
      <h2>Створити новий пост</h2>
      <div class="row p-5 pb-5 pe-lg-5 pt-lg-4 align-items-end rounded-3 border shadow-lg">
        <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
          <button class="toggle-button" @click="toggleCode">{{ showCode ? 'Сховати код' : 'Написати пост' }}</button>
          <div v-if="showCode">
            <input class="post-input" v-model="newPost.title" placeholder="Заголовок">
            <textarea class="post-input" v-model="newPost.content" placeholder="Контент"></textarea>
            <button class="create-button" @click="createPost">Створити</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #8e44ad;
  box-shadow: 0 0 5px #8e44ad;
}
.post-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.post-input:focus {
  outline: none;
  border-color: #8e44ad;
  box-shadow: 0 0 5px #8e44ad;
}
.toggle-button {
  padding: 10px 20px;
  background-color: #8e44ad;
  color: #fff;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.toggle-button:hover {
  background-color: #6c3483;
}

.post-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.post-input:focus {
  outline: none;
  border-color: #8e44ad;
  box-shadow: 0 0 5px #8e44ad;
}

.create-button {
  padding: 10px 20px;
  background-color: #8e44ad;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 10px;
}

.create-button:hover {
  background-color: #6c3483;
}

</style>


<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      posts: [],
      loading: true,
      error: null,
      editedPost: {
        id: null,
        title: "",
        content: ""
      },
      showCode: false,
      newPost: {

        title: "",
        content: ""
      }
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
          .get("http://localhost:3001/posts")
          .then((response) => {
            this.posts = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.error("Error:", error);
            this.error = "Failed to fetch posts";
            this.loading = false;
          });
    },
    toggleCode() {
      this.showCode = !this.showCode;
    },
    editPost(post) {
      this.editedPost.id = post.id;
      this.editedPost.title = post.title;
      this.editedPost.content = post.content;
    },
    savePost() {
      const updatedData = {
        title: this.editedPost.title,
        content: this.editedPost.content
      };


      axios
          .put(`http://localhost:3001/updatePosts/${this.editedPost.id}`, updatedData)
          .then((response) => {
            console.log("Post edited successfully:", response.data);
            this.clearEditedPost();
            this.fetchPosts();
          })
          .catch((error) => {
            console.error("Error editing post:", error);
          });
    },
    deletePost(postId) {
      axios
          .delete(`http://localhost:3001/deletePosts`, { data: { id: postId } })
          .then((response) => {
            console.log("Post deleted successfully:", response.data);
            this.fetchPosts();
          })
          .catch((error) => {
            console.error("Error deleting post:", error);
          });
    },
    clearEditedPost() {
      this.editedPost.id = null;
      this.editedPost.title = "";
      this.editedPost.content = "";
    },
    createPost() {
      const postData = {
        title: this.newPost.title,
        content: this.newPost.content
      };

      axios
          .post(`http://localhost:3001/createPost`, postData)
          .then((response) => {
            console.log("Post created successfully:", response.data);
            this.newPost.title = "";
            this.newPost.content = "";
            this.fetchPosts();
          })
          .catch((error) => {
            console.error("Error creating post:", error);
          });
    }
  }
};
</script>

<template>
  <meta name="theme-color" content="#712cf9">
  <!-- Favicons -->
  <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

  <link rel="apple-touch-icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/apple-touch-icon.png"
        sizes="180x180">
  <link rel="manifest" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/manifest.json">
  <link rel="mask-icon" href="https://getbootstrap.com/docs/5.2/assets/img/favicons/safari-pinned-tab.svg"
        color="#712cf9">


  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <h1>Новини</h1>

    <ul class="mt-5">
      <div class="row p-3 pb-4 pe-lg-5 pt-lg-5 align-items-end rounded-3 border shadow-lg">
        <div class="cover-container d-flex w-100 h-100 mx-auto flex-column">
          <div v-for="post in posts" :key="post.id">
            <h2>{{ post.title }}</h2>
            <p>{{ post.content }}</p>
          </div>
        </div>
      </div>
    </ul>

  </div>

</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      posts: [],
      loading: true,
      error: null
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios
          .get("http://localhost:3001/posts")
          .then(response => {
            this.posts = response.data;
            this.loading = false;
          })
          .catch(error => {
            console.error("Error:", error);
            this.error = "Failed to fetch posts";
            this.loading = false;
          });
    },
    editPost(postId, updatedPost) {

      axios
          .put(`http://localhost:3001/updatePosts`, { id: postId, title: updatedPost.title,content: updatedPost.content })
          .then(response => {
            // Обробка успішного редагування посту
            console.log("Post edited successfully:", response.data);
          })
          .catch(error => {
            console.error("Error editing post:", error);
            // Обробка помилки при редагуванні посту
          });
    },
    deletePost(postId) {
      axios
          .delete(`http://localhost:3001/deletePosts`, { data: { id: postId } })
          .then(response => {
            // Обработка успешного удаления поста
            console.log("Post deleted successfully:", response.data);
            this.fetchPosts(); // Обновление списка постов после удаления
          })
          .catch(error => {
            console.error("Error deleting post:", error);
            // Обработка ошибки при удалении поста
          });
    }

  }
};
</script>
<style>
.mt-5 {
  margin-top: 5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
}
li:first-child {
  margin-top: 0;
}
</style>
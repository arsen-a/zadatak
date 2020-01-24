<template>
  <div class="container">
    <div class="mt-3">
      <h1>All Posts</h1>
    </div>
    <div class="d-flex align-items-center justify-content-center">
      <input
        style="width: 200px;"
        v-model="searchTerm"
        class="form-control"
        type="text"
        placeholder="Search posts..."
        @keyup="searchPosts"
      />
    </div>
    <ul v-if="searchTerm.length > 0" class="list-group mt-5">
      <li
        class="list-group-item d-flex flex-column"
        v-for="post in filteredPosts"
        :key="post.id"
      >
        <div
          class="d-flex flex-row align-items-center mt-2 justify-content-between"
        >
          <div class="d-flex flex-row align-items-center">
            <img :src="post.image" alt="Post image" />
            <h3 class="m-0 p-0">{{ post.title }}</h3>
          </div>
          <button
            class="btn btn-danger"
            type="button"
            @click="removePost(post.id)"
          >
            Remove post
          </button>
        </div>
        <div class="mt-4">
          {{ post.body }}
        </div>
      </li>
    </ul>
    <ul v-else class="list-group mt-5">
      <li
        class="list-group-item d-flex flex-column"
        v-for="post in allPosts"
        :key="post.id"
      >
        <div
          class="d-flex flex-row align-items-center mt-2 justify-content-between"
        >
          <div class="d-flex flex-row align-items-center">
            <img :src="post.image" alt="Post image" />
            <h3 class="m-0 p-0">{{ post.title }}</h3>
          </div>
          <button
            class="btn btn-danger"
            type="button"
            @click="removePost(post.id)"
          >
            Remove post
          </button>
        </div>
        <div class="mt-4">
          {{ post.body }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "posts",
  computed: {
    ...mapGetters({
      allPosts: "allPosts"
    })
  },
  methods: {
    ...mapActions({
      deletePost: "deletePost"
    }),
    removePost(id) {
      if (confirm("Delete this post?")) {
        this.deletePost(id);
      }
    },
    searchPosts() {
      let filteredTitle = this.allPosts.filter(post =>
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      let filteredBody = this.allPosts.filter(post =>
        post.body.toLowerCase().includes(this.searchTerm.toLowerCase())
      );

      let filtered = [...new Set([...filteredTitle, ...filteredBody])];
      this.filteredPosts = filtered;
    }
  },
  data() {
    return {
      searchTerm: "",
      filteredPosts: []
    };
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

<template>
  <div class="container">
    <div class="mt-3">
      <h1>All Posts</h1>
    </div>
    <ul class="list-group mt-5">
      <li
        class="list-group-item d-flex flex-column"
        v-for="post in allPosts"
        :key="post.id"
      >
        <div class="d-flex flex-row align-items-center mt-2">
          <img :src="post.image" alt="Post image" />
          <h3 class="m-0 p-0">{{ post.title }}</h3>
        </div>
        <div class="mt-4">
          {{ post.body }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "posts",
  computed: {
    ...mapGetters({
      allPosts: "allPosts"
    })
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>

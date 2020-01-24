<template>
  <div class="container">
    <form @submit.prevent="submitPost()" class="mt-5">
      <h1 class="pb-3">Add a new post</h1>
      <div class="form-group">
        <label>Title</label>
        <input v-model="newPost.title" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Image</label>
        <input v-model="newPost.image" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Body</label>
        <textarea
          v-model="newPost.body"
          class="form-control"
          name="body"
          cols="50"
          rows="5"
        ></textarea>
      </div>
      <button class="btn btn-success" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "new-post",
  data() {
    return {
      newPost: {
        title: "",
        body: "",
        image: ""
      }
    };
  },
  methods: {
    ...mapActions({
        addPost: 'addPost'
    }),
    submitPost() {
        this.addPost(this.newPost)
        this.$router.push({ name: 'all-posts' })
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>

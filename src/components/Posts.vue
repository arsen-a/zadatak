<template>
  <div class="container">
    <ul>
      <li v-for="post in allPosts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters }  from 'vuex'

export default {
  name: 'posts',
  computed: {
    ...mapGetters({
      allPosts: 'allPosts'
    })
  }
}
</script>

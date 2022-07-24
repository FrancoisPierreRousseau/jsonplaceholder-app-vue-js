<template>
  <h1 class="text-center mt-4">Page d'administration</h1>
  <div class="container">
    <div class="navbar mb-3">
      <div class="navbar-inner">
        <ul class="nav">
          <li>
            <button
              class="btn btn-link"
              @click="() => toggleShow('posts')">Posts</button></li>
          <li>
            <button
            class="btn btn-link"
            @click="() => toggleShow('comments')">Comments</button></li>
        </ul>
      </div>
    </div>
    <PostAdmin v-if="show.posts" />
    <CommentAdmin v-if="show.comments" />
  </div>
</template>

<script>
import PostAdmin from '@/components/posts/PostAdmin.vue';
import CommentAdmin from '@/components/comments/CommentAdmin.vue';
import _ from 'lodash';

export default {
  name: 'AdminView',
  components: {
    PostAdmin,
    CommentAdmin,
  },
  data() {
    return {
      show: {
        posts: true,
        comments: false,
      },
    };
  },
  methods: {
    toggleShow(keyShow) {
      this.show = _.mapValues(this.show, (value) => value === this.show[keyShow]);
    },
  },
};
</script>

<style scoped>

</style>

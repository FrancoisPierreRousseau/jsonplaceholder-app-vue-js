<template>
  <div
      v-if="this.post && this.pictures"
      :style="{
         backgroundImage: `url(${this.url})`,
         height: '85vh',
         position: 'relative'
      }">
    <div class="d-flex justify-content-center overlay">
      <div class="align-self-center text-center" style="max-width: 75%">
        <h1 class="mt-4 display-1" style=" font-weight: 400">
          {{ this.post.title }}
        </h1>
        <p>{{post.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'PostShow',
  data() {
    return {
      post: null,
      url: null,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState('posts', ['posts']),
    ...mapState('thematic', ['pictures']),
    ...mapGetters('posts', ['findPostById']),
  },
  methods: {
    ...mapActions('posts', ['fetchPost']),
    ...mapActions('thematic', ['fetchPictures']),
  },
  async mounted() {
    await this.fetchPost(this.id);
    this.post = this.findPostById(this.id);
    await this.fetchPictures();
    this.url = this.pictures[Math.floor(Math.random() * this.pictures.length)].urls.regular;
  },
};
</script>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>

<template>
  <div
    v-if="!this.postsIsEmpty && this.pictures">
    <div class="mb-4" :style="{
         backgroundImage: `url(${this.url})`,
         height: '85vh',
         position: 'relative'
      }">
      <div class="d-flex justify-content-center overlay">
        <div class="align-self-center text-center" style="max-width: 75%">
          <h1 class="mt-4 display-1" style=" font-weight: 400">
            {{ this.posts[this.id].title }}
          </h1>

          <slot name="userDetail"
                v-if="!this.usersIsEmpty"
                :user="this.users[this.posts[this.id].userId]"></slot>

        </div>
      </div>
    </div>
    <div class="container mb-4">
      {{ this.posts[this.id].title }}
    </div>

    <slot name="comments" :id="this.id"></slot>

  </div>
  <div style="height: 100vh" class="container d-flex justify-content-center" v-else>
    <p class="align-self-center h3">
      Le post demandé n'existe pas
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'PostShow',
  data() {
    return {
      url: null,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    populateUser: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('thematic', ['pictures']),
    ...mapState('posts', ['posts']),
    ...mapState('users', ['users']),
    ...mapGetters('posts', ['postsIsEmpty']),
    ...mapGetters('users', ['usersIsEmpty']),
  },
  methods: {
    ...mapActions('posts', ['fetchPost']),
    ...mapActions('users', ['fetchUser']),
    ...mapActions('thematic', ['fetchPictures']),
  },
  async mounted() {
    await this.fetchPictures();
    this.url = this.pictures[Math.floor(Math.random() * this.pictures.length)].urls.regular;
    await this.fetchPost(this.id);
    if (this.populateUser) {
      await this.fetchUser(this.posts[this.id].userId);
    }
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

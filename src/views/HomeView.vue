<template>
  <div class="container">
    <SearchBar
      :on-submit="onSearchSubmit"
    />
    <PostList/>
  </div>
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import SearchBar from '@/components/SearchBar.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    PostList,
    SearchBar,
  },
  computed: {
    ...mapState('thematic', ['pictures']),
  },
  methods: {
    ...mapActions('thematic', ['fetchPictures', 'setTerm']),
    async onSearchSubmit(term) {
      this.setTerm(term);
      await this.fetchPictures();
    },
  },
};
</script>

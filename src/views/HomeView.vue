<template>
  <SearchBar
    :on-submit="onSearchSubmit"
  />
  <PostList
    v-if="images"
    :images="images"
  />
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import SearchBar from '@/components/SearchBar.vue';
import unsplash from '@/apis/unsplash';

export default {
  name: 'HomeView',
  data() {
    return {
      images: null,
    };
  },
  components: {
    PostList,
    SearchBar,
  },
  methods: {
    async onSearchSubmit(term) {
      const response = await unsplash.get('/search/photos', {
        params: { query: term },
      });
      this.images = response.data.results;
    },
  },
  async mounted() {
    await this.onSearchSubmit('programming');
  },
};
</script>

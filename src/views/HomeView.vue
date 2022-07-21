<template>
  <SearchBar />
  <PostList />
</template>

<script>
import PostList from '@/components/posts/PostList.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'HomeView',
  components: {
    PostList,
    SearchBar,
  },
};
</script>

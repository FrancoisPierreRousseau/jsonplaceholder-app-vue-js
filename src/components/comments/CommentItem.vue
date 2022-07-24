<template>
  <div v-if="!this.showEdit" class="be-comment">
    <div class="be-img-comment">
      <a href="blog-detail-2.html">
        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="eeee"
             class="be-ava-comment">
      </a>
    </div>
    <div class="be-comment-content">
          <span class="be-comment-name">
            <a href="blog-detail-2.html">{{ comment.name }}</a>
          </span>
      <p> {{ comment.body }} </p>
    </div>
  </div>
  <CommentEdit v-else :id="comment.id"/>
  <button
    v-if="auth.isSigned && !showEdit && comment.userId === auth.userId"
    class="btn btn-primary mb-4 mt-3"
    @click="toggleShow"
  >Éditer
  </button>
  <button
    v-else-if="auth.isSigned && showEdit && comment.userId === auth.userId"
    class="btn btn-danger mb-4 mt-3"
    @click="toggleShow"
  >Annuler
  </button>
</template>

<script>
import { mapState } from 'vuex';
import CommentEdit from '@/components/comments/CommentEdit.vue';

export default {
  data() {
    return {
      showEdit: false,
    };
  },
  name: 'CommentItem',
  components: {
    CommentEdit,
  },
  props: {
    comment: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState('auth', ['auth']),
  },
  methods: {
    toggleShow() {
      this.showEdit = !this.showEdit;
    },
  },
};
</script>

<style scoped>

.be-img-comment {
  width: 60px;
  height: 60px;
  float: left;
  margin-bottom: 15px;
}

.be-ava-comment {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.be-comment-content {
  margin-left: 80px;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-name {
  font-size: 13px;
}

.be-comment-content a {
  color: #383b43;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

</style>

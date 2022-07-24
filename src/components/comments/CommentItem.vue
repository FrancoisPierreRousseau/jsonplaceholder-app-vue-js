<template>
  <div class="be-comment">
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
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    comment: {
      type: Object,
      required: true,
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

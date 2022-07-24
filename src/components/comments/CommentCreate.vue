<template>
  <form class="form-block">
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div class="form-group fl_icon">
          <label for="name" id="name">Nom:</label>
          <input class="form-input" type="text" placeholder="Your name">
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 fl_icon">
        <div class="form-group fl_icon">
          <label for="email" id="email">Email</label>
          <input class="form-input" type="text" placeholder="Your email">
        </div>
      </div>
      <div class="col-xs-12">
        <div class="form-group">
          <label id="message" for="message">Message</label>
          <textarea class="form-input" required="" placeholder="Your text"></textarea>
        </div>
      </div>
      <a class="btn btn-primary">submit</a>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'CommentCreate',
  props: {
    postId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions('comments', ['createComment']),

    async onSubmit(formValues) {
      await this.createComment({ ...formValues, postId: this.postId });
    },
  },
};
</script>

<style scoped>
.form-group .form-input {
  font-size: 13px;
  line-height: 50px;
  font-weight: 400;
  color: #b4b7c1;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #edeff2;
  border-radius: 3px;
}

.form-group.fl_icon .form-input {
  padding-left: 70px;
}

.form-group textarea.form-input {
  height: 150px;
}
</style>

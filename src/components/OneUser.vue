<template>
  <div class="entry">
    <div class="col s12 m7">
      <div class="card horizontal">
        <div class="card-image"></div>
        <div class="card-stacked">
          <div class="card-content">
            <p>First name: {{ user.name.first }}</p>
            <p>Second name: {{ user.name.last }}</p>
            <p>Age: {{ user.dob.age }}</p>
          </div>

          <button @click="handleClick" class="btn openModal">Open csrd</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../style.css';
export default {
  methods: {
    handleClick() {
      this.$emit('cardId', this.user.login.md5);
      this.$emit('open');
    },
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
    isOpenModal: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.entry {
  width: 60%;
}

.card-content {
  display: flex;
  justify-content: space-around;
}

.btn {
  width: 100px;
}
</style>

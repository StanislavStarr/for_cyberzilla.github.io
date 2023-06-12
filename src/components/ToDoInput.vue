<template>
  <form @submit.prevent="handleAddTask" class="input">
    <input
      v-model="textTask"
      placeholder="Text task"
      ref="autofocus"
      type="text"
    />
    <button type="submit" class="waves-effect waves-light btn">Add</button>
  </form>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  emits: {
    onAddTask({ textTask }) {
      if (textTask === '') {
        return false;
      }
      return true;
    },
  },
  setup(props, { emit }) {
    const textTask = ref('');
    const autofocus = ref(null);
    const handleAddTask = () => {
      emit('onAddTask', { textTask: textTask.value });
      textTask.value = '';
    };
    onMounted(() => {
      autofocus.value.focus();
    });
    return {
      textTask,
      handleAddTask,
      autofocus,
    };
  },
};
</script>
<style>
.input {
  display: flex;
}
</style>

<template>
  <div>
    <li class="collection-item task-content">
      <div>{{ oneCard.textTask }}</div>
      <div>
        <button @click="emitHandleDone" v-if="!oneCard.status" class="btn">
          ✅
        </button>
        <button @click="emitHandleDelete" v-else class="btn">❌</button>
      </div>
    </li>
  </div>
</template>
<script>
export default {
  emits: ['handleDone', 'handleDelete'],
  setup(props, { emit }) {
    const emitHandleDone = () => {
      emit('handleDone');
    };
    const emitHandleDelete = () => {
      emit('handleDelete');
    };
    return {
      emitHandleDone,
      emitHandleDelete,
    };
  },
  props: {
    oneCard: {
      required: true,
      default: {
        id: 1,
        textTask: 'Default Task',
        status: false,
      },
    },
  },
};
</script>
<style>
.task-content {
  display: flex;
  justify-content: space-between;
}
</style>

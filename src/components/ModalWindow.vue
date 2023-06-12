<template>
  <div v-if="isOpenModal" @click="$emit('close')" class="my-modal">
    <div @click.stop class="modal-content">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">User card</span>
          <div class="content-data">
            <span>First name: {{ user.name.first }}</span>
            <span>Second name: {{ user.name.last }}</span>
            <span>Age: {{ user.dob.age }}</span>
            <span>Gender: {{ user.gender }}</span>
            <span>Email: {{ user.email }}</span>
          </div>
        </div>
      </div>

      <div>
        <ToDoInput @onAddTask="addTask" />
        <ul class="collection with-header">
          <li class="collection-header"><h6>Tasks</h6></li>
          <div v-for="task in taskList" :key="task.id">
            <ToDoCard
              :oneCard="task"
              @handleDone="setDoneTask(task.id)"
              @handleDelete="deleteTask(task.id)"
            />
          </div>
        </ul>
      </div>

      <button
        @click="$emit('close')"
        class="waves-effect waves-light btn closeModal btn-modal"
      >
        Close
      </button>
    </div>
  </div>
</template>
<script>
import ToDoInput from './ToDoInput.vue';
import ToDoCard from './ToDoCard.vue';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
export default {
  components: {
    ToDoInput,
    ToDoCard,
  },
  setup() {
    const taskList = ref([{ id: 1, textTask: 'Default Task', status: false }]);
    const addTask = ({ textTask }) => {
      taskList.value = [
        ...taskList.value,
        {
          id: uuidv4(),
          textTask,
          status: false,
        },
      ];
    };
    const setDoneTask = (id) => {
      taskList.value = taskList.value.map((el) => {
        if (el.id === id) {
          el.status = true;
        }
        return el;
      });
    };
    const deleteTask = (id) => {
      taskList.value = taskList.value.filter((el) => el.id !== id);
    };
    return {
      taskList,
      addTask,
      setDoneTask,
      deleteTask,
    };
  },
  props: {
    isOpenModal: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

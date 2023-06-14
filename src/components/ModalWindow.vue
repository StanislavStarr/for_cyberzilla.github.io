<template>
  <div v-if="isOpenModal" @click="$emit('close')" class="my-modal">
    <div @click.stop class="modal-content">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">User card</span>
          <div class="content-data">
            <table>
              <thead>
                <tr>
                  <th>First name:</th>
                  <th>Second name:</th>
                  <th>Age:</th>
                  <th>Location:</th>
                  <th>Email:</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      class="input-default"
                      type="text"
                      v-model="user_name"
                    />
                  </td>
                  <td>
                    <input
                      class="input-default"
                      type="text"
                      v-model="user_name_last"
                    />
                  </td>
                  <td>
                    <input
                      class="input-default"
                      type="number"
                      v-model="user_age"
                    />
                  </td>
                  <td>
                    <input
                      class="input-default"
                      type="text"
                      v-model="user_country"
                    />
                  </td>
                  <td>
                    <input
                      class="input-default-email"
                      type="text"
                      v-model="user_email"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            @click="updateUserData"
            class="waves-effect waves-light btn btn-save"
          >
            Save
          </button>
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
  data() {
    return {
      user_name: this.user.name.first,
      user_name_last: this.user.name.last,
      user_age: this.user.dob.age,
      user_country: this.user.location.country,
      user_email: this.user.email,
    };
  },
  watch: {
    user: {
      immediate: true,
      handler(newUser) {
        this.user_name = newUser.name.first;
        this.user_email = newUser.email;
      },
    },
  },
  methods: {
    updateUserData() {
      const updatedUser = {
        ...this.user,
        name: {
          first: this.user_name,
          last: this.user_name_last,
        },
        dob: {
          age: this.user_age,
        },
        location: {
          country: this.user_country,
        },
        email: this.user_email,
      };
      this.$emit('save', updatedUser);
    },
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

<style>
.input-default {
  width: 90px !important;
}

.input-default-email {
  width: 200px !important;
}

.btn-save {
  width: 100%;
}
</style>

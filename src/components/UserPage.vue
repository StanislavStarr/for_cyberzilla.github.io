<template lang="Users">
    
    <h2 class="header">Users list</h2>
    <div class="card-container">
        <OneUser 
        v-for="user in users" 
        :key="user.login.md5"
        :user="user" 
        :isOpenModal="isOpenModal" 
        @cardId="userId"
        @open="isOpenModal = true"/>
    </div>
    <div v-for="user in users" :key="user.login.md5">
        <ModalWindow 
        :isOpenModal="isOpenModal" 
        @close="isOpenModal = false"
        :user="user"
        v-if="user && user.login.md5 === personId"
        />
    </div>


</template>

<script>
import OneUser from '@/components/OneUser.vue';
import ModalWindow from './ModalWindow.vue';
import axios from 'axios';
export default {
  components: {
    OneUser,
    ModalWindow,
  },
  methods: {
    userId(data) {
      this.personId = data;
    },
  },
  data() {
    return {
      users: null,
      isOpenModal: false,
    };
  },
  mounted() {
    axios
      .get('https://randomuser.me/api/?results=10')
      .then((res) => (this.users = res.data.results))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped>
.card-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

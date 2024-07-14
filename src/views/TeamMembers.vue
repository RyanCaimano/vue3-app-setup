<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Development Team</h1>
        <v-list>
          <v-list-item v-for="(member, index) in devTeamMembers" :key="index">
            {{ member.name }}
          </v-list-item>
        </v-list>
        <v-form @submit.prevent="addMember">
          <v-text-field
            v-model="newMemberName"
            label="New Member Name"
            required
          ></v-text-field>
          <v-btn type="submit">Add New Team Member</v-btn>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const newMemberName = ref('');

    const devTeamMembers = computed(() => store.getters.devTeamMembers);

    const addMember = () => {
      if (newMemberName.value) {
        store.dispatch('addTeamMember', { name: newMemberName.value });
        newMemberName.value = '';
      }
    };

    return {
      newMemberName,
      devTeamMembers,
      addMember,
    };
  },
};
</script>

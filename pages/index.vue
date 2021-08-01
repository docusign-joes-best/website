<template>
  <div>
    <Navbar sessionId="sessionId" />
    <div v-if="!sessionId">
      Temp Homepage
    </div>
    <div v-else>
      <camera-info></camera-info>
      <div class="py-4 px-20">
        <div class="flex">
          <div>
            <h2 class="text-2xl font-bold">
              Modifications
            </h2>
            <p class="text-gray-700 text-sm">
              Currently active modifications to the chimpanzee habitat ranges. 
            </p>
          </div>
          <button class="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-200 ease-in-out ml-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Propose</span>
          </button>
        </div>

        <ModificationCard
          name="Chimpanzee Habitat Modification #1"
          author="Joe M."
          :collaborators="['John K.', 'Jake L.']"
          stage="modification"
          color="red"
        />

        <ModificationCard
          name="Chimpanzee Habitat Modification #2"
          author="Joe M."
          :collaborators="['John K.', 'Jake L.']"
          stage="modification"
          color="gray"
        />

        <ModificationCard
          name="Chimpanzee Habitat Modification #3"
          author="Joe M."
          :collaborators="['John K.', 'Jake L.']"
          stage="modification"
          color="blue"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ModificationCard from '../components/ModificationCard.vue'
export default Vue.extend({
  data() {
    return {
      sessionId: null
    }
  },
  components: {
    ModificationCard
  },
  mounted() {
    this.sessionId = localStorage.getItem('sessionId')
  }
})
</script>

<style>
  body {
    font-family: 'Public Sans';
  }
</style>

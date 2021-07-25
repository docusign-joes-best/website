<template>
  <div>
    <Navbar />
    <camera-info></camera-info>
    <div class="p-4">
      <h2 class="text-xl font-bold">
        Modifications
      </h2>
      <p class="text-gray-700 text-sm">
        Currently active modifications to the chimpanzee habitat ranges. 
      </p>

      <br />

      <ModificationCard
        name="Chimpanzee Habitat Modification #1"
        author="Joe M."
        :collaborators="['John K.', 'Jake L.']"
        stage="modification"
      />
      
      <br />

      <ModificationCard
        name="Chimpanzee Habitat Modification #1"
        author="Joe M."
        :collaborators="['John K.', 'Jake L.']"
        stage="modification"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ModificationCard from '../components/ModificationCard.vue'
export default Vue.extend({
  components: {
    ModificationCard
  }
})
</script>

<style>
  body {
    font-family: 'Public Sans';
  }
</style>

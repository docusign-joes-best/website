<template>
  <div class="border border-gray-200 rounded shadow-lg transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer my-4">
    <div class="flex p-6">
      <div class="inline-block h-10 w-10 rounded-full mr-4 shadow-md" :class="`bg-${color}-300`" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div class="mr-5">
        <h3 class="font-bold">
          {{ name }}
        </h3>
        <p class="text-gray-700 text-sm">
          Proposed by: <span class="text-black">{{ author }}</span>
        </p>
      </div>
      <div>
        <p class="text-gray-700 text-sm">
          <span v-for="collaborator in collaborators.slice(0, 2)" :key="collaborator">
            {{ collaborator }},
          </span>
          and {{ collaborators.length - 2 }} other collaborators
        </p>
        <p class="text-gray-700 text-sm">
          In {{ stage }} stage
        </p>
      </div>
      <div class="flex justify-self-end self-center ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    stage: {
      type: String,
      required: true
    },
    collaborators: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
      required: true
    }
  },
  setup() {
    
  },
})
</script>


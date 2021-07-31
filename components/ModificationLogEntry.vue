<template>
  <div class="flex pb-6">
    <svg v-if="approved" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="#77dd77">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
    </svg>
    &nbsp;
    <div>
      <div class="pb-2">
        <span class="font-bold">
          {{ logger }}
        </span>
        <span>
          requested a change on {{ date }}
        </span>
      </div>
      <div class="text-sm text-gray-700">
        {{ comment }}
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    approved: {
      type: Boolean,
      required: true
    },
    logger: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    comment: {
      type: String,
      required: true
    }
  }
})
</script>

<style>

</style>
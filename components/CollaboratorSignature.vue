<template>
  <div class="flex pb-5">
    <svg v-if="approved" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#77dd77">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
    </svg>
    &nbsp;
    <div>
      <span class="font-bold">
        {{ signee }}
      </span>
      <div class="text-sm">
        <span v-if="approved">
          Approved changes
        </span>
        <span v-else>
          Awaiting signature
        </span>
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
    signee: {
      type: String,
      required: true
    }
  }
})
</script>

<style>

</style>
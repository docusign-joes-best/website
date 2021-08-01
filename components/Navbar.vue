<template>
  <div>
    <nuxt-link to="/">
      <h1 class="p-4 text-xl font-bold float-left">
        JGI Mapping Tool
      </h1>
    </nuxt-link>
    <div v-if="!sessionId" class="flex-initial float-right m-3">
      <nuxt-link to="/">
        <button class="border border-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-200 ease-in-out ml-auto">
          Sign in
        </button>
      </nuxt-link>
      <nuxt-link to="/">
        <button class="border border-green-300 bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-200 ease-in-out ml-auto">
          Sign up
        </button>
      </nuxt-link>
    </div>
    <div v-else class="flex-initial float-right m-3">
      <nuxt-link to="/">
        <button v-on:click="removeSessionId()" class="bg-green-300 hover:bg-green-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transition duration-200 ease-in-out ml-auto">
          Sign out
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    sessionId: {
      type: String,
      required: true
    }
  },
  methods: {
    removeSessionId() {
      localStorage.setItem('sessionId', null)
    }
  }
})
</script>

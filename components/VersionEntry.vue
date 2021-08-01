<template>
  <tbody class="text-sm font-normal">
    <tr class="hover:bg-gray-100 border-b border-gray-200 py-10" @click="toggle(changeId, log)">
      <td class="px-4 py-4">{{ changeId }}</td>
      <td class="px-4 py-4">{{ date }}</td>
      <td class="px-4 py-4">{{ proposer }}</td>
      <td class="px-4 py-4">{{ changes }}</td>
    </tr>
    <tr v-if="log.length > 0" :id="changeId" class="hover:bg-gray-100 border-b border-gray-200 py-10 collapsible">
      <td class="px-5 py-5" colspan="4">
        <h4 class="font-bold">
          {{ changeId }} Log 
        </h4>
        <br />
        <modification-log-entry
          v-for="(entry, idx) in log"
          v-bind:key="idx"
          :approved="entry.approved"
          :logger="entry.logger"
          :date="entry.date"
          :comment="entry.comment"
        />
      </td>
    </tr>
  </tbody>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    changeId: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    proposer: {
      type: String,
      required: true
    },
    changes: {
      type: String,
      required: true
    },
    log: {
      type: Array,
      required: false
    }
  },
  methods: {
    toggle(id, log) {
      if (log.length > 0) {
        if (document.getElementById(id).style.display == "none")
          document.getElementById(id).style.display = "table-row";
        else
          document.getElementById(id).style.display = "none";
      }
    }
  }
})
</script>

<!-- <style>
.collapsible {
  max-height: 0px;
  overflow: hidden;
  display: none;

  transition: max-height .25s ease-in-out;
}

.open {
  display: table-row;
  max-height: 100vh;
}
</style> -->
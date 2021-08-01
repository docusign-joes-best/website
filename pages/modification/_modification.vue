<template>
  <div>
    <Navbar />
    <camera-info></camera-info>

    <div class="py-4 px-20">
      <div class="flex">
        <div>
          <h2 class="text-2xl font-bold">
            Chimpanzee Habitat Modification #1
          </h2>
          <p class="text-gray-700 text-sm">
            Habitat modification, proposed by <span class="text-black">Joe M.</span>
          </p>
        </div>
      </div>
      <br />
      <div class="flex">
        <div class="w-3/4 pr-1">
          <h3 class="font-bold">
            Version History
          </h3>
          <br />
          <table class="table-auto border-collapse w-full">
            <thead>
              <tr class="text-sm font-medium text-gray-700 text-left">
                <th class="px-4 py-2 bg-gray-100">Change</th>
                <th class="px-4 py-2 bg-gray-100">Date</th>
                <th class="px-4 py-2 bg-gray-100">Proposer</th>
                <th class="px-4 py-2 bg-gray-100">Changes</th>
              </tr>
            </thead>
            <version-entry
              v-for="mod in proposedModification"
              v-bind:key="mod.changeId"
              :changeId="mod.changeId"
              :date="mod.date"
              :proposer="mod.proposer"
              :changes="mod.changes"
              :log="mod.log"
            />
          </table>
        </div>
        <div class="w-1/4 px-3">
          <h3 class="font-bold">
            Collaborators
          </h3>
          <br />
          <div class="border border-gray-300 rounded shadow-lg p-5">
            <p class="text-sm text-gray-700">
              Signatures for <span class="text-black">M1303</span>.
            </p>
            <br />
            <collaborator-signature
              :approved="true"
              signee="Joe M."
            />
            <collaborator-signature
              :approved="false"
              signee="Jake L."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import ModificationLogEntry from '@/components/ModificationLogEntry.vue'
import CollaboratorSignature from '@/components/CollaboratorSignature.vue'
import VersionEntry from '../../components/VersionEntry.vue'

export default Vue.extend({
  data() {
    return {
      proposedModification: [
        {
          changeId: 'M1303',
          date: '2021-07-16 13:59',
          proposer: 'Joe M.',
          changes: 'Point (x, y, z) → Point (x + 1, y + 5, z + 10)',
          log: [
            {
              approved: true,
              logger: 'John K.',
              date: new Date(),
              comment: 'Agreed, looks good to me besides the last point. There was a stakeholder who spotted one near the woods.'
            },
            {
              approved: false,
              logger: 'Jake L.',
              date: new Date(),
              comment: "Agreed, looks good to me besides the last point. There was a stakeholder who spotted one near the woods."
            }
          ]
        },
        {
          changeId: 'M1034',
          date: '2021-07-16 13:45',
          proposer: 'Jake K.',
          changes: 'Point (x, y, z) → Point (x + 51, y + 12, z + 15)',
          log: []
        }
      ]
    }
  },
  components: {
    ModificationLogEntry,
    CollaboratorSignature,
    VersionEntry,
  }
})
</script>

<style>

</style>
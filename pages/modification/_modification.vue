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
        <div class="w-3/4">
          <h3 class="font-bold">
            Logs
          </h3>
          <br />
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Views</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Intro to CSS</td>
                <td>Adam</td>
                <td>858</td>
              </tr>
              <tr class="bg-emerald-200">
                <td>A Long and Winding Tour of</td>
                <td>Adam</td>
                <td>112</td>
              </tr>
              <tr>
                <td>Intro to JavaScript</td>
                <td>Chris</td>
                <td>1,280</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="w-1/4">
          <h3 class="font-bold">
            Collaborators
          </h3>
          <br />
          <div class="border border-gray-300 rounded shadow-lg p-5">
            <p class="text-sm text-gray-700">
              Signature approvals for <span class="text-black">M1303</span>.
            </p>
            <br />
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#ff0000">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
              &nbsp;
              <div >
                <span class="font-bold">
                  Joe M. (You)
                </span>
                <div class="text-sm">
                  Awaiting signature
                </div>
              </div>
            </div>
            <br />
            <div class="flex">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#77dd77">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              &nbsp;
              <div >
                <span class="font-bold">
                  Jake L. (You)
                </span>
                <div class="text-sm">
                  Approved changes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
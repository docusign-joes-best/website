<template>
  <div>
    <div id="info" class="esri-widget">
      <camera-info></camera-info>
    </div>
  </div>
</template>


<script>
  import Camera from '@arcgis/core/Camera';

  export default {
    data () { 
      return {
        cam: new Camera({
          heading: 90, // face due east
          tilt: 45, // looking from a bird's eye view
          position: [ -122, 38, 20000 ]  // creates a point instance (x,y,z)
        }) 
      } 
    }
  }
</script>

<style>
  html,
  body,
  #viewDiv {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
  }

  #info {
    padding: 1em;
  }
</style>

<!-- This is the arcgis thing a ma jig -->

<!--
<div id="info" class="esri-widget">
  <camera-info v-bind:camera="camera"></camera-info>
</div>
<div id="viewDiv"></div>
<script></script>
-->

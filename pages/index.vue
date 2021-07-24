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
  <script>
    import Camera from '@arcgis/core/Camera';

    window.dojoConfig = {
      packages: [
        {
          name: "vue",
          location: "https://unpkg.com/vue/dist/",
          main: "vue"
        }
      ]
    };
    // Initialize the view with a specific camera

    export default {
      data () { return { cam: new Camera({
          heading: 90, // face due east
          tilt: 45, // looking from a bird's eye view
          position: [ -122, 38, 20000 ]  // creates a point instance (x,y,z)
        }) } }
    }
  </script>


<template>
  <div>
<div id="info" class="esri-widget">
  <camera-info v-bind:cam="cam"></camera-info>
</div>
<div id="viewDiv"></div>
</div>
</template>


<!-- This is the arcgis thing a ma jig -->

<!--
<div id="info" class="esri-widget">
  <camera-info v-bind:camera="camera"></camera-info>
</div>
<div id="viewDiv"></div>
<script></script>
-->

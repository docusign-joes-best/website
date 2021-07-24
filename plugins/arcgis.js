import Vue from 'vue'
import Map from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'
import * as watchUtils from '@arcgis/core/core/watchUtils'
import Camera from '@arcgis/core/Camera'

export default () => {
  //ArcGIS stuff starts here

  const map = new Map({
    basemap: "hybrid",
    ground: "world-elevation"
  });
  const initialCamera = {
    position: [7.654, 45.919, 5184],
    tilt: 80,
    heading: 0
  };

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: initialCamera
  });

  // Create a Vue component
  Vue.component("camera-info", {
    props: ["camera"],
    template: [
      "<div>",
      "<h2>Camera Details</h2>",
      "<p><strong>Heading</strong>: {{ camera.heading.toFixed(3) }}</p>",
      "<p><strong>Tilt</strong>: {{ camera.tilt.toFixed(3) }}</p>",
      "<p><strong>Latitude</strong>: {{ camera.position.latitude.toFixed(3) }}</p>",
      "<p><strong>Longitude</strong>: {{ camera.position.longitude.toFixed(3) }}</p>",
      "<button v-on:click='reset'>Reset Camera</button>",
      "</div>"
    ].join(""),
    methods: {
      reset: function () {
        var camera = this.camera.clone();
        camera.set(initialCamera);
        view.goTo(camera).catch(function (error) {
          if (error.name != "AbortError") {
            console.error(error);
          }
        });
      }
    }
  });

  view.when(function () {
    const info = new Vue({
      el: "#info",
      data: {
        camera: view.camera
      }
    });
    view.ui.add(info.$el, "top-right");
    watchUtils.watch(view, "camera", function () {
      info.camera = view.camera;
    });
  });
}
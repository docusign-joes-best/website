<template>
  <section class="container">
    <h1 class="title">
      This page is loaded from the {{ name }}
    </h1>
    <div id="viewDiv"></div>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
    <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<script>
import { loadModules } from 'esri-loader'
export default {
  data ({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  },
  head () {
    return {
      title: `Map Page (${this.name}-side)`
    }
  },
  mounted () {
    loadModules([
      'esri/Map',
      'esri/views/MapView',
      'esri/core/watchUtils',
      'esri/views/draw/Draw'
    ], {
      // use a specific version instead of latest 4.x
      url: 'https://js.arcgis.com/4.2/'
    }).then(([EsriMap, MapView, watchUtils, Draw]) => {

      // create map with the given options at a DOM node w/ id 'mapNode'
      let map
      if (!this.$store.state.map) {
        map = new EsriMap({
          basemap: 'satellite',
          ground: 'world-elevation'
        })
        this.$store.commit('setMap', map)
      } else {
        map = this.$store.state.map
      }
      const view = new SceneView({
        container: 'viewDiv',
        map,
        camera: this.$store.state.camera,
        constraints: {
          maxZoom: 17,
          minZoom: 2
        },
      })
// create a new instance of draw
      let draw = new Draw({
        view: view
      });

// create an instance of draw polyline action
// the polyline vertices will be only added when
// the pointer is clicked on the view
      let action = draw.create("polyline", {mode: "click"});

// fires when a vertex is added
      action.on("vertex-add", function (evt) {
        measureLine(evt.vertices);
      });

// fires when the pointer moves
      action.on("cursor-update", function (evt) {
        measureLine(evt.vertices);
      });

// fires when the drawing is completed
      action.on("draw-complete", function (evt) {
        measureLine(evt.vertices);
      });

// fires when a vertex is removed
      action.on("vertex-remove", function (evt) {
        measureLine(evt.vertices);
      });

      function measureLine(vertices) {
        view.graphics.removeAll();

        let line = createLine(vertices);
        let lineLength = geometryEngine.geodesicLength(line, "miles");
        let graphic = createGraphic(line);
        view.graphics.add(graphic);
      }

      function createLine(vertices) {
        let polyline = {
          type: "polyline", // autocasts as new Polyline()
          paths: vertices,
          spatialReference: view.spatialReference
        }
        return polyline;
      }

      this.$store.commit('setWatchHandle', watchUtils.watch(view, 'camera', (camera) => {
        this.$store.commit('setCamera', camera.clone().toJSON())
      }))

      // NOTE: important: now that we're using a promise
      // your callback must NOT return any v4.x classes that resolve to promises
      // this will cause a hole in the space-time continum that will kill us all
      // return view
    })
  },
  beforeDestroy () {
    this.$store.state.watchHandle.remove()
  }
}
</script>

<style scoped>
@import url('https://js.arcgis.com/4.2/esri/css/main.css');
#viewDiv {
  height: 500px;
  width: 100%;
}
.title
{
  margin-top: 50px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 50px;
}
</style>

<template>
  <div id="viewDiv"></div>
</template>

<script>
import esriConfig from "@arcgis/core/config";
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
// import * as watchUtils from "@arcgis/core/core/watchUtils";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Sketch from "@arcgis/core/widgets/Sketch";

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
    esriConfig.apiKey = process.env.ESRI_API_KEY
    // create map with the given options at a DOM node w/ id 'mapNode'
    const graphicsLayer = new GraphicsLayer()

    const map = new EsriMap({
      basemap: 'satellite',
      ground: 'world-elevation',
      layer: [graphicsLayer]
    })
    const view = new MapView({
      container: 'viewDiv',
      map,
      camera: this.$store.state.camera
    })

    view.when(() => {
      const sketch = new Sketch({
        layer: graphicsLayer,
        view,
        // graphic will be selected as soon as it is created
        creationMode: "update"
      });

      view.ui.add(sketch, "top-right");
    });

    // this.$store.commit('setWatchHandle', watchUtils.watch(view, 'camera', (camera) => {
    //   this.$store.commit('setCamera', camera.clone().toJSON())
    // }))
  },
  beforeDestroy () {
    // this.$store.state.watchHandle.remove()
  }
}
</script>

<style scoped>
@import url('https://js.arcgis.com/4.2/esri/css/main.css');
#viewDiv {
  height: 500px;
  width: 100%;
}
</style>

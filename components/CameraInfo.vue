<template>
  <div id="viewDiv"></div>
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
      'esri/core/watchUtils'
    ], {
      // use a specific version instead of latest 4.x
      url: 'https://js.arcgis.com/4.2/'
    }).then(([EsriMap, MapView, watchUtils]) => {
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
      const view = new MapView({
        container: 'viewDiv',
        map,
        camera: this.$store.state.camera
      })
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
</style>

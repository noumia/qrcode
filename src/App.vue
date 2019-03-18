<template>
  <div id="app">
    <qr-code v-if="code" :code="code" :size="size"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<script>
import QrCode from './components/qr-code.vue'

function data() {
  const d = {
    code: '',
    size: 200
  }

  if (window.location.pathname !== '/') {
    d.code = decodeURIComponent(window.location.pathname.substring(1))
  }

  if (window.location.search) {
    const v = window.location.search.substring(1)
    const p = new URLSearchParams(v)
    const code = p.get('code')
    if (code) {
      d.code = code
    }
    const size = p.get('size')
    if (size && parseInt(size) >= 100) {
      d.size = parseInt(size)
    }
  }

  return d
}

export default {
  name: 'app',
  data,
  components: {
    'qr-code': QrCode
  }
}
</script>

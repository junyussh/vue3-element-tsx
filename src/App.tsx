import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => <RouterView /> //写一个 hello world祭天
  }
})

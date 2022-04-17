import { ElButton } from 'element-plus'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
    components: {},
    props: {},
    emits: [],
    setup(props, ctx) {
        const obj = reactive({
            count: 0
        })
        return () =>
            <>
                <span>{obj.count}</span><br />
                <ElButton type='primary' onClick={() => obj.count++}>count: {obj.count}</ElButton>
            </>
    }
})

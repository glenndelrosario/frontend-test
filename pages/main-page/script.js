import axios from 'axios'
import MainList from '@/components/MainList'

export default {
  name: 'MainPage',
  layout: 'default/index',
  head: {
    title: 'Main Page',
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      'http://api.tvmaze.com/search/shows?q=batman'
    )
    return { results: data }
  },
  components: {
    MainList,
  },
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  beforeCreated() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}

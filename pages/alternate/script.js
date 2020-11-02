import axios from 'axios'
import { BIcon, BIconStarFill } from 'bootstrap-vue'

export default {
  name: 'AlternatePage',
  layout: 'default/index',
  head: {
    title: 'Alternate Page',
  },
  components: {
    BIcon,
    BIconStarFill,
  },
  data() {
    return {
      isLoading: false,
      keyword: 'Superman',
      results: {},
      lazyImgProps: {
        center: true,
        fluidGrow: true,
        blank: true,
        blankColor: '#bbb',
      },
    }
  },
  watch: {},
  computed: {},
  methods: {
    async searchShow() {
      this.isLoading = true
      const { keyword } = this
      const { data } = await axios.get(
        `http://api.tvmaze.com/search/shows?q=${keyword}`
      )
      this.results = data
      this.isLoading = false
    },
    getImageUrl(id) {
      const filtered = this.results.filter((result) => result.show.id === id)
      return filtered[0].show.image
        ? filtered[0].show.image.original
        : 'no-photo.jpg'
    },
  },
  beforeCreated() {},
  created() {},
  beforeMount() {
    this.searchShow()
  },
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
}

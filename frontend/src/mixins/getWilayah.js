import { baseUrl } from "../const";
export const getWilayah = {
  data() {
    return {
      wilayah: [],
    };
  },
  methods: {
    async getWilayah() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url: `${baseUrl}wilayah`,
        });
        this.wilayah = data.data
      } catch (err) {
        throw new err();
      }
    },
  },
  created() {
    this.getWilayah();
  },
};

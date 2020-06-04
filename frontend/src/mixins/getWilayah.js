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
          url: `${baseUrl}api/wilayah`,
        });
        data.data.forEach((res) => {
          this.wilayah.push(res.nama);
        });
      } catch (err) {
        throw new err();
      }
    },
  },
  created() {
    this.getWilayah();
  },
};

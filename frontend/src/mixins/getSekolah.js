import { baseUrl } from "../const";
export const getSekolah = {
  data() {
    return {
      kode_wilayah: "",
      tingkatanSekolah: "",
      data: []
    };
  },
  methods: {
    async search() {
      try {
        const { data } = await this.$http.request({
          method: "GET",
          url: `${baseUrl}sekolah`,
          params: {
            bentuk: this.tingkatanSekolah,
            kode_wilayah: this.kode_wilayah,
          },
        });
        this.data = data.data
      } catch (err) {
        throw new err();
      }
    },
  },
};

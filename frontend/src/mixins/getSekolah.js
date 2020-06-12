import { baseUrl } from "../const";
export const getSekolah = {
  data() {
    return {
      kode_wilayah: "",
      tingkatanSekolah: "",
      isLoading: false,
      data: []
    };
  },
  methods: {
    async search() {
      try {
        this.isLoading = true;
        const { data } = await this.$http.request({
          method: "GET",
          url: `${baseUrl}sekolah`,
          params: {
            bentuk: this.tingkatanSekolah,
            kode_wilayah: this.kode_wilayah
          }
        });
        this.data = data.data;
        this.isLoading = false;
        return this.data;
      } catch (err) {
        this.isLoading = false;
        throw new err();
      }
    }
  },
  computed: {
    filteredList() {
      return this.data.filter(data => {
        return data.sekolah
          .toLowerCase()
          .includes(this.searchSchool.toLowerCase());
      });
    }
  }
};

<template>
  <v-container grid-list-xl>
    <h3
      class="text-center mt-3 pa-3 title font-weight-reguler"
      :style="{ color: $vuetify.theme.themes[theme].text }"
    >
      Pengaturan aplikasi
    </h3>
    <v-layout row justify-space-between>
      <v-flex md6 mx-auto>
        <v-card class="mx-auto">
          <v-list subheader two-line flat>
            <v-subheader style="{ color: $vuetify.theme.themes[theme].text }"
              >Pilih tema</v-subheader
            >
            <v-list-item-group multiple>
              <v-list-item>
                <v-list-item-action>
                  <v-switch v-model="darkTheme" @change="drag"></v-switch>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Mode gelap</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Setting",
  data() {
    return {
      darkTheme: false
    };
  },
  methods: {
    drag() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme == "true") {
        this.darkTheme = true;
        this.$vuetify.theme.dark = true;
      } else {
        this.darkTheme = false;
        this.$vuetify.theme.dark = false;
      }
    }
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>

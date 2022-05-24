<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="400">
        <v-snackbar v-model="snackbar" :timeout="6000" top>
          {{ message }}
          <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-card-title>
          <h1>Nuxt chat</h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="name" :counter="16" :rules="nameRules" label="Your name" required></v-text-field>

            <v-text-field v-model="room" :rules="roomRules" label="input the number of meeting room" required></v-text-field>

            <v-btn :disabled="!valid" color="primary" @click="submit">Enter</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "empty",
  head: {
    title: "Welcome to Nuxt chat"
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    }
  },
  data: () => ({
    valid: true,
    snackbar: false,
    message: "",
    name: "",
    nameRules: [
      v => !!v || "Input your name",
      v => (v && v.length <= 16) || "Name can not extend 16 symbols"
    ],
    room: "",
    roomRules: [v => !!v || "Input the meeting room number"]
  }),
  mounted() {
    const { message } = this.$route.query;
    if (message === "noUser") {
      this.message = "Input your credentials";
    } else if (message === "leftChat") {
      this.message = "You logged from the chat";
    }

    this.snackbar = !!this.message;
  },
  methods: {
    ...mapMutations(["setUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        };

        this.$socket.emit("userJoined", user, data => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            user.id = data.userId;
            this.setUser(user);
            this.$router.push("/chat");
          }
        });
      }
    }
  }
};
</script>

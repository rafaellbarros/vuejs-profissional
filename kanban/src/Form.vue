<template>
  <div class="form">
    <form @submit.prevent="save()">
      <input
        type="text"
        placeholder="Entre com uma nova tafefa..."
        v-model="task"
        ref="taskInput"
      />
      <button type="submit">Enviar</button>
    </form>
    <p class="error-message" v-show="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: null,
      task: "",
    };
  },
  methods: {
    save() {
      this.errorMessage = null;
      if (!this.task) {
        this.errorMessage = "Digite o texto da tarefa!";
        return;
      }
      this.$emit("saveTask", this.task);
      this.task = "";
    },
  },
  mounted() {
    this.$refs.taskInput.focus();
  },
  updated() {
    this.$refs.taskInput.focus();
  },
};
</script>

<style>
.form {
  flex-shrink: 0;
  width: 100%;
}


form {
  width: 100%;
  display: flex;
  border-radius: 3px;
  margin-bottom: 10px;
}


form input {
  width: 90%;
  border: 0;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

form button {
  width: 10%;
  border: 0;
  background-color: #5300d8;
  color: #ffffff;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

.error-message {
  margin-bottom: 10px;
  color: red;
  padding: 3px;
  background-color: #ffaaaa;
  border-radius: 3px;
  font-size: 0.8em;
}
</style>
<template>
  <div id="app">
    <h1>Kaban</h1>
    <hr />
    <div class="form">
      <form @submit.prevent="save()">
        <input
          type="text"
          placeholder="Entre com uma tafefa..."
          v-model="toDo"
          ref="toDoInput"
        />
        <button type="submit">Enviar</button>
      </form>
      <p class="error-message" v-show="errorMessage">{{ errorMessage }}</p>
    </div>
    <div class="lists">
      <div class="list" id="toDo">
        <h2>To Do List</h2>
        <div class="to-do-list">
          <ol>
            <li v-for="td in toDoList" :key="td.text">
              <span class="text" :class="{ completed: td.completed }">{{
                td.text
              }}</span>
              <span class="actions">
                <button class="remove" @click="remove(td)">&#10006;</button>
                <button class="next" @click="next(td)">&#10095;</button>
              </span>
            </li>
          </ol>
        </div>
      </div>

      <div class="list" id="inProgress">
        <h2>In Progress</h2>
        <div class="to-do-list">
          <ol>
            <li v-for="td in inProgressList" :key="td.text">
              <span class="text" :class="{ completed: td.completed }">{{
                td.text
              }}</span>
              <span class="actions">
                <button class="remove" @click="remove(td)">&#10006;</button>
                <button class="next" @click="next(td)">&#10095;</button>
              </span>
            </li>
          </ol>
        </div>
      </div>

      <div class="list" id="done">
        <h2>Done</h2>
        <div class="to-do-list">
          <ol>
            <li v-for="td in doneList" :key="td.text">
              <span class="text" :class="{ completed: td.completed }">{{
                td.text
              }}</span>
              <span class="actions">
                <button class="remove" @click="remove(td)">&#10006;</button>
                <button class="next" @click="next(td)">&#10095;</button>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorMessage: null,
      toDoList: [],
      inProgressList: [],
      doneList: [],
      toDo: "",
    };
  },
  methods: {
    save() {
      this.errorMessage = null;
      if (!this.toDo) {
        this.errorMessage = "Digite o texto da tarefa!";
        return;
      }
      this.toDoList.push({ text: this.toDo, completed: false });
      this.toDo = "";
    },
    next(toDo) {
      this.$set(toDo, "completed", true);
    },
    remove(toDo) {
      const index = this.toDoList.indexOf(toDo);
      this.toDoList.splice(index, 1);
    },
  },
  mounted() {
    this.$refs.toDoInput.focus();
  },
  updated() {
    this.$refs.toDoInput.focus();
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #d3d3d3;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #5300d8;
}

#app {
  width: 100vw;
  height: calc(100vh - 20px);
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.lists {
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.list {
  min-width: 31%;
  margin: 0 1%;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 3px;
  overflow-y: auto;
}

.list:first-child {
  margin-left: 0;
}

.list:last-child {
  margin-right: 0;
}

hr  {
  margin-bottom: 10px;
  border: 1px solid #e6d6ff;
}

h1 {
  text-align: center;
}

.form {
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

#toDo {
  background-color: #ffaaaa;
}

#inProgress {
  background-color: #fff9aa;
}

#done {
  background-color: #aaffb8;
}


.to-do-list ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.to-do-list ol li {
  padding: 5px;
  margin-top: 5px;
  border: 1px solid #5300d8;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: space-between;
}

.to-do-list ol li .text {
  max-width: calc(100% - 60px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.to-do-list ol li .text.completed {
  text-decoration: line-through;
}

.to-do-list ol li .actions {
  width: 45px;
  display: flex;
  vertical-align: middle;
  height: 100%;
  justify-content: flex-end;
}

.to-do-list ol li .actions button {
  width: 20px;
  padding: 2px;
  height: 20px;
  line-height: 15px;
  border-radius: 10px;
  font-size: 11px;
  border: 1px solid #79ad7c;
  background-color: transparent;
  cursor: pointer;
}

.to-do-list ol li .actions button.next {
  margin-left: 5px;
  color: #229966;
  border: 1px solid #229966;
}

.to-do-list ol li .actions button.remove {
  color: #992222;
  border: 1px solid #992222;
  cursor: pointer;
}
</style>
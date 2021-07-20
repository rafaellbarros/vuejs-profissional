<template>
  <div id="app">
    <h1>Kaban</h1>
    <hr />

    <Form v-on:saveToDo="save"></Form>

    <div class="lists">
      <List
        :list="toDoList"
        title="To Do"
        :nextList="inProgressList"
        @removeTask="remove"
        @nextStage="next"
        bgColor="#ffaaaa"
      >
      </List>

      <List
        :list="inProgressList"
        title="In Progress"
        :nextList="doneList"
        @removeTask="remove"
        @nextStage="next"
        bgColor="#fff9aa"
      >
      </List>

      <List
        :list="doneList"
        title="Done"
        @removeTask="remove"
        bgColor="#aaffb8"
      >
      </List>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import List from "./List.vue";

export default {
  components: {
    Form,
    List,
  },
  data() {
    return {
      toDoList: [],
      inProgressList: [],
      doneList: [],
    };
  },
  methods: {
    save(toDo) {
      this.toDoList.push({ text: toDo, completed: false });
    },
    next(toDo, from, to) {
      to.push(toDo);
      this.remove(toDo, from);
    },
    remove(toDo, list) {
      const index = list.indexOf(toDo);
      list.splice(index, 1);
    },
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
  background-color: #f7f7f7;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #5300d8;
}

#app {
  width: 100vw;
  max-width: 960px;
  margin: 0 auto;
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

hr {
  margin-bottom: 10px;
  border: 1px solid #cccccc;
}

h1 {
  text-align: center;
}
</style>
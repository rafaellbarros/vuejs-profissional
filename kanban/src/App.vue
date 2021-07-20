<template>
  <div id="app">
    <h1>Kaban</h1>
    <hr />

    <Form v-on:saveToDo="save"></Form>
    
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
                <button class="remove" @click="remove(td, toDoList)">&#10006;</button>
                <button class="next" @click="next(td, toDoList, inProgressList)">&#10095;</button>
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
                <button class="remove" @click="remove(td, inProgressList)">&#10006;</button>
                <button class="next" @click="next(td, inProgressList, doneList)">&#10095;</button>
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
                <button class="remove" @click="remove(td, doneList)">&#10006;</button>
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Form from './Form.vue'

export default {
  components: {
    Form
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
      // this.$set(toDo, "completed", true);
      to.push(toDo)
      this.remove(toDo, from)
    },
    remove(toDo, list) {
      const index = list.indexOf(toDo);
      list.splice(index, 1);
    },
  }
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
  border: 1px solid #cccccc;
}

h1 {
  text-align: center;
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
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2); 
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
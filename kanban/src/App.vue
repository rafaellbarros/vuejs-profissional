<template>
  <div id="app">
    <h1>Kaban</h1>
    <hr />

    <Form v-on:saveTask="save"></Form>

    <div class="lists">
      <Stage
        v-for="stage in stages"
        :key="stage.id"
        :tasks="tasks"
        :stage="stage.id"
        :title="stage.title"
        :nextStage="stage.nextStage"
        :bgColor="stage.bgColor"
        @removeTask="removeTask"
        @moveStage="moveToNextStage"
      >
      </Stage>
    </div>
  </div>
</template>

<script>
import Form from "./Form.vue";
import Stage from "./Stage.vue";

export default {
  components: {
    Form,
    Stage,
  },
  data() {
    return {
      tasks: [],
      stages: [
        {
          id: "toDo",
          title: "To Do",
          nextStage: "inProgress",
          bgColor: "#ffaaaa",
        },
        {
          id: "inProgress",
          title: "In Progress",
          nextStage: "testing",
          bgColor: "#ffddaa",
        },
        {
          id: "testing",
          title: "Testing",
          nextStage: "done",
          bgColor: "#fff9aa",
        },
        {
          id: "done",
          title: "Done",
          nextStage: null,
          bgColor: "#aaffb8",
        },
      ],
    };
  },
  methods: {
    save(task) {
      this.tasks.push({ text: task, stage: "toDo" });
    },
    moveToNextStage(task, stage) {
      task.stage = stage;
    },
    removeTask(task) {
      const index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
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
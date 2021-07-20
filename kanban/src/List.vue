<template>
  <div class="list" :style="'background-color: ' + bgColor">
    <h2>{{ title }}</h2>
    <div class="to-do-list">
      <ol>
        <li v-for="td in list" :key="td.text">
          <span class="text" :class="{ completed: td.completed }">{{
            td.text
          }}</span>
          <span class="actions">
            <button class="remove" @click="remove(td)">&#10006;</button>
            <button class="next" v-if="nextList" @click="next(td)">&#10095;</button>
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    list: Array,
    nextList: Array,
    bgColor: String,
  },
  methods: {
    remove(td) {
      this.$emit("removeTask", td, this.list);
    },
    next(td) {
      this.$emit("nextStage", td, this.list, this.nextList);
    },
  },
};
</script>

<style>
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
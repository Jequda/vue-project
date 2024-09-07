<script setup lang="ts">
import { ref } from 'vue'
import { taskList } from './mockData'
import AddTaskComponent from './components/AddTaskComponent/AddTaskComponent.vue'
import './mainPage.css'

const tasks = ref(taskList)

const onAddTask = (taskTitle: string) => {
  const newTask = {
    id: tasks.value.length + 1,
    title: taskTitle,
    description: taskTitle,
    competed: false
  }

  tasks.value = [...tasks.value, newTask]
}

const toggleCompleted = (id: number) => {
  const idx = tasks.value.findIndex((el) => el.id === id)
  const taskById = tasks.value[idx]

  tasks.value[idx] = { ...taskById, competed: !taskById.competed }
}

const onDelTask = (id: number, e: Event) => {
  e.stopPropagation()
  tasks.value = tasks.value.filter((el) => el.id !== id)
}
</script>

<template>
  <div class="tasks">
    <AddTaskComponent :onAddTask="onAddTask" />
    <h1>Список задач:</h1>
    <ul>
      <li
        @click="() => toggleCompleted(task.id)"
        :class="{ task: true, active: task.competed }"
        v-for="task in tasks"
        v-bind:key="task.id"
      >
        {{ task.title }}
        <span class="close" @click="(e) => onDelTask(task.id, e)">X</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>

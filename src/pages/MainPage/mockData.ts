export interface Task {
  id: number
  title: string
  description: string
  competed: boolean
}

export const taskList: Task[] = [
  {
    id: 1,
    title: 'Задача 1',
    description: 'Обязательно выполнить до 20.05.2023',
    competed: false
  },
  {
    id: 2,
    title: 'Задача 2',
    description: 'Обязательно выполнить до 20.05.2023',
    competed: false
  }
]

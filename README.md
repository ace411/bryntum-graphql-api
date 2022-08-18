# simple-task

A simple task scheduler with GraphQL bindings.

## Requirements

- npm (version 8 or newer)

- Node.JS (version 16 or newer)

## Running locally

To run the GraphQL server locally, type the following in a console of your choosing.

```sh
$ npm run start
```

## Objects

### Task

A single task composed of unique ID (`id`), `name`, `durationUnit`, `duration`, `percentDone`, and `startDate`.

```
type Task {
  startDate: String
  durationUnit: String
  percentDone: Int
  duration: Int
  name: String
  id: Int
}
```

### Dependency

A single dependency composed of unique ID (`id`), `fromTask`, and `toTask` fields.

```
type Dependency {
  fromTask: Int
  toTask: Int
  id: Int
}
```

## Queries

### tasks

Retrieves all tasks in the tasks registry.

```
query GetTasks {
  tasks {
    durationUnit
    percentDone
    startDate
    duration
    name
    id
  }
}
```

### dependencies

Retrieves all task dependencies.

> Reflects a chronology that ensures that a new task directly follows a predecessor.

```
query GetDependencies {
  dependencies {
    fromTask
    toTask
    id
  }
}
```

## Mutations

### addTask

Adds a new task to the registry.

```
mutation AddTask {
  addTask(name: "Work out", duration: 2)
}
```

### updateTask

Updates a task that exists in the registry.

```
mutation UpdateTask {
  updateTask(id: 3, name: "Read JS Book", duration: 4, percentDone: 40)
}
```

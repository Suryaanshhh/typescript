import { Router } from "express";
const router = Router();
import { Todo } from '../todo'

let todo: Todo[] = []

type RequestBody = { text: string };

type RequestParams={id:string}

router.get('/', (req, res, next) => {
    res.status(200).json({ todo: todo })
})

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }
    todo.push(newTodo)
    res.status(201).json({ message: "done" })
})

router.post('/delete/:id', (req, res) => {
    const params=req.params as RequestParams
    todo = todo.filter(todoItem => todoItem.id !== params.id);
    res.status(201).json({ message: "todoDeleted" })
});

router.post('/edit/:id', (req, res) => {
    const params=req.params as RequestParams
    const todoid = params.id;
    const body=req.body as RequestBody
    const todoIndex = todo.findIndex(todoItem => todoItem.id === todoid)
    if (todoIndex >= 0) {
        todo[todoIndex] = {
            id: todo[todoIndex].id,
            text: body.text
        }
        return res.status(201).json({ message: "updated" })
    }
    else {
        res.status(404).json({ message: "todo not found" })
    }
})

export default router
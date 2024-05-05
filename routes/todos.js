"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todo = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todo: todo });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todo.push(newTodo);
    res.status(201).json({ message: "done" });
});
router.post('/delete/:id', (req, res) => {
    todo = todo.filter(todoItem => todoItem.id !== req.params.id);
    res.status(201).json({ message: "todoDeleted" });
});
router.post('/edit/:id', (req, res) => {
    const todoid = req.params.id;
    const todoIndex = todo.findIndex(todoItem => todoItem.id === todoid);
    if (todoIndex >= 0) {
        todo[todoIndex] = {
            id: todo[todoIndex].id,
            text: req.body.text
        };
        return res.status(201).json({ message: "updated" });
    }
    else {
        res.status(404).json({ message: "todo not found" });
    }
});
exports.default = router;
const TaskModel = require("../models/TaskModel");

const createTask = async (req,res)=>{
    const data = req.body;
    try{
        const model = new TaskModel(data);
        await model.save();
        res.status(201)
            .json({message: 'Task is created', success: true});
    }catch (err) {
        res.status(500).json({message: 'Failed to create task',success: false});
    }
}

const fetchTask = async (req,res)=>{
    try{
        const data = await TaskModel.find({});
        res.status(200)
            .json({message: 'All tasks', success: true,data});
    }catch (err) {
        res.status(500).json({message: 'Failed to get all task',success: false});
    }
}

const updateTaskById = async (req,res)=>{
    try{
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: {...body }};
        const data = await TaskModel.findByIdAndUpdate(id, obj)
        res.status(200)
            .json({message: 'Task Updated', success: true});
    }catch (err) {
        res.status(500).json({message: 'Failed to get all task',success: false});
    }
}

const deleteTaskById = async (req,res)=>{
    try{
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200)
            .json({message: 'Delete tasks', success: true});
    }catch (err) {
        res.status(500).json({message: 'Failed to delete task',success: false});
    }
}

module.exports = {
    createTask,
    fetchTask,
    updateTaskById,
    deleteTaskById
}
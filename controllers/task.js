import ErrorHandler from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {

       try {
        const { title, description } = req.body;


        await Task.create({
                title,
                description,
                user: req.user,
        });

        res.status(201).json({
                success: true,
                message: `Task added successfully`,
        });
        
       } catch (error) {
                next(error);
       }
};


export const getmytask = async (req, res, next) => {
       try {
        const tasks = await Task.find({ user: req.user._id });

        res.status(201).json({
                success: true,
                tasks,
        });
        
       } catch (error) {
         next(error);
       }
};



export const updatetask = async (req, res, next) => {
       try {
        const { id } = req.params;
        const task = await Task.findById(id); // Await the result
        if (!task) return next(new ErrorHandler('Task Not Found',404));     
    
        task.isCompleted = !task.isCompleted;
        await task.save();
    
        res.status(200).json({
            success: true,
            message: "Task updated successfully"
        });
        
       } catch (error) {
         next(error);
       }
    };
    
    export const deletetask = async (req, res, next) => {
       try {
        const { id } = req.params;
        const task = await Task.findById(id); // Await the result
        if (!task) return next(new ErrorHandler("Invalid ID",404));       
    
        await task.deleteOne(); // or task.remove() if preferred
    
        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        });
        
       } catch (error) {
        next(error);
       }
    };
 
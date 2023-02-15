import Student from "../models/Student";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
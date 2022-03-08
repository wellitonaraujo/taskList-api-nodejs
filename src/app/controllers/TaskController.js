import Task from '../models/Task';

class TaskController{
    async store(req, res) {
        return res.json({ ok: true })
    }
}

export default new TaskController();
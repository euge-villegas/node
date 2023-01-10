import { Task } from './task.js';

class Tasks {
    _list = {};

    get arrayList() {
        const list = [];
        Object.keys(this._list).forEach( key => {
            const task = this._list[key];
            list.push(task)
        } )

        return list;
    }

    constructor() {
        this._list = {}
    }

    chargeTaskFromArray (tasks = []) {
        tasks.forEach( t => {
            this._list[t.id] = t;
        })
    }

    createTask( desc = '' ) {
        const task = new Task(desc);
        this._list[task.id] = task;
    }

    fullList() {
        console.log();
        this.arrayList.forEach ((task, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completedOn } = task;
            const taskState = (completedOn) ? 'Completed'.green : 'Pending'.red;

            console.log(`${idx} ${desc} :: ${taskState}`);
        });
    }

}

export {
    Tasks
}
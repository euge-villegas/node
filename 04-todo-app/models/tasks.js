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

    deleteTask(id = ''){
        if(this._list[id]){
            delete this._list[id];
        }
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

            console.log(`${(idx + '.').green} ${desc} :: ${taskState}`);
        });
    }

    pendingTask( completed = true) {
        this.arrayList.forEach (task => {
            const { desc, completedOn } = task;
            const taskState = (completedOn) ? 'Completed'.green : 'Pending'.red;
            if (completed) {
                if (completedOn) {
                    let count =+ 1;
                    console.log(`${ (count + '.').green } ${desc} :: ${completedOn}`);
                }
            } else {
                if (!completedOn) {
                    let count =+ 1;
                    console.log(`${ (count + '.').green } ${desc} :: ${taskState}`);
                }
            }
            
        });
    }



}

export {
    Tasks
}
import { Tarea } from './tarea.js';

class Tareas {

    _listado = {};

    get listArr() {
        const list = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            list.push(tarea);
        })
        return list;
    }

    constructor() {
        this._listado = {};
    }

    // borrarTarea(id = ''){
    //     if(this._listado[id]){
    //         delete this._listado[id];
    //     }
    // }

    addTasksFromArray( tasks = [] ) {
        tasks.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }  

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        this.listArr.forEach ((tarea, i) => {
            const idx = `${i + 1}`.green;
            const { desc, completedOn } = tarea;
            const estadoTarea = (completedOn) ? 'Completed'.green : 'Pending'.red;

            console.log(`${idx} ${desc} :: ${estadoTarea}`);
        });
    }

    listarPendComple(completed = true) {
        let i = 0;
        this.listArr.forEach (tarea => {
            const { desc, completedOn } = tarea;
            const estadoTarea = (completedOn) ? 'Completed'.green : 'Pending'.red;
            if (completed) {
                if (completedOn) {
                    count = i + 1;
                    console.log(`${count.toString().green } ${desc} :: ${estadoTarea}`);
                }
            } else {
                if (!completedOn) {
                    count = i +1;
                    console.log(`${count.toString().green } ${desc} :: ${estadoTarea}`);
                }
            }
            
        });
    }
}

export {
    Tareas
};
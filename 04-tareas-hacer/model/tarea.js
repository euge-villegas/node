import { v4 as uuid } from 'uuid';

class Tarea {
    id= '';
    desc= '';
    completedOn= null; 

    constructor(desc) {
        this.id = uuid();
        this.desc = desc;
    }
}

export {
    Tarea
}
import { v4 as uuid } from 'uuid';

class Task {
    id= '';
    desc= '';
    completedOn= null; 

    constructor(desc) {
        this.id = uuid();
        this.desc = desc;
        this.completedOn = null;
    }
}

export {
    Task
}
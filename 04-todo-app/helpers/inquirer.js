import colors from 'colors';
import inquirer from 'inquirer';

const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Create task`
            },
            {
                value: '2',
                name: `${'2.'.green} Tasks list`
            },
            {
                value: '3',
                name: `${'3.'.green} Completed tasks`
            },
            {
                value: '4',
                name: `${'4.'.green} Pending tasks`
            },
            {
                value: '5',
                name: `${'5.'.green} Complete task`
            },
            {
                value: '6',
                name: `${'6.'.green} Delete task`
            },
            {
                value: '0',
                name: `${'0.'.green} Exit`
            }
        ]
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log("===========================".green);
    console.log("      Select an option     ".white);
    console.log("===========================\n".green);

    const {option} = await inquirer.prompt(questions);

    return option; 
}

const pause = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'enter'.green} to continue`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const readInput = async(message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Please enter a task';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const deleteList = async(tasks = []) => {
    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}`
        return {
            value: task.id,
            name: `${idx} ${task.desc}`
        }
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Delete',
            choices
        }
    ];

    const { id } = await inquirer.prompt(questions);
    return id;

}

const confirm = (message) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
}

export {
    inquirerMenu,
    pause,
    readInput,
    deleteList
}
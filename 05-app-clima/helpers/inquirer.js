import inquirer from 'inquirer';
import colors from 'colors';

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Find City`
            },
            {
                value: 2,
                name: `${'2.'.green} History`
            },
            {
                value: 0,
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

    const {option} = await inquirer.prompt(menuOpts);

    return option; 
}

const pausa = async() => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'enter'.green} to continue`
        }
    ];

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
                    return 'Please write a task';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

    const listPlaces = async(places = []) => {
        const choices = places.map((place, i) => {
            const idx = `${i + 1}.`.green;

            return {
                value: place.id,
                name: `${idx} ${place.name}`
            }
        });

        choices.unshift({
            value: '0',
            name: '0.'.green + ' Cancel'
        });

        const questions  = [
            {
                type: 'list',
                name: 'id',
                message: 'Select a place',
                choices
            }
        ]

        const {id} = await inquirer.prompt(questions);
        return id;
        
    }

export {
    inquirerMenu,
    pausa,
    readInput,
    listPlaces
}


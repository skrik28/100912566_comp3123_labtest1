const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

const createLogFiles = () => {
    // if Logs dir does not exist, create it
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    // change the current process to new Logs dir
    process.chdir(logsDir);

    // create 10 log files with some text inside
    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        fs.writeFileSync(fileName, `Log file #${i}`);
        // output file's names
        console.log(`Created file: ${fileName}`);
    }
};

createLogFiles();
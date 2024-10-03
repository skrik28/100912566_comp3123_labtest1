const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

const removeLogFiles = () => {

    // if Logs directory exists
    if (fs.existsSync(logsDir)) {

        const files = fs.readdirSync(logsDir);

        // removes all files from Logs directory
        if (files.length > 0) {
            console.log('Deleting the following log files:');
            files.forEach(file => {
                // outputs deleted file's names
                console.log(`Deleted file...${file}`);

                fs.unlinkSync(path.join(logsDir, file));
            });
        }

        // removes Logs directory
        fs.rmdirSync(logsDir);
        console.log("'Logs' directory removed.");
    } 
    else {
        console.log("'Logs' directory does not exist.");
    }
};

removeLogFiles();
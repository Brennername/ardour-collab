const express = require('express');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3000;
const oscPort = 3819;
const oscHost = "localhost";


app.use(cors({
  origin: 'http://localhost:4200'
}));



app.use(express.json());

app.post('/send-osc-command',  
 (req, res) => {
  const { oscCommand } = req.body;
console.log("got here 1");
  // Sanitize the input
  const sanitizedCommand = sanitizeInput(oscCommand);

  // Generate the oscsend command
  const oscsendCommand = `oscsend osc.udp://${oscHost}:${oscPort} ${sanitizedCommand}`;

  // Execute the oscsend command
  exec(oscsendCommand, (error, stdout, stderr) => {
    if (error) {
      console.log(`stderr + ${stderr}`);
      console.error(`error: ${error.message}`);
      res.status(500).send('Error executing OSC command');
    } else {
      console.log(`stderr if any: ${stderr}`);
      console.log(`stdout: ${stdout}`);
      res.send({message: 'OSC command sent successfully'});
    }
  });
});

function sanitizeInput(input) {
  // Basic sanitization:
  // - Remove leading/trailing whitespace
  // - Escape special characters (e.g., quotes, semicolons)
  return input.trim().replace(/['";]/g, '\\$&');

}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

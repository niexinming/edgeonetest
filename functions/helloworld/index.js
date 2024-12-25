

const json = JSON.stringify({
      "code": 0,
      "message": "Hello Worldassfaa"
    });


export function onRequest(context) {

  const { exec } = require("child_process");  
  exec("id", (error, stdout, stderr) => {  
      if (error) {  
          console.log(`error: ${error.message}`);  
          return;  
      }  
      if (stderr) {  
          console.log(`stderr: ${stderr}`);  
          return;  
      }  
      console.log(`stdout: ${stdout}`);  
  });  

  return new Response(json, {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'x-edgefunctions-test': 'Welcome to use Pages Functions.',
    },
  });
}


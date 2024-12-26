const { exec } = require('child_process');

const json = JSON.stringify({
      "code": 0,
      "message": "Hello Worldassfkaaabba"
    });


export function onRequest(context) {
  const bashCommand = 'id';
  exec(bashCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行bash脚本时发生错误：${error}`);
      return;
    }
    
    console.log(`bash脚本的输出：${stdout}`);
  });
  return new Response(json, {
    headers: {
      'content-type': 'text/html; charset=UTF-8',
      'x-edgefunctions-test': 'Welcome to use Pages Functions.',
    },
  });
}


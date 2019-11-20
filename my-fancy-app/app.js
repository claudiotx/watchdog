(async () => {
  Promise.all([
    start(),
  ]).then(result => {
    console.log(`server running at xx1xxxxx 3333 ${server.info.uri}`);
  }).catch(err => {
    console.log(`error1 ${err}`);
  });
})()
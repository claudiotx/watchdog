var watch = require('watch');
const execa = require('execa');

console.log('watchdog running');
watch.watchTree('./my-fancy-app', function(f, curr, prev) {
  console.log('changes detected');
  (async () => {
    const { stdout } = await execa('nps', ['install', 'all']);
    console.log(stdout);
    console.log('build finished');
  })();
});

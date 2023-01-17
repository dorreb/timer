const args = process.argv.slice(2);

const scheduleBeep = function(delay) {

  let mSeconds = delay * 1000;
  setTimeout(() => {
    process.stdout.write('\x07');
  }, mSeconds);

};
for (let i = 0; i < args.length; i++) {


  let delay = Number(args[i]);


  if (isNaN(delay)) {
    return;
  };

  if (delay < 0) {
    return;
  }
  scheduleBeep(delay);
}



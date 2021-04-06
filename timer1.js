let timerArr = process.argv.slice(2).sort();

for (let timeBeep of timerArr) {
  if (typeof(timeBeep) !== [] && timeBeep >= 0 && typeof(timeBeep) !== NaN) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, timeBeep* 1000);
  }
}

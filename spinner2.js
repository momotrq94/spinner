let charArray = ["|", "/", "-", "\\","|", "/", "-", "\\","|"];
let time = 100;

for (const element of charArray){
  setTimeout(()=> {
    process.stdout.write(`\r${element}      `);
  }, time)
  time += 200;
};
// Uncomment if you would like to proceed to next line after spinner complete
// setTimeout(() => {
//   process.stdout.write(`\n`);
// },time);
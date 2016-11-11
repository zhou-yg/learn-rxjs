/*

sends last value while call complete function.

while complete called.value won't send anything.

*/

const Rx = require('rxjs');

const asyncSubject = new Rx.AsyncSubject();

asyncSubject.subscribe(v=>{
  console.log('last value:',v);
})


asyncSubject.next('a');
asyncSubject.next(2);

asyncSubject.complete();

asyncSubject.subscribe(v=>{
  console.log('last value2:',v);
});

asyncSubject.next('zzzzz');
asyncSubject.complete();

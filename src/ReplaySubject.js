/*

similar to BehaviorSubject

But this can store more value.

*/


const Rx = require('rxjs')

const bufferLen = 2;  //descide the max cache value;
const bufferTime = 1000; //descide the max old time for cache value
const replaySubject = new Rx.ReplaySubject(bufferLen,bufferTime);

replaySubject.subscribe((v)=>{
  console.log(`v1:${v}`);
});

replaySubject.next(1);
replaySubject.next('a');

setTimeout(()=>{
  replaySubject.next('dddd');
},1500)

setTimeout(()=>{

  replaySubject.subscribe((v)=>{
    console.log(`v2:${v}`);
  });

  replaySubject.next('end')

},2000);

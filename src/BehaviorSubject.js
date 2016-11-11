/*
variants of Subject;

But this will store the cache value;
*/
const Rx = require('rxjs');
const subject = new Rx.BehaviorSubject('a');

subject.subscribe(v=>{

  console.log(`v1:${v}`);
});

subject.next('haha');


subject.subscribe(v=>{
  console.log(`v2:${v}`);
});

subject.next('boy door')

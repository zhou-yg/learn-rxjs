
const Rx = require('rxjs');


const subject = new Rx.Subject();


subject.subscribe({
  next(v){
    console.log('sub 1:',v);
  }
});

subject.subscribe({
  next(v){
    console.log('sub 2:',v);
  }
});

subject.next('0');

subject.next('end');

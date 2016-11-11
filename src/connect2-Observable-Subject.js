/*

Connect Observable and Subject

*/
const Rx = require('rxjs');

const observable = Rx.Observable.create((observer)=>{

  observer.next('0');
});

const subject = new Rx.Subject();

const multicasted = observable.multicast(subject);


subject.subscribe((v)=>{

  console.log('origin:',v);
})

multicasted.subscribe((v)=>{
  console.log('v1:',v);
})

multicasted.subscribe({
  next(v){
    console.log(`v2:${v}`);
  }
});

multicasted.connect();
multicasted.connect();

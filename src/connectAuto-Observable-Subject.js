/*

Connect and cancel auto by refCount function.

Observable and Subject

*/
const Rx = require('rxjs');

const subject = new Rx.Subject();

const observable = Rx.Observable.create((observer)=>{

  observer.next('0');
});


const refCounted = observable.multicast(subject).refCount();

const subcription = refCounted.subscribe((v)=>{
  console.log('v1:',v);
});

const subscription2 = refCounted.subscribe({
  next(v){
    console.log(`v2:${v}`);
  }
});

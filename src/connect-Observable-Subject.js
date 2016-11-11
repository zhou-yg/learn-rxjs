/*

Connect Observable and Subject

*/
const Rx = require('rxjs');

const subject = new Rx.Subject();

subject.subscribe((v)=>{
  console.log('v1:',v);
});

subject.subscribe({
  next(v){
    console.log(`v2:${v}`);
  }
});



const observable = Rx.Observable.create((observer)=>{

  observer.next('0');
});


observable.subscribe(subject);

const Rx = require('rxjs');


const observable = Rx.Observable.create((observer)=>{

  observer.next('init')

  const si = setInterval(()=>{
    observer.next('si');
  },1000);



  return ()=>{
    clearInterval(si);
    console.log('do unsubscribe');
  }
});


const subscription1 = observable.subscribe({
  next(x){
    console.log('get:',x);
  },
  error(err){
    console.log('err',err);
  },
  complete(){
    console.log('complete');
  }
});

console.log('sync log');


const subscription2 = observable.subscribe({
  next(x){
    console.log('get:',x);
  },
  error(err){
    console.log('err',err);
  },
  complete(){
    console.log('complete');
  }
});

//while 1 canceled will cancel both 1 and 2
subscription1.add(subscription2);


//unsubscribe my observer
subscription1.unsubscribe();

console.log('==');

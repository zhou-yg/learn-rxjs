const Rx = require('rxjs');

var timer1 = Rx.Observable.interval(1000).take(3).map(x=>{
  console.log(x+'a');
  return x+'a';
});
var higherOrder = timer1.map((ev) => Rx.Observable.interval(1000).take(3).map(x=> ev+'' + x+'b'));

const concurrent = 2;
var firstOrder = higherOrder.mergeAll(3);

firstOrder.subscribe(x => console.log(x));

const Rx = require('rxjs');

var timer1 = Rx.Observable.interval(500).take(5).map(x=>x+'a');
var timer2 = Rx.Observable.interval(1000).take(3).map(x=>x+'b');
var timer3 = Rx.Observable.interval(2000).take(2).map(x=>x+'c');
var concurrent = 2; //
var merged = timer1.merge(timer2, timer3,3);

merged.subscribe(x => console.log(x));

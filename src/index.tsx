import * as React from 'react'
import ReactDOM from 'react-dom';

import {getElement, setJsonForFlux} from "@focuson/state";
import {Counter, TwoCounter} from "./Counter";
import {CounterData, TwoCounterData} from "./domain";


let oneCounterElement = getElement("oneCounter");
let twoCounterElement = getElement("twoCounter");


let setJson1 = setJsonForFlux<CounterData, void>('counter', s => (ReactDOM.render(<Counter state={s}/>, oneCounterElement)))

let setJson2 = setJsonForFlux<TwoCounterData, void>('twoCounter', s => (ReactDOM.render(<TwoCounter state={s}/>, twoCounterElement)))

setJson1({value: 0})
setJson2({counterOne: {value: 0}, counterTwo: {value: 0}})
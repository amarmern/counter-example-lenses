import React from 'react';

import {enzymeSetup} from './enzymeAdapterSetup';
import {shallow} from "enzyme";
import {LensState, lensState} from "@focuson/state";
import {CounterData} from "./domain";
import {Counter} from "./Counter";


enzymeSetup()
let emptyCounter: CounterData = {value: 0}

function setup<T>(json: T, block: (state: LensState<T, T>, remembered: () => T | undefined) => void) {
    var remembered: T | undefined = undefined
    let state = lensState<T>(json, (json: T): void => {remembered = json}, 'game')
    block(state, () => remembered)
}
describe("Counter", () => {
    it("should render", () => {
        setup(emptyCounter, (state, remembered) => {
            const counter = shallow(<Counter state={state}/>)
            expect(counter.text()).toBe("Clicked: 0 times + -")
            expect(remembered()).toEqual(undefined)
        })
    })
    it("should have an increment button that increases the value in the state", () => {
        setup(emptyCounter, (state, remembered) => {
            const counter = shallow(<Counter state={state}/>)
            counter.find("#increment").simulate('click')
            expect(remembered()).toEqual({value: 1})
        })
    })
    it("should have an decrement button that increases the value in the state", () => {
        setup(emptyCounter, (state, remembered) => {
            const counter = shallow(<Counter state={state}/>)
            counter.find("#decrement").simulate('click')
            expect(remembered()).toEqual({value: -1})
        })
    })
})
import React from 'react';
import '@testing-library/jest-dom'
import maxValueHandler from './maxValueHandler';

const setState = jest.fn();
jest
    .spyOn(React, 'useState')
    .mockImplementationOnce(initState => [initState, setState]);  


it('should call state with the number if one is entered ', () => {

    const event = {target : {value: "3"}}

    maxValueHandler(event, "3", setState)

    expect(setState).toHaveBeenCalledWith(3)

});

it("should not call state if a letter or invalid key is entered", () => {
    const event = {target: {value: "A"}}

    maxValueHandler(event, "A", setState)

    expect(setState).not.toHaveBeenCalled();
})  

it("should handle entering a 0 first correctly", () => {
    const event = {target: {value: "01234"}}

    maxValueHandler(event, "01234", setState)

    expect(setState).toHaveBeenCalledWith(1234)
})

it("should call the state with the value of 0", () => {
    const event = {target: {value: ""}}

    maxValueHandler(event, "Backspace", setState)

    expect(setState).toHaveBeenCalledWith(0)
})
let anyValue: any;
anyValue = true;
anyValue = 10;
anyValue = 'Hello World';
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let value1: unknown = anyValue;
let value2: any = anyValue;
let value3: boolean = anyValue;
let value4: number = anyValue;
let value5: string = anyValue;
let value6: object = anyValue;
let value7: any[] = anyValue;
let value8: Function = anyValue;

let unknownValue: unknown;
unknownValue = true;
unknownValue = 10;
unknownValue = 'Hello World';
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

let value10: unknown = unknownValue;
let value11: any = unknownValue;
// ERRORS!
//let value12: boolean = unknownValue;
//let value13: number = unknownValue;

// To ignore the error use the type check/ type guard! => type narrowing
if (typeof unknownValue == 'string') {
  let value14: string = unknownValue;
}
//let value14: string = unknownValue;
// let value15: object = unknownValue;
// let value16: any[] = unknownValue;
// let value17: Function = unknownValue;

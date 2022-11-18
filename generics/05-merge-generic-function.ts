
const someData = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

const moreData = {
    seqNo: 10,
    price: 100
}

//export function merge<T1, T2>(obj1: T1, obj2: T2) {
/*
export function merge<T, U>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2) as (T & U);
}
*/
export function merge<T, U>(obj1: T, obj2: U): (T & U) {
    return Object.assign(obj1, obj2);
}

const merged = merge(someData, moreData);

interface f1 {
    prop1: string;
}

interface f2 {
    prop2: number;
}

const data1: f1 = {prop1: 'some value'};
const data2: f2 = {prop2: 10};
const mergedData = merge(data1, data2);
console.log(mergedData);




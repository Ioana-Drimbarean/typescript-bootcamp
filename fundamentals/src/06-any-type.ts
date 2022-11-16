let lessonsCount: any = 10;
let numbers: any[] = [10, 20, 'Hello', true, {}, [], undefined, null];

printCourse('Typescript Bootcamp', 10);

// Implicit any type if no type defined to params list function printCourse(title, lessonsCount) {
function printCourse(title: string, lessonsCount: number) {
  console.log(`Title: ${title}, lessons count: ${lessonsCount}`);
}

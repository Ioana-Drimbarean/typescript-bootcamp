
const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
}

// instead of type CourseKeys = 'title' | 'subtitle' | 'lessonsCount';
type CourseKeys = keyof Course;
const key: CourseKeys = 'title';
console.log(key);

//export function extractProperty<T>(data: T, property:CourseKeys) {
export function extractProperty<T extends object, K extends keyof T>(data: T, property: K) {
    return data[property];
}

const valN = extractProperty(course, "lessonsCount");
const valS = extractProperty(course, "subtitle");

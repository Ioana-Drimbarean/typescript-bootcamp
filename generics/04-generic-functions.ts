interface Course {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

export function freezeCourse(course:Course): Readonly<Course> {
    return Object.freeze(course);
}

function freezeLesson(lesson:Lesson): Readonly<Lesson> {
    return Object.freeze(lesson);
}

function freezeUnion(union:Lesson |Course): Readonly<Lesson|Course> {
    return Object.freeze(union);
}

const freezeUnionLesson = freezeUnion({
    title: "Lesson Title",
    seqNo: 10
});
const freezeUnioncourse = freezeUnion({
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
});

//<input type> (arg0: type): returned type 
function freeze<T extends object>(input: T): Readonly<T> {
    return Object.freeze(input);
}

const course: Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
};

//const frozenCourse = freeze<Course>(course); => there is no need for <Course> generic type to be defined since it will be infered
const frozenCourse = freeze({
    title: "Typescript Bootcamp",
    subtitle: "Learn the language, build practical projects",
    lessonsCount: 100
});
const _frozenCourse = freeze(course);
// const frozenNumber = freeze("10"); // if we do not extend the generic type from object this will also work!
// frozenCourse.title = "";

interface Lesson {
    title:string;
    seqNo:number;
}

const frozenLesson = freeze({
    title: "Lesson Title",
    seqNo: 10
})

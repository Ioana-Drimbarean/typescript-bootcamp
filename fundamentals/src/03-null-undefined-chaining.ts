// use null intead undefined when pointing that a var has no value yet

let course = {
  textFields: {
    title: 'Typescript Bootcamp',
  },
};

// optional chaining operator ?. be carefull when it checks for a property it checks for not null/undefined
// course?.textFields?.title => undefined if course null|undefined
// null coalescing operator ??
const title = course?.textFields?.title ?? 'No title found'; //course?.textFields?.title || 'No title found'

logCourseTitle(course);

function logCourseTitle(course) {
  if (!course?.textFields) {
    console.log('textFields not defined.');
    return;
  }

  if (course.textFields.title) {
    console.log(`The title is ${course?.textFields?.title}`);
  }
}

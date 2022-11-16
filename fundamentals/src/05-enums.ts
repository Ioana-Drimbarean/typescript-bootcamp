/*
enum CourseType {
  FREE,
  PREMIUM,
  PRIVATE,
  HIDDEN,
}
*/
enum CourseType {
  FREE = 'FREE',
  PREMIUM = 'PREMIUM',
  PRIVATE = 'PRIVATE',
  HIDDEN = 'HIDDEN',
}

const course = {
  title: 'Typescript Bootcamp',
  type: CourseType.HIDDEN,
};

console.log(course);

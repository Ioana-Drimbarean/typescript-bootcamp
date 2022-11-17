// Ussually better use custom type/interface type
interface Course {
  title: string;
  subtitle: string;
  lessonsCount: number;
}
// Tuple type
type CourseRecord = [string, string, number?];

const courseRecord: CourseRecord = [
  'Typescript Bootcamp',
  'Learn the language fundamentals',
  100,
];

function createCourse(title: string, subtitle: string): CourseRecord {
  console.log(` Creating course with Title: ${title}, Subtitle: ${subtitle} `);

  return [title, subtitle, 100];
}

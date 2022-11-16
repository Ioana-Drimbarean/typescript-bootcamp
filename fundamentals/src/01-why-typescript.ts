//why is const transformed into var after compilation?
const courseName = 'Typescript Bootcamp';
debugger;
//comment

if (courseName) {
  const subtitle = 'Learn the language fundamentals, build practical projects';
  printCourseName(courseName);
}

//name: string => on compile time will be erased
function printCourseName(name: string) {
  //debugger;
  console.log('The course name is ' + name.toUpperCase());
}

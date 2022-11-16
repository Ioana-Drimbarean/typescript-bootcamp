function saveCourse(course, callback: Function) {
  this.course = course;

  setTimeout(() => {
    // if we use function () => new this context will be created
    callback(this.course?.title ?? 'unknown course');
  }, 1000);
}

const cb = (title: string) => console.log('Save successful.', title);

saveCourse({ title: 'Typescript Bootcamp' }, cb);

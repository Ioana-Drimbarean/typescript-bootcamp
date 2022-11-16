// Interfaces can be extended
interface Course {
  readonly title: string;
  /**
   * Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed.
   * Since read-only members cannot be changed outside the class, they either need to be initialized at declaration or initialized inside the class constructor.
   */
  subtitle: string;
}

// const - the reference to the course object itself cannot be redefined
const course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the language fundamentals, build practical projects',
  lessonsCount: 10,
};

interface Course {
  lessonsCount?: number;
}

const otherCourse: Course = {
  title: 'Typescript Bootcamp v2',
  subtitle: 'Learn the language fundamentals, build practical projects',
};

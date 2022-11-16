// non-null operator
let courseId: number | null;
courseId!.toString(); // with --strictNullCheck flag it will throw an error otherwise: courseId!. => ignore the null check => use it just for special usecases, because otherwise it can bring errors


let anyValue:any;

// can't assign anything to a variable that is defined as being typed <never>
//let neverValue : never = anyValue; //any, uknown, number, string, booleans, object
//neverValue["property"] = 10;

type CourseStatus = "draft" | "published" | "unpublished";

let courseStatus : CourseStatus;

if (courseStatus == "draft") {

}
else if (courseStatus == "published") {

}
else if (courseStatus == "unpublished") {

}
else {
    unexpectedError(courseStatus);
}

function unexpectedError(value:never) {
    throw new Error(`Unexpected value: ${value}`);
}




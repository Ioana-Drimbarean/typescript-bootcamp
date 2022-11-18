
import { Log, LoggingLevel, Performance } from "./02-method-decorator";
import { SealClass } from "./03-class-decorator";
import { DatabaseId } from "./04-property-decorators";
// Ts doesn not support multiple inheritance
// eg.: class A extends B, C => will trigger an error => need to find a alternative solution

@SealClass
class DbService {
    @Performance()
    @Log(LoggingLevel.INFO)
    saveData(data: any) {
        console.log(`>> The funtion that is decorated: saving data in the database...`);
    }
}

const db = new DbService();
db.saveData({ hello: "World" });

/**
 * Object.defineProperty(DbService, "sayHello", {
    TypeError: Cannot define property sayHello, object is not extensible
    at Function.defineProperty (<anonymous>)

Object.defineProperty(DbService, "sayHello",{
    value: () => {
        console.log("Hello World");
    }
});
 */

class Course {

    @DatabaseId()
    id: string;

    title: string;

    constructor(title: string) {
        this.title = title;
    }

    print(message: string) {
        console.log(`${message}, Course ${this.title}, id ${this.id}`);
    }
}

const course1 = new Course("Typescript Bootcamp");
console.log(`Course 1 id: `, course1.id);


const course2 = new Course("Angular Core In Depth");
console.log(`Course 2 id: `, course2.id);
console.log("Course 1", course1);
console.log("Course 2", course2);




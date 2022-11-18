
export function DatabaseId(): PropertyDecorator {
    // if static => the first arg will be the constructor function of the class
    return (classPrototype:any, propertyKey:string) => {
        Object.defineProperty(classPrototype, propertyKey, {
            get: function() {// use the function keyword in order to have the correct this context
                if (!this["_id"]) { // use _id intead id, otherwise you'll call the id geter function recursively
                    this["_id"] =
                        Date.now().toString(36) + Math.random().toString(36).slice(2);
                }
                return this["_id"];
            }
        });
    }
}

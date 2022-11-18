export enum LoggingLevel {
    ERROR,
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const appMaxLoggingLevel = LoggingLevel.INFO;

// The function name is with uppercase in order to indicate that this is a decorator
// In order to enable decorators we need to update the tsconfig file accordingly: "experimentalDecorators": true
// Log(level: LoggingLevel) => @Log(LoggingLevel.INFO)
export function Log(level: LoggingLevel): MethodDecorator {
    console.log(`Applying @Log Decorator`);

    // return a decorator factory function with type MethodDecorator
    return (target: any, propertyKey: string,
            descriptor: PropertyDescriptor) => { 
        console.log('target', target);
        console.log('propertyKey', propertyKey);
        console.log('descriptor', descriptor);
        /** e.g: called on saveData function will output:
         *  target { saveData: [Function (anonymous)] } => the JS prototype of the target class
            propertyKey saveData
            descriptor {
                value: [Function (anonymous)], 
                => e.g  originalFunction:
                saveData(data:any) {
                    console.log(`saving data in the database...`);
                }
                writable: true,
                enumerable: true,
                configurable: true
            }
         */

        const originalFunction = descriptor.value;

        descriptor.value = function(...args: any[])  {
            // console.log('Level: ', level);
            // console.log('appMaxLoggingLevel: ', appMaxLoggingLevel);

            if (level <= appMaxLoggingLevel) {
                console.log(`>> Log from decorator function: ${propertyKey}, ${JSON.stringify(args)}`);
            }
            originalFunction.apply(this, args);
        }
    }
}

export function Performance():MethodDecorator {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalFunction:Function = descriptor.value;

        descriptor.value = function(...args:any[]) {
            //before
            console.log(`started at ${new Date().getTime()}`);
            originalFunction.apply(this,args);
            //after
            console.log(`ended at ${new Date().getTime()}`);
        };
    }
}





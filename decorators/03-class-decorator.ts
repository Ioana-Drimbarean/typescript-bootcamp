// constructor function
/*
use @SealClass() 

export function SealClass(constructor: Function): ClassDecorator {
   return (constructor: Function) => {
      Object.seal(constructor);
      Object.seal(constructor.prototype);
   }
} 
<=>
simplifyed version (only if there are no arguments applyed to the decorator)
*/
export function SealClass(constructor: Function) {
   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
   Object.seal(constructor);
   Object.seal(constructor.prototype);
}

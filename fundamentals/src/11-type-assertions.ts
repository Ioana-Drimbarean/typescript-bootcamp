// Casting is the alternative to this type assertion syntax: const input = <HTMLInputElement>document.getElementById('input-field');
const input = document.getElementById('input-field') as HTMLInputElement;
//document.getElementById('input-field') => HTMLElement type => we can restrict it to HTMLInputElement
//(document.getElementById('input-field') as any) => extreme cases
input.value;

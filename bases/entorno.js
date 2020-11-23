let saludo = process.env.NOMBRE || 'SIN NOMBRE';
let web  = process.env.WEB || 'NO TENGO WEB';

console.log('HOLA ' + saludo);
console.log('MI WEB ES  ' + web);

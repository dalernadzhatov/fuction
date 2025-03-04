// 
//Задачи 

//Спросить у пользователя age и отправить в функцию
//18+ Впускаем
//18- Выгоняем
//Не цифра или меньше 0 - Дебил
 
// 2. // Спросить у пользователя a и b 
     // Отправить их в функцию
     // Функция выводит в консоли ответ с помощью методов
      //+ - / * ** % 
 
 //3.  Самое длинное имя в списке
//Отправляем функции три аргумента с разными именами
//Функция возвращает максимально длинное имя
//max_name('Alex', 'George', 'Michael')
 
 //4. Обратный инжиниринг с массивом
  //    функция сама понимает как найти мин
 //     не смотря какие параметры мы отправляем
 //     min(1, 2)
//min([1, 2])
//min({a: 1, b: 2})
//min({a: 1, b: 2}, {a: 11, b: 12}) 

//  5. Создать функцию которая делает пропорции не в   зависимости от каких  либо цифр
let c =prompt("ввидите число")
let a = aging(18)
let b = aging(0)

function aging(a,b) {
  if (aging>a) {
    return "выпускаем"
  }else if (a<b) {
    return "выгоняем"
  }else{
    return "дебил"
  }

}
console.log(aging);



function calculate(a, b) {
 alert(`${a} + ${b} = ${a + b}`);
  alert(`${a} - ${b} = ${a - b}`);
  alert(`${a} * ${b} = ${a * b}`);
  if (b !== 0) {
      console.log(`${a} / ${b} = ${a / b}`);
  } else {
      console.log("Деление на 0 невозможно");
  }
  alert(`${a} ** ${b} = ${a ** b}`);
 alert(`${a} % ${b} = ${a % b}`);
}


let d = prompt("Введите число a:");
let f = prompt("Введите число b:");

num1 = Number(d); 
num2 = Number(f);

console.log(Number);


function maxName(...names) {
  return names.reduce((max, current) => current.length > max.length ? current : max, "");
}


console.log(maxName('Alex', 'George', 'Michael'));


function findMin(...args) {
  if (args.length === 1 && (Array.isArray(args[0]) || typeof args[0] === 'object')) {
      return Math.min(...Object.values(args[0]));
  }
  return Math.min(...args);
}

console.log(findMin(1, 2));  

console.log(findMin("a: 1, b: 2"));  
function proportion(a, b) {
  if (b !== 0) {
      return a / b;
  } else {
      return "Деление на 0 невозможно";
  }
}


console.log(proportion(10, 2));  
console.log(proportion(10, 0));  

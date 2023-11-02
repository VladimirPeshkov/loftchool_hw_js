/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
  try {
    if (!Array.isArray(array)) {
      throw new Error("1 аргумент не является массивом");
    } else if (array.length == 0) {
      throw new Error("Массив должен содержать хотя бы один элемент");
    }
    for (let i = 0; i < array.length; i++) {
      fn(array[i], i, array);
    }
  } catch (e) {
    console.error(e.message);
  }
}

// forEach([1, 2, 3], (a) => console.log(a * a));

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  try {
    if (!Array.isArray(array)) {
      throw new Error("Первый аргумент должен быть массивом");
    } else if (array.length === 0) {
      throw new Error("Массив должен содержать минимум один элемент");
    }
    let resultArray = [];
    let resultArrayElem;
    for (let i = 0; i < array.length; i++) {
      resultArrayElem = fn(array[i], i, array);
      resultArray.push(resultArrayElem);
    }
    return resultArray;
  } catch (e) {
    console.error(e.message);
  }
}

// console.log(map([1, 2, 3], (elem) => elem * elem));

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
  try {
    if (!Array.isArray(array)) {
      throw new Error("Первый аргумент должен быть массивом");
    } else if (array.length === 0) {
      throw new Error("Массив должен содержать минимум один элемент");
    }
    let prev = initial ? initial : array[0];
    let i = initial ? 0 : 1;

    for (; i < array.length - 1; i++) {
      prev += fn(prev, array[i], i, array);
    }
    return prev;
  } catch (e) {
    console.error(e.message);
  }
}

console.log(reduce([1, 2, 3], (prevElem, curElem) => prevElem + curElem, 2));

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from, to) {}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {}

export { forEach, map, reduce, upperProps, slice, createProxy };

/**
 * 对象中包含了两个部分：
 *    属性
 *    方法
 */

class Person {
  /**
   * readonly 表示只读属性，无法修改
   */

  // 定义实例属性，需要通过对象的实例去访问
  name: string = '呆头灰鸟';

  // 在属性前使用static关键字可以定义类属性（静态属性），可以直接通过类去访问
  static readonly age: number = 23;

  // 定义方法
  /**
   * 如果方法以static开头则方法是类方法，可以直接通过类去访问
   */
  sayHello() {
    console.log('hello 鸟')
  }
}

const per = new Person;
console.log(per)
console.log(Person.age)
per.sayHello()
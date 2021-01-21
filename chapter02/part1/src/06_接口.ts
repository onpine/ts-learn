(function () {
  // 定义一个对象的类型
  type myType = {
    name: string,
    age: number
  };

  /**
   * 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
   *    同时接口也可以当成类型声明去使用
   */
  interface myInterface {
    name: string,
    age: number
  }

  interface myInterface {
    gander: string
  }

  const obj: myInterface = {
    name: 'jack',
    age: 23,
    gander: '男'
  }

  /**
   * 接口可以在定义类的时候限制类的结构
   *    接口中的所有属性都不能有实际的值
   *    接口只定义对象的接口，而不考虑实际值
   *    在接口中的所有方法都是抽象方法
   */
  interface myInter {
    name: string;

    sayHello(): void;
  }

  /**
   * 定义类时，可以用类实现一个接口
   *    实现接口就是使类满足接口的要求
   */
  class MyClass implements myInter {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('hello')
    }
  }

})();
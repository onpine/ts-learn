(function () {
  /**
   * 以abstract开头的类是抽象类
   *    抽象类和其他类差别不大，只是不能创建对象
   *    抽象类就是专门用来继承的类
   * 
   *    抽象类可以创建抽象方法
   */
  abstract class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    /**
     * 定义一个抽象方法
     * 抽象方法使用abstract开头，没有方法体
     * 抽象方法只能定义在抽象类中，子类必须对抽象类进行重写
     */
    abstract sayHello(): void;
  }

  class Dog extends Animal {

    sayHello() {
      // 在类的方法中super就代表当前类的父类
      console.log('汪汪汪');
    }
  }

  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵');
    }
  }

  const dog = new Dog('小白')
  dog.sayHello()
  const cat = new Cat('咪咪')
  cat.sayHello()
})();
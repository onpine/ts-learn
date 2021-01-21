(function () {
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('**叫~')
    }
  }

  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数，在子类中必须对父类的构造函数调用
      super(name);
      this.age = age
    }

    sayHello() {
      // 在类的方法中super就代表当前类的父类
      super.sayHello()
    }
  }

  const dog = new Dog('小白', 5)
  dog.sayHello()
})();
"use strict";
(function () {
    /**
     * 以abstract开头的类是抽象类
     *    抽象类和其他类差别不大，只是不能创建对象
     *    抽象类就是专门用来继承的类
     *
     *    抽象类可以创建抽象方法
     */
    class Animal {
        constructor(name) {
            this.name = name;
        }
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
    const dog = new Dog('小白');
    dog.sayHello();
    const cat = new Cat('咪咪');
    cat.sayHello();
})();

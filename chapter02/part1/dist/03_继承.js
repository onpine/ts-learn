"use strict";
(function () {
    // 定义Animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('**叫~~~~');
        }
    }
    /**
     * Dog extends Animal
     *  - 此时，Animal被称为父类，Dog被称为子类
     *  - 子类继承用有了父类的所有方法和属性
     *      可以让所有的子类都可以获得父类的的方法和属性
     *      如果希望在子类中添加一些父类中没有的方法或属性可以直接在子类中直接加
     *  - 如果在子类中添加了和父类相同的方法，则子类的方法会覆盖父类的方法
     *      这种子类覆盖父类方法的形式，我们称为方法重写
     */
    class Dog extends Animal {
        run() {
            console.log(`${this.name}在跑~`);
        }
        sayHello() {
            console.log("汪汪汪");
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵");
        }
    }
    const dog1 = new Dog('小白', 5);
    const cat1 = new Cat('咪咪', 5);
    console.log(dog1);
    dog1.sayHello();
    dog1.run();
    console.log(cat1);
    cat1.sayHello();
})();

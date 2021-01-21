"use strict";
class Dog {
    // constructor构造函数
    // 会在函数创建时调用
    constructor(name, age) {
        // this在实例方法中表示当前实例
        this.name = name;
        this.age = age;
    }
    back() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log(this.name);
    }
}
const dog1 = new Dog('小白', 5);
dog1.back();

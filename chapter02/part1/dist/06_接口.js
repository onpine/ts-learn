"use strict";
(function () {
    const obj = {
        name: 'jack',
        age: 23,
        gander: '男'
    };
    /**
     * 定义类时，可以用类实现一个接口
     *    实现接口就是使类满足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
})();

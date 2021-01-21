"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /**
         * getter方法用来读取属性
         * setter方法用来设置属性
         *  它们被称为属性的存储器
         */
        // // 定义方法，用来获取name属性
        // getName() {
        //   return this._name;
        // }
        // // 定义方法，用来设置name属性
        // setName(value: string) {
        //   this._name = value
        // }
        // getAge() {
        //   return this._age;
        // }
        // setAge(value: number) {
        //   if (value > 0) {
        //     this._age = value
        //   }
        // }
        // TS中设置getter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value > 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("鸟", 23);
    per.name = "呆头";
    per.age = 20;
    console.log(per);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // b.num = 333;
    // 下面两种方法是一样的
    // class C{
    //   name: string;
    //   age: number;
    //   constructor(public name: string, public age: number) {
    //     this.name = name;
    //     this.age = age;
    //   }
    // }
    class C {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('jack', 23);
    console.log(c);
})();

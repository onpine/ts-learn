// function fn(a: any): any {
//   return a;
// }

/**
 * 再定义函数或者类时，如果遇到类型不明确的就可以使用泛型
 */
function fn<T>(a: T): T {
  return a;
}

// 可以直接调用具有泛型的函数
let result = fn(12);  //不指定泛型，TS可以自动对类型进行推断
let result2 = fn<string>("hello"); //指定泛型

function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}
fn2<number, string>(123, "hello");

interface Inter {
  length: number;
}
// T extends Inter 表示泛型T类型必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
  return a.length
}
// let l = fn3({ length: 3 });

class MyClass<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}
const mc = new MyClass<string>("jack");
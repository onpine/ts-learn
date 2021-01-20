// object
let a40: object;
a40 = { name: 'njkd' }

// {}用来指定对象中可以包含哪些属性
// 语法： {属性名: 属性值, 属性名: 属性值}
// 属性名后面加？表示属性是可选的
let a4: { name: string, age?: number }
a4 = { name: 'jack' }
a4 = { name: 'jack', age: 23 }

// [propName: string]: any 表示任意类型的属性
let b4: { name: string, [propName: string]: any }
b4 = { name: 'jack' }
b4 = { name: 'jack', age: 23, sex: 'x' }

/**
 * 设置函数结构的类型声明：
 *  语法：(形参: 类型, 形参: 类型, ...) => 返回值类型
 */
let fn4: (x: number, y: number) => number;
fn4 = function (x: number, y: number): number {
  return x + y
}
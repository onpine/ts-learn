// 使用字面量定义变量
let a3: 10;
a3 = 10;

// 使用 | 符号连接多个类型
let b3: string | number;
b3 = 20;
b3 = '20';

// any 任意类型 开发不建议使用
let c3: any;
c3 = true;
c3 = 78
// 声明变量不指定类型，TS解析器自动判断变量的类型为 any (隐式的any)
let c31;
c31 = 'aa';

// unknown 未知类型变量
let d3: unknown
d3 = 23;
d3 = '23';
d3 = false;

// any类型的变量可以赋值给其他任意类型的变量
// unknown与any的不同是不能直接赋值给其他类型的变量，实际是一个类型安全的any
b3 = c3
if (typeof d3 === 'string') {
  b3 = d3
}

// 类型断言
b3 = b3 as string
b3 = <string>b3

// void 值为空，undefined或没有值
function fn3(): void {
}

// never 没有值
function fn31(): never {
  throw new Error('报错了！')
}

/**
 * 数组的类型声明
 *   类型[]
 *   Array<类型>
 */
let e4: string[];
e4 = ['abc', 'bnc', 'sdfdf']
let f4: Array<number>;
f4 = [23, 34, 45]

// tuple元组， 是长度固定的数组
// [类型, 类型, ...]
let h4: [string, number]
h4 = ['abc', 123]

// enum 枚举
enum Gander {
  Male = 1,
  Female = 2
}
let i4: { name: string, gander: Gander }
i4 = {
  name: 'jack',
  gander: Gander.Male
}

// & 表示同时
let j4: { name: string } & { age: number }
j4 = { name: 'jack', age: 23 }

// 类型别名
type myType = 1 | 2 | 3 | 4 | 5;
let k4: myType;
let l4: myType;
k4 = 3;
l4 = 2;
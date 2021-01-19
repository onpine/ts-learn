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
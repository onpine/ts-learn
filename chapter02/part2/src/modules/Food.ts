// 定义类
class Food {
  // 定义一个属性表示事物所对应的元素
  element: HTMLElement;

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!;
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft;
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop;
  }

  // 修改食物位置
  change() {
    // 生成随机的位置
    // 食物位置最小0，最大290
    this.element.style.left = Math.round(Math.random() * 29) * 10 + 'px';
    this.element.style.top = Math.round(Math.random() * 29) * 10 + 'px';
  }
}

export default Food;
class Snake {
  // 表示蛇头元素
  head: HTMLElement;
  // 蛇的身体（包括蛇头）
  bodies: HTMLCollection;
  // 获取蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div') as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }

  // 获取蛇的坐标（）蛇头坐标
  get X() {
    return this.head.offsetLeft;
  }

  // 设置蛇的Y坐标
  get Y() {
    return this.head.offsetTop;
  }

  // 设置蛇头的坐标
  set X(value: number) {
    // 如果新值和就值相等，则直接返回不再修改
    if (this.X === value) {
      return;
    }
    // X的值在合法范围0-290内
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！')
    }

    // 修改X时，是在修改水平坐标，蛇在左右移动，蛇在向左移动时，不能向右掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      // 发生了掉头，让蛇反方向移动
      if (value > this.X) {
        // 如果新值value大于旧值X，说明此时蛇在向右走，应禁止并让其向左走
        value = this.X - 10;
      } else {
        // 让其向右走
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();
    this.head.style.left = value + 'px';
    // 检查有没有撞到自己
    this.checkHeadBody();
  }
  set Y(value: number) {
    // 如果新值和就值相等，则直接返回不再修改
    if (this.Y === value) {
      return;
    }
    // Y的值在合法范围0-290内
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！')
    }

    // 修改Y时，是在修改垂直坐标，蛇在上下移动，蛇在向上移动时，不能向下掉头，反之亦然
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      // 发生了掉头，让蛇反方向移动
      if (value > this.Y) {
        // 如果新值value大于旧值X，说明此时蛇在向下走，应禁止并让其向上走
        value = this.Y - 10;
      } else {
        // 让其向下走
        value = this.X + 10;
      }
    }

    // 移动身体
    this.moveBody();
    this.head.style.top = value + 'px';
    // 检查有没有撞到自己
    this.checkHeadBody();
  }

  // 添加蛇的身体
  addBody() {
    // 像element里添加元素
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  // 添加一个蛇身体移动的方法
  moveBody() {
    /**
     * 将后面的节点设置为前一个节点的位置
     */
    // 倒序遍历所有身体
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前一个身体位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }

  // 检查蛇头是否撞到身体
  checkHeadBody() {
    // 获取所有的身体，检车是否和蛇头的坐标重叠
    for (let i = 1; i < this.bodies.length; i++) {
      let bd = this.bodies[i] as HTMLElement;
      if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
        // 蛇头撞到了身体，游戏结束
        throw new Error('撞到自己了！');
      }
    }
  }
}

export default Snake;
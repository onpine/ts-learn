// 定义记分牌的类
class ScorePanel {
  score = 0;
  level = 1;

  // 分数和等级元素，在构造函数初始化
  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  // 设置限制等级
  maxLevel: number;
  // 表示多少分升一级
  upScore: number;

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.getElementById('score')!;
    this.levelEle = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  // 设置加分方法
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    // 判断分数多少
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 提升等级的方法
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }

}

export default ScorePanel;
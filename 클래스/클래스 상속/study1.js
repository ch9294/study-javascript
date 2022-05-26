Gclass Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    console.log(`${this.name}은/는 속도 ${this.speed}로 달립니다.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name}이/가 멈췄습니다.`);
  }
}

let animal = new Animal("고릴라");

animal.run(30);
animal.stop();


class Rabbit extends Animal {
    hide(){
        console.log(`${this.name}이/가 숨었습니다!`);
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name}이/가 짖습니다!`);
    }
}

const condition = (judge) => {
    if(judge){
        return Rabbit;
    }else {
        return Dog;
    }
}
class MyToy extends condition(true) {

}
let rabbit = new Rabbit("개빠른토끼");
rabbit.hide();



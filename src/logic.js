class Friend {
  constructor(name) {
    this.name = name;
    this.hungerLevel = 10;
    this.moodLevel = 10;
    this.energyLevel = 20;
  }

  getHungry() {
    setInterval(() => {
      this.hungerLevel--;
      }, 1000);
    }

  getBored() {
    setInterval(() => {
      this.moodLevel--;
      }, 1000);
    }
  }
export { Friend };

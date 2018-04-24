import { Friend } from './../src/logic.js';

describe('friend', function() {
  let newFriend = new Friend('Tommi');

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should find a name and hunger level, mood level, and energy level', function() {
    expect(newFriend.name).toEqual('Tommi');
    expect(newFriend.hungerLevel).toEqual(10);
    expect(newFriend.moodLevel).toEqual(10);
    expect(newFriend.energyLevel).toEqual(20);
  });

  it('should reduce foodLevel by one every second', function() {
    newFriend.getHungry();
    jasmine.clock().tick(2001);
    expect(newFriend.hungerLevel).toEqual(8);
  });

  it('should reduce moodLevel by one every second', function() {
    newFriend.getBored();
    jasmine.clock().tick(2001);
    expect(newFriend.moodLevel).toEqual(8);
  });

  it('should reduce energyLevel by one every second', function() {
    newFriend.getTired();
    jasmine.clock().tick(2001);
    expect(newFriend.energyLevel).toEqual(18);
  });
});

describe('friend', function() {
  let newFriend = new Friend('Tommi');

  beforeEach(function() {
    newFriend.hungerLevel = 10;
    newFriend.moodLevel = 10;
    newFriend.energyLevel = 20;
  });

  it('should increase hungerLevel by 3 and increase energyLevel by 3', function() {
    newFriend.feed();
    expect(newFriend.hungerLevel).toEqual(13);
    expect(newFriend.energyLevel).toEqual(23);
  });

  it('should increase moodLevel by 3 and decrease hunger level by 3', function() {
    newFriend.play();
    expect(newFriend.moodLevel).toEqual(13);
    expect(newFriend.energyLevel).toEqual(17);
  });

  it('should get 5 energies back when it sleeps', function() {
    newFriend.sleep();
    expect(newFriend.energyLevel).toEqual(25);
    expect(newFriend.hungerLevel).toEqual(8);
  });
});

describe('friend', function() {
  let newFriend = new Friend('Tommi');

  beforeEach(function() {
    newFriend.hungerLevel = 0;
    newFriend.moodLevel = 3;
    newFriend.energyLevel = 5;
  });

  it('should return true if any levels reach 0', function() {
    newFriend.dead();
    expect(newFriend.hungerLevel).toEqual(0);
    expect(newFriend.moodLevel).toEqual(3);
    expect(newFriend.energyLevel).toEqual(5);
    expect(newFriend.dead()).toEqual(true);
  });
});

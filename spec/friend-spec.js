import { Friend } from './../src/logic.js';

describe('friend', function() {
  let newFriend = new Friend('Tommi');


  beforeEach(function() {
    jasmine.clock().install();
    newFriend.getHungry();
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
    jasmine.clock().tick(2001);
    expect(newFriend.hungerLevel).toEqual(8);
  });

});
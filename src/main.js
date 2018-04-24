import { Friend } from './logic';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("#user-input").submit(function(event){
    event.preventDefault();
    let name = $("#name-input").val();
    let newFriend = new Friend(name);
    newFriend.getHungry();
    newFriend.getBored();
    newFriend.getTired();

    $(".form-div").hide();
    $(".output").show();
    $(".buttons").show();
    $("#name-output").text(newFriend.name);
    $("#hunger-output").text(newFriend.hungerLevel);
    $("#mood-output").text(newFriend.moodLevel);
    $("#energy-output").text(newFriend.energyLevel);


    $("#feed-btn").click(function() {
      newFriend.feed();
      $('#hunger-output').text(newFriend.hungerLevel);
      $("#energy-output").text(newFriend.energyLevel);
    });

    $("#play-btn").click(function() {
      newFriend.play();
      $('#mood-output').text(newFriend.moodLevel);
      $("#energy-output").text(newFriend.energyLevel);
    });

    $("#sleep-btn").click(function() {
      newFriend.sleep();
      $('#energy-output').text(newFriend.energyLevel);
      $("#hunger-output").text(newFriend.hungerLevel);
    });
    setInterval(() => {
      $("#hunger-output").text(newFriend.hungerLevel);
      if (newFriend.hungerLevel <= 0) {
        $("#hunger-output").text("Your friend died of starvation!");
      }
    }, 1000);
    setInterval(() => {
      $('#mood-output').text(newFriend.moodLevel);
      if (newFriend.moodLevel <= 0) {
        $('#mood-output').text("Your friend died because it had a bad outlook on life.");
      }
    }, 1000);

    setInterval(() => {
      $('#energy-output').text(newFriend.energyLevel);
      if (newFriend.energyLevel <= 0) {
        $("#energy-output").text("your friend needs a nap.");
      }
    }, 1000);

  });
});

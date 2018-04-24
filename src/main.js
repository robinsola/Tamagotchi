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

    console.log(newFriend);

  });
});

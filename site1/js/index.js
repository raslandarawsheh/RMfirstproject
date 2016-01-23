$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});

$('#loginform').click(function(){
  $('.login').fadeToggle('slow');
  $(this).toggleClass('green');
});

$('#signupform').click(function(){
  $('.signup').fadeToggle('slow');
  $(this).toggleClass('green');
});

$(document).mouseup(function (e)
{
    var logincontainer = $(".login");
	var signupcontainer = $(".signup");
	
    if (!logincontainer.is(e.target) // if the target of the click isn't the container...
        && logincontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        logincontainer.hide();
        $('#loginform').removeClass('green');
    }
    
    if (!signupcontainer.is(e.target) // if the target of the click isn't the container...
        && signupcontainer.has(e.target).length === 0) // ... nor a descendant of the container
    {
        signupcontainer.hide();
        $('#signupform').removeClass('green');
    }
});
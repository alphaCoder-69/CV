function loadingfunc() {
  let randVar = setTimeout(showPage, 2000);
}

function showPage() {
  $("#loader").css("display", "none");
  $("#displayPage").css("display", "block");
}

/* Carousel Slider */

$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true /*Set this property to true*/,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  animateOut: "fadeOut",
  margin: 80,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

/*
  Making a smooth scrolling effect
*/

$("#link-1").click(() => {
  $("html,body").animate({ scrollTop: $("#about-me").offset().top }, 1000);
});
$("#link-2").click(() => {
  $("html,body").animate({ scrollTop: $("#education").offset().top }, 1000);
});
$("#link-3").click(() => {
  $("html,body").animate({ scrollTop: $("#skills").offset().top }, 1000);
});
$("#link-4").click(() => {
  $("html,body").animate({ scrollTop: $("#projects").offset().top }, 1000);
});
$("#link-5").click(() => {
  $("html,body").animate({ scrollTop: $("#contact-me").offset().top }, 1000);
});

/*

var refer = firebase.database().ref("info");

// Control function
function sendRes(e) {
  e.preventDefault();
  var firstName = getVal("a");
  var lastName = getVal("b");
  var email = getVal("c");
  var message = getVal("d");

  pushmsg(firstName, lastName, email, message);
}

// Function for getting form values
function getVal(id) {
  let gotData = document.getElementById(id).value;
  return gotData;
}

// Function for pushing data to firebase
function pushmsg(firstName, lastName, email, message) {
  var finalSubmit = refer.push();
  finalSubmit.set(
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    },
    (err) => {
      if (err) {
        var failure = document.getElementsByClassName("failure");
        failure[0].style.display = "inline-block";
      } else {
        var success = document.getElementsByClassName("success");
        success[0].style.display = "inline-block";
      }
    }
  );
}*/

var BAR = new ProgressBar.Line(PRO, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 18000,
  color: '#ff0000',
  trailColor: '#000',
  trailWidth: 2,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#999',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, BAR) => {

    var CUR = Math.round(BAR.value() * 100);

    console.log("xD " + CUR)

    var TEX = "";

    if (CUR < 8) {
      TEX = "Connecting with your YouTube account...";
    } else if (CUR >= 8 && CUR < 32) {
      TEX = "Adding YouTube Premium...";
    } else if (CUR >= 32 && CUR < 64) {
      TEX = "Deleting generation traces...";
    } else if (CUR >= 64 && CUR < 96) {
      TEX = "Saving all changes...";
    } else if (CUR >= 96) {
      TEX = "Error, bot detected! Pass human verification to continue. After you're done your account will have Premium membership.";
    }

    BAR.setText(TEX);

  }
});

function YTP() {
  $(".YTP-button").addClass("disabled").attr("disabled", "true");
  $(".S1").fadeOut(2000);
  setTimeout(function() {
    $(".S2").fadeIn(2000);
  }, 2000)
}

function CON() {

  var EMAIL = $("#YTemail").val();

  var LENG = $("#YTlength").val();

  if (EMAIL.includes("@") && LENG) {
    //$("#YTlength").attr("readonly", "true");
    $(".CON-button").addClass("disabled").attr("disabled", "true");
    $(".S2").fadeOut(2000);

    setTimeout(function() {
      $(".S3").fadeIn(2000);
      BAR.animate(1);
    }, 2000)

    setTimeout(function() {
      $(".VER-button").fadeIn(2000);
    }, 20000)

  } else {
    alert("Make sure you typed in correct Email address and chose your free YouTube Premium duration.")
  }

}
 
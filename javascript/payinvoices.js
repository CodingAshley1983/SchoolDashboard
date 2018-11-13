//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyAzLuXMlFXEt3-fUHbaF5BxNpb2_aJNw-Q",
//     authDomain: "payinvoices-9d71a.firebaseapp.com",
//     databaseURL: "https://payinvoices-9d71a.firebaseio.com",
//     projectId: "payinvoices-9d71a",
//     storageBucket: "payinvoices-9d71a.appspot.com",
//     messagingSenderId: "767219632605"
//   };
//   firebase.initializeApp(config);

//show password modal when pay button is clicked

  $(".payBtn" ).on("click", function() {
      $(".modal").show();
  });

  //hide modal when 'submit' is clicked
  
  $("#submitBtn").on("click", function(){
    $(".modal").hide();
  });
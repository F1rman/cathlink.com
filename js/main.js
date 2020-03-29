var app = angular.module("Artmoney", ['ngMaterial','ngAnimate' ]);
app.controller("Global", function($scope, $rootScope, $mdDialog) {


  $scope.config = {
    apiKey: "AIzaSyANByuaeDUXVVc9FxXt522AvKj-sbytUCA",
    authDomain: "dostavymo-b160d.firebaseapp.com",
    databaseURL: "https://dostavymo-b160d.firebaseio.com",
    projectId: "dostavymo-b160d",
    storageBucket: "dostavymo-b160d.appspot.com",
    messagingSenderId: "390587806668",
    appId: "1:390587806668:web:5ab15e74588b1ad65f2369",
    measurementId: "G-GJ7TCLH5QR"
  };

  // Initialize Firebase
  firebase.initializeApp($scope.config);
  var messagesRef = firebase.database().ref('links');
  $scope.data =
    {
      sitename:'CatchLink'
    }

  $scope.showPrompt = function(ev) {
     // Appending dialog to document.body to cover sidenav in docs app
     var confirm = $mdDialog.prompt()
       .title('What would you name your dog?')
       .textContent('Bowser is a common name.')
       .placeholder('Dog name')
       .ariaLabel('Dog name')
       .initialValue('Buddy')
       .targetEvent(ev)
       .required(true)
       .ok('Okay!')
       .cancel('I\'m a cat person');

     $mdDialog.show(confirm).then(function(result) {
       $scope.status = 'You decided to name your dog ' + result + '.';
     }, function() {
       $scope.status = 'You didn\'t name your dog.';
     });
   };

   function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }
    // $.get('https://node.verblike.com/mail', {
    //   body: ['https://cathlink.com/', hi],
    //   to: 'ihorkharchyshyn@gmail.com'
    // }, function() {
    //   console.log('ok');
    // });

    // var newMessageRef = messagesRef.push();
    // newMessageRef.set({
    //   order: $scope.order,
    //   phone: $scope.data.mobile,
    //   name: $scope.data.name
    // });


  // messagesRef.on('value', function(snapshot) {
  //   snapshot.forEach(function(childSnapshot) {
  //     var childData = childSnapshot.val();
  //     // console.log(childData);
  //   });
  // });
});

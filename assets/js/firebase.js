$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBIbcdYdVCPRVE4d1vTOl4IBKIrghLtKCg",
        authDomain: "my-website-c5c41.firebaseapp.com",
        databaseURL: "https://my-website-c5c41.firebaseio.com",
        projectId: "my-website-c5c41",
        storageBucket: "",
        messagingSenderId: "974593829471"
    };

    firebase.initializeApp(config);
    database = firebase.database();


    // get elements

    const txtEmail = $('#txtEmail');
    const txtPassword = $('#txtPassword');
    const btnLogin = $('#btnLogin');
    const btnLogout = $('#btnLogout');
    var newKey;
    var newArray = [];

    // login button

    $("#btnLogin").on('click', e => {
        const email = txtEmail.val();
        const pass = txtPassword.val();
        const auth = firebase.auth();



        // Sign in

        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user) {

            // user signed in

             $('#modal1').modal('hide');
             

        }).catch(function(error) {

            $('.pwdIncorrect').removeClass('pwdIncorrect');
        });

    });

    // logout button

    $("#btnLogout").on('click', e => {
        firebase.auth().signOut();
    });




    // Posting Jobs function

    $('#post').on('click', event => {
        event.preventDefault();
        $('.jobAppend').html('');
        var title = $("#positionTitle").val().trim();
        var details = $("#positionDetails").val().trim();
        $("#positionDetails").val('');
        $("#positionTitle").val('');


        firebase.database().ref('post').push({
            title,
            details,
        });

    });

    var ref = database.ref('post');
    ref.on('value', gotData);

    // Naving through objects

    function gotData(data) {
        $(".avalibleJobs").html('');
        var post = data.val();
        var keys = Object.keys(post);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var posts = {
                title: " " + post[k].title + " ",
                details: " " + post[k].details,
                id: post[k]
            }

            newKey = keys[i];

            // formating the paragraphs, could not do it dynamically 
         

            // appending delete buttons and storing key ids into button values and clearing var newArray

            $(".jobAppend").append(

                "<div class='row add-job-input posted text-center'>" +
                "<div class='col-md-4'>" +
                "<h4 class='titleHeader'>Title</h4>" +
                "<p class='titleHeader'>" + posts.title + "</p>" +
                "</div>" +
                "<div class='col-md-4 text-center'>" +
                "<h4 class='detailsHeader'>details</h4>" +
                "<p class='job-details text-center'>" + posts.details + "</p>" +
                "</div>" +

                "<div class='col-md-4 admin-buttons'>" +
                "<button class='btn btn-danger deletePost' type='button' value= '" + newKey + "'>" + " delete" + "</button>" +
                "</div>" +
                "</div>"

            );

            // posting to the positions avalible page

            $(".avalibleJobs").append(
                "<div class='col-md-6 col-sm-6 waves-effect kolom-a colPositions'>" +
                "<div class='fitur-a'></div>" +

                "<h4 class='postHeading text-center'>" + posts.title + "</h4>" +
                "<div class='seperator'></div>" +
                "<div>" +
                "<div class'paragraph1'>" +
                " <p class='paragraf-fitur text-center'> " + posts.details + " </p>" +
                "</div>" +
                "</div>" +
                "<div class='text-center'>" +
                "<button class='btn btn-info apply'>Apply Now</button>" +
                "</div>" +
                "</div>"
            );

        }

    }
    $(".clickHere").on("click", function() {
        $(".avalibleJobs").html('');
    });
    // Delete Post      

    $('.jobAppend').on('click', '.deletePost', function() {
        $('.jobAppend').html('');
        $(".avalibleJobs").html('');
        var deleteRef = firebase.database().ref('post').child(this.value);
        deleteRef.remove();

    });


    // add listner for users true/false 

    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            console.log(firebaseUser);

            $(".btnAddPosition").show();
            



        } else {

            $(".btnAddPosition").hide();

        }

    });

});
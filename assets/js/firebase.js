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
                "<a <button href='application.html' class='btn btn-info apply'>Apply Now</button>" +
                "</div></a>" +
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

        // getting user information from application

    $(".submitApplication").on('click', function(){

        //general
        firstName = $('#firstName').val().trim();
        lastName = $('#lastName').val().trim();
        mi = $('#mi').val().trim();
        date = $('#date').val().trim();
        streetAddress = $('#streetAddress').val().trim();
        aptNumber = $('#aptNumber').val().trim();
        city = $('#city').val().trim();
        state = $('#state').val().trim();
        zip = $('#zip').val().trim();
        phoneNumber = $('#phoneNumber').val().trim();
        emailAddress = $('#emailAddress').val().trim();
        dateAvailable = $('#dateAvailable').val().trim();
        ssNumber = $('#ssNumber').val().trim();
        desiredSalary = $('#desiredSalary').val().trim();
        positionApplying = $('#positionApplying').val().trim();
        workedHere = $('#workedHere').val().trim();

// 1 job history
        job1 = $('#job1').val().trim();
        job1Number = $('#job1Number').val().trim();
        job1Address = $('#job1Address').val().trim();
        job1Supervisor = $('#job1Supervisor').val().trim();
        job1Title = $('#job1Title').val().trim();
        job1StartingSalary = $('#job1StartingSalary').val().trim();
        job1EndingSalary = $('#job1EndingSalary').val().trim();
        job1Start = $('#job1Start').val().trim();
        job1End = $('#job1End').val().trim();
        job1Reason = $('#job1Reason').val().trim();
// 2 job hostory

        job2 = $('#job2').val().trim();
        job2Number = $('#job2Number').val().trim();
        job2Address = $('#job2Address').val().trim();
        job2Supervisor = $('#job2Supervisor').val().trim();
        job2Title = $('#job2Title').val().trim();
        job2StartingSalary = $('#job2StartingSalary').val().trim();
        job2EndingSalary = $('#job2EndingSalary').val().trim();
        job2Start = $('#job2Start').val().trim();
        job2End = $('#job2End').val().trim();
        job2Reason = $('#job2Reason').val().trim();
// 3 job hostory
        job3 = $('#job3').val().trim();
        job3Number = $('#job3Number').val().trim();
        job3Address = $('#job3Address').val().trim();
        job3Supervisor = $('#job3Supervisor').val().trim();
        job3Title = $('#job3Title').val().trim();
        job3StartingSalary = $('#job3StartingSalary').val().trim();
        job3EndingSalary = $('#job3EndingSalary').val().trim();
        job3Start = $('#job3Start').val().trim();
        job3End = $('#job3End').val().trim();
        job3Reason = $('#job3Reason').val().trim();

// education

// high school
        highSchool = $('#highSchool').val().trim();
        highSchoolAddress = $('#highSchoolAddress').val().trim();
        highFrom = $('#highFrom').val().trim();
        highTo = $('#highTo').val().trim();
        highDegree = $('#highDegree').val().trim();
// college 
        college = $('#college').val().trim();
        collegeAddress = $('#collegeAddress').val().trim();
        collegeFrom = $('#collegeFrom').val().trim();
        collegeTo = $('#collegeTo').val().trim();
        collegeDegree = $('#collegeDegree').val().trim();
// other
        other = $('#other').val().trim();
        otherAddress = $('#otherAddress').val().trim();
        otherFrom = $('#otherFrom').val().trim();
        otherTo = $('#otherTo').val().trim();
        otherDegree = $('#otherDegree').val().trim();

 //ref 1      
        ref1 = $('#ref1').val().trim();
        ref1Rel = $('#ref1Rel').val().trim();
        ref1Company = $('#ref1Company').val().trim();
        ref1Phone = $('#ref1Phone').val().trim();
        ref1Address = $('#ref1Address').val().trim();
// ref 2
        ref2 = $('#ref2').val().trim();
        ref2Rel = $('#ref2Rel').val().trim();
        ref2Company = $('#ref2Company').val().trim();
        ref2Phone = $('#ref2Phone').val().trim();
        ref2Address = $('#ref2Address').val().trim();

        ref3 = $('#ref3').val().trim();
        ref3Rel = $('#ref3Rel').val().trim();
        ref3Company = $('#ref3Company').val().trim();
        ref3Phone = $('#ref3Phone').val().trim();
        ref3Address = $('#ref3Address').val().trim();
// radio buttons
        var radioValue = $("input[name='options']:checked").val();
       var radioValue1 = $("input[name='options1']:checked").val();
       var radioValue2 = $("input[name='options2']:checked").val();
       var radioValue3 = $("input[name='options3']:checked").val();
       var radioValue4 = $("input[name='options4']:checked").val();
       var radioValue5 = $("input[name='options5']:checked").val();
       var radioValue6 = $("input[name='options6']:checked").val();
       var radioValue7 = $("input[name='options7']:checked").val();
       var radioValue8 = $("input[name='options8']:checked").val();
       var radioValue9 = $("input[name='options9']:checked").val();
       var radioValue10 = $("input[name='options10']:checked").val();



// console logging user information

        console.log("First Name: " + firstName);
        console.log("Last Name: " + lastName);
        console.log("M.I.: " + mi);
        console.log("Date: " + date);
        console.log("Street address:" + streetAddress);
        console.log("Apt#: " + aptNumber);
        console.log("City: " +city);
        console.log("state: " +state);
        console.log("zip: " +zip);
        console.log("phoneNumber: " +phoneNumber);
        console.log("emailAddress: " +emailAddress);
        console.log("dateAvailable: " +dateAvailable);
        console.log("SS#: " +ssNumber);
        console.log("DesiredSalary: " +desiredSalary);
        console.log("Position Applying for: " +positionApplying);


        console.log("US citizen ? " + radioValue);
        console.log("Authorized to work in US ? " + radioValue1);
        console.log("Ever worked for this company ? " + radioValue2);
        console.log("When did you work here ? " + workedHere);
        console.log("Valid drivers license ? " + radioValue3); 


    // job history 1

        console.log("Company: " + job1);
        console.log("Number: " + job1Number);
        console.log("Address: " + job1Address);
        console.log("Supervisor: " + job1Supervisor);
        console.log("Title: " + job1Title);
        console.log("Starting pay: " + job1StartingSalary);
        console.log("Ending pay:  " + job1EndingSalary);
        console.log("From: " + job1Start);
        console.log("To: " + job1End);
        console.log("Reason for leaving: " + job1Reason);
        console.log("Can we contact first ref ? " + radioValue4);

    // job history 2
        console.log("Company: " + job2);
        console.log("Number: " + job2Number);
        console.log("Address: " + job2Address);
        console.log("Supervisor: " + job2Supervisor);
        console.log("Title: " + job2Title);
        console.log("Starting pay: " + job2StartingSalary);
        console.log("Ending pay:  " + job2EndingSalary);
        console.log("From: " + job2Start);
        console.log("To: " + job2End);
        console.log("Reason for leaving: " + job2Reason);
        console.log("Can we contact second ref ? " + radioValue5);
    // job hostory 3
        console.log("Company: " + job3);
        console.log("Number: " + job3Number);
        console.log("Address: " + job3Address);
        console.log("Supervisor: " + job3Supervisor);
        console.log("Title: " + job3Title);
        console.log("Starting pay: " + job3StartingSalary);
        console.log("Ending pay:  " + job3EndingSalary);
        console.log("From: " + job3Start);
        console.log("To: " + job3End);
        console.log("Reason for leaving: " + job3Reason);
        console.log("Can we contact third ref ? " + radioValue6);
        
   


       // education

        console.log("High School: " + highSchool);
        console.log("Address: " + highSchoolAddress); 
        console.log("From: " + highFrom );
        console.log("To: " + highTo); 
        console.log("Degree: " + highDegree); 
        console.log("Did you graduate High School ? " + radioValue7);

        console.log("College: " + college);
        console.log("Address: " + collegeAddress);
        console.log("From: " + collegeFrom);
        console.log("To: " + collegeTo); 
        console.log("Degree: " + collegeDegree); 
        console.log("Did you graduate from college ? " + radioValue8);

        console.log("Other: " + other); 
        console.log("Address: " + otherAddress); 
        console.log("From: " + otherFrom); 
        console.log("To: " + otherTo); 
        console.log("Degree/Cert: " + otherDegree);
        console.log("Did you graduate from other ? " + radioValue9); 

       

        // references
    // ref 1
        console.log("Name: " + ref1); 
        console.log("Relationship: " + ref1Rel);
        console.log("Company: " + ref1Company); 
        console.log("Phone: " + ref1Phone); 
        console.log("Address: " + ref1Address); 
    // ref 2
        console.log("Name: " + ref2); 
        console.log("Relationship: " + ref2Rel);
        console.log("Company: " + ref2Company); 
        console.log("Phone: " + ref2Phone); 
        console.log("Address: " + ref2Address); 
    // ref 3
        console.log("Name: " + ref3); 
        console.log("Relationship: " + ref3Rel);
        console.log("Company: " + ref3Company); 
        console.log("Phone: " + ref3Phone); 
        console.log("Address: " + ref3Address);


       console.log("discloser " + radioValue10);
     

       
       
        

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
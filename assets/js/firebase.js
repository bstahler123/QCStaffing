$(document).ready(function() {



       $('.carousel').carousel({
   interval: 7000
  });

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
            console.log("there is an error");

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

     $(".appDiv").on('click', '.printApp', function(){ 
          
               console.log("hello");


            });

    // getting user information from application

    $("#test").on('submit', event => {
        event.preventDefault();

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


       
    field1 =  "First Name: " + firstName;
    field2 = "Last Name: " + lastName;
    field3 =  "M.I.: " + mi;
    field4 = "Date: " + date;
    field5 =   "Street address:" + streetAddress;
    field6 = "Apt#: " + aptNumber;
    field7 =  "City: " + city;
    field8 =  "state: " + state;
    field9 =  "zip: " + zip;
    field10 =    "phoneNumber: " + phoneNumber;
    field11 =   "emailAddress: " + emailAddress;
    field12 =    "dateAvailable: " + dateAvailable;
    field13 =   "SS#: " + ssNumber;
    field14 =    "DesiredSalary: " + desiredSalary;
    field15 =   "Position Applying for: " + positionApplying;

    field16 = "US citizen ? " + radioValue;
    field17 = "Authorized to work in US ? " + radioValue1;
    field18 = "Ever worked for this company ? " + radioValue2;
    field19 = "When did you work here ? " + workedHere;
     field20 = "Valid drivers license ? " + radioValue3;


        // job history 1

    field21 = "Company: " + job1;
    field22 = "Number: " + job1Number;
    field23 = "Address: " + job1Address;
    field24 = "Supervisor: " + job1Supervisor;
    field25 = "Title: " + job1Title;
    field26 = "Starting pay: " + job1StartingSalary;
    field27 = "Ending pay:  " + job1EndingSalary;
    field28 = "From: " + job1Start;
    field29 = "To: " + job1End;
    field30 = "Reason for leaving: " + job1Reason;
    field31 = "Can we contact first ref ? " + radioValue4;

        // job history 2
    field32 = "Company: " + job2;
    field33 = "Number: " + job2Number;
    field34 = "Address: " + job2Address;
    field35 = "Supervisor: " + job2Supervisor;
    field36 = "Title: " + job2Title;
    field37 = "Starting pay: " + job2StartingSalary;
    field38 = "Ending pay:  " + job2EndingSalary;
    field39 = "From: " + job2Start;
    field40 = "To: " + job2End;
    field41 = "Reason for leaving: " + job2Reason;
    field42 = "Can we contact second ref ? " + radioValue5;
        // job hostory 3
    field43 = "Company: " + job3;
    field44 = "Number: " + job3Number;
    field45 = "Address: " + job3Address;
    field46 = "Supervisor: " + job3Supervisor;
    field47 = "Title: " + job3Title;
    field48 = "Starting pay: " + job3StartingSalary;
    field49 = "Ending pay:  " + job3EndingSalary;
    field50 = "From: " + job3Start;
    field51 = "To: " + job3End;
    field52 = "Reason for leaving: " + job3Reason;
    field53 = "Can we contact third ref ? " + radioValue6;




        // education

    field54 = "High School: " + highSchool;
    field55 = "Address: " + highSchoolAddress;
    field56 = "From: " + highFrom;
    field57 = "To: " + highTo;
    field58 = "Degree: " + highDegree;
    field59 = "Did you graduate High School ? " + radioValue7;

    field60 = "College: " + college;
    field61 = "Address: " + collegeAddress;
    field62 = "From: " + collegeFrom;
    field63 = "To: " + collegeTo;
    field64 = "Degree: " + collegeDegree;
    field65 = "Did you graduate from college ? " + radioValue8;

    field66 = "Other: " + other;
    field67 = "Address: " + otherAddress;
    field68 = "From: " + otherFrom;
    field69 = "To: " + otherTo;
    field70 = "Degree/Cert: " + otherDegree;
    field71 = "Did you graduate from other ? " + radioValue9;



        // references
        // ref 1
    field72 = "Name: " + ref1;
    field73 = "Relationship: " + ref1Rel;
    field74 = "Company: " + ref1Company;
    field75 = "Phone: " + ref1Phone;
    field76 = "Address: " + ref1Address;
        // ref 2
    field77 = "Name: " + ref2;
    field78 = "Relationship: " + ref2Rel;
    field79 = "Company: " + ref2Company;
    field80 = "Phone: " + ref2Phone;
    field81 = "Address: " + ref2Address;
        // ref 3
    field82 = "Name: " + ref3;
    field83 = "Relationship: " + ref3Rel;
    field84 = "Company: " + ref3Company;
    field85 = "Phone: " + ref3Phone;
    field86 = "Address: " + ref3Address;


    field87 = "discloser " + radioValue10;


        firebase.database().ref('applicant').push({
        field1,field2,field3, field4,field5,field6,field7,field8,field9,field10,field11,field12,field13,field14,field15,
        field16,field17,field18,field19,field20,field21,field22,field23,field24,field25,field26,field27,field28,field29,field30,field31,field32,field33,field34,field35,field36,field37,field38,field39,field40,field41,field42,field43,field44,field45,field46,field47,field48,field49,field50,field51,field52,field53,field54,field55,field56,field57,field58,field59,field60,field61,field62,field63,field64,field65,field66,field67,field68,field69,field70,field71,field72,field73,field74,field75,field76,field77,field78,field79,field80,field81,field82,field83,field84,field85,field86,field87,
            
        });






    });






    // add listner for users true/false 

    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            console.log(firebaseUser);


            // starts here
            var ref2 = database.ref('applicant');
    ref2.on('value', gotData2);


    function gotData2(data) {

        $(".printApps").html('');
        var person = data.val();
        var keys = Object.keys(person);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            newKey = keys[i];

             var persons = {
                one: person[k].field1,
                two: person[k].field2,
                three: person[k].field3,
                four: person[k].field4,
                five: person[k].field5,
                six: person[k].field6,
                seven: person[k].field7,
                eight: person[k].field8,
                nine: person[k].field9,
                ten: person[k].field10,
                eleven: person[k].field11,
                twelve: person[k].field12,
                thirteen: person[k].field13,
                fourteen: person[k].field14,
                fifteen: person[k].field15,
                sixteen: person[k].field16,
                seventeen: person[k].field17,
                eighteen: person[k].field18,
                ninteen: person[k].field19,
                twenty: person[k].field20,
                twentyOne: person[k].field21,
                twentyTwo: person[k].field22,
                twentyThree: person[k].field23,
                twentyfour: person[k].field24,
                twentyfive: person[k].field25,
                twentysix: person[k].field26,
                twentyseven: person[k].field27,
                twentyeight: person[k].field28,
                twentynine: person[k].field29,
                thirty: person[k].field30,
                thirtyOne: person[k].field31,
                thirtyTwo: person[k].field32,
                thirtyThree: person[k].field33,
                thirtyFour: person[k].field34,
                thirtyFive: person[k].field35,
                thirtySix: person[k].field36,
                thirtySeven: person[k].field37,
                thirtyEight: person[k].field38,
                thirtyNine: person[k].field39,
                fourty: person[k].field40,
                fourtyOne: person[k].field41,
                fourtyTwo: person[k].field42,
                fourtyThree: person[k].field44,
                fourtyFour: person[k].field44,
                fourtyFive: person[k].field45,
                fourtySix: person[k].field46,
                fourtySeven: person[k].field47,
                fourtyEight: person[k].field48,
                fourtyNine: person[k].field49,
                fifty: person[k].field50,
                fiftyOne: person[k].field51,
                fiftyTwo: person[k].field52,
                fiftyThree: person[k].field55,
                fiftyFour: person[k].field54,
                fiftyFive: person[k].field55,
                fiftySix: person[k].field56,
                fiftySeven: person[k].field57,
                fiftyEight: person[k].field58,
                fiftyNine: person[k].field59,
                sixty: person[k].field60,
                sixtyOne: person[k].field61,
                sixtyTwo: person[k].field62,
                sixtyThree: person[k].field66,
                sixtyFour: person[k].field64,
                sixtyFive: person[k].field65,
                sixtySix: person[k].field66,
                sixtySeven: person[k].field67,
                sixtyEight: person[k].field68,
                sixtyNine: person[k].field69,
                seventy: person[k].field70,
                seventyOne: person[k].field71,
                seventyTwo: person[k].field72,
                seventyThree: person[k].field77,
                seventyFour: person[k].field74,
                seventyFive: person[k].field75,
                seventySix: person[k].field76,
                seventySeven: person[k].field77,
                seventyEight: person[k].field78,
                seventyNine: person[k].field79,
                eighty: person[k].field80,
                eightyOne: person[k].field81,
                eightyTwo: person[k].field82,
                eightyThree: person[k].field88,
                eightyFour: person[k].field84,
                eightyFive: person[k].field85,
                eightySix: person[k].field86,
                eightySeven: person[k].field87,
               
                
            }

            
            console.log(person[k].feild1);

            

            newKey = keys[i];
            console.log(newKey);
            
           


            $(".printApps").append( "<div class='appDiv' id=" + newKey + ">" + 

                                    "<p>" + persons.one + "<br>" +  persons.two + "<br>" + persons.three +  "<br>" + 
                                    "<br>" + persons.four + "<br>" +  persons.five + "<br>" + persons.six +  "</br>" + 
                                    "<br>" + persons.seven + "<br>" +  persons.eight + "<br>" + persons.nine +  "<br>" +
                                    "<br>" + persons.ten + "<br>" +  persons.eleven + "<br>" + persons.twelve +  "<br>" +
                                    "<br>" + persons.thirteen + "<br>" +  persons.fourteen + "<br>" + persons.fifteen + 
                                    "<br>" + persons.sixteen + "<br>" +  persons.seventeen + "<br>" + persons.eighteen + 
                                    "<br>" + persons.ninteen + "<br>" +  persons.twenty + "<br>" + persons.twentyOne +  "</br>" + 
                                    "<br>" + persons.twentyTwo + "<br>" +  persons.twentyThree + "<br>" + persons.twentyfour +  "<br>" +
                                    "<br>" + persons.twentyfive + "<br>" +  persons.twentysix + "<br>" + persons.twentyseven +  "<br>" +
                                    "<br>" + persons.twentyeight + "<br>" +  persons.twentynine + "<br>" + persons.thirty + 
                                    "<br>" + persons.thirtyOne + "<br>" +  persons.thirtyTwo + "<br>" + persons.thirtyThree + 
                                    "<br>" + persons.thirtyFour + "<br>" +  persons.thirtyFive + "<br>" + persons.thirtySix + 
                                    "<br>" + persons.thirtySeven + "<br>" +  persons.thirtyEight + "<br>" + persons.thirtyNine + 
                                    "<br>" + persons.fourty + 
                                    "<br>" + persons.fourtyOne + "<br>" +  persons.fourtyTwo + "<br>" + persons.fourtyThree + 
                                    "<br>" + persons.fourtyFour + "<br>" +  persons.fourtyFive + "<br>" + persons.fourtySix + 
                                    "<br>" + persons.fourtySeven + "<br>" +  persons.fourtyEight + "<br>" + persons.fourtyNine + 
                                    "<br>" + persons.fifty + 
                                    "<br>" + persons.fiftyOne + "<br>" +  persons.fiftyTwo + "<br>" + persons.fiftyThree + 
                                    "<br>" + persons.fiftyFour + "<br>" +  persons.fiftyFive + "<br>" + persons.fiftySix + 
                                    "<br>" + persons.fiftySeven + "<br>" +  persons.fiftyEight + "<br>" + persons.fiftyNine + 
                                    "<br>" + persons.sixty + 
                                    "<br>" + persons.sixtyOne + "<br>" +  persons.sixtyTwo + "<br>" + persons.sixtyThree + 
                                    "<br>" + persons.sixtyFour + "<br>" +  persons.sixtyFive + "<br>" + persons.sixtySix + 
                                    "<br>" + persons.sixtySeven + "<br>" +  persons.sixtyEight + "<br>" + persons.sixtyNine + 
                                    "<br>" + persons.seventy + 
                                    "<br>" + persons.seventyOne + "<br>" +  persons.seventyTwo + "<br>" + persons.seventyThree + 
                                    "<br>" + persons.seventyFour + "<br>" +  persons.seventyFive + "<br>" + persons.seventySix + 
                                    "<br>" + persons.seventySeven + "<br>" +  persons.seventyEight + "<br>" + persons.seventyNine + 
                                    "<br>" + persons.eighty + 
                                    "<br>" + persons.eightyOne + "<br>" +  persons.eightyTwo + "<br>" + persons.eightyThree + 
                                    "<br>" + persons.eightyFour + "<br>" +  persons.eightyFive + "<br>" + persons.eightySix + 
                                    "<br>" + persons.eightySeven + "<br>" + 


                                     

                                      "</p>" + 
                                      "<button class='btn btn-info printApp' value="+ newKey + ">" + "Print" + "</button>" + 

                                      "<button class='btn btn-danger deleteApp'>" + "Delete" + "</button>" + 



                                       "</div>" 

                                   


                );
               

        }
    }

   
 $(".printApps").on('click', '.printApp', function(){ 
    appId = $(this).val()
          
               console.log($(this).val());

               function PrintElem(elem)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById(appId).innerHTML);
    mywindow.document.write('</body></html>');

   
    mywindow.print();
    mywindow.close();

    return true;
}

PrintElem();




            });

 
            $(".printUsers").show();

            $(".addPosition").show();

        } else {

            $(".addPosition").hide();
            $(".printUsers").hide();

        }

    });


});
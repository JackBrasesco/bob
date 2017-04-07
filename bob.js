//Copyright (c) 2016 Jack Brasesco All Rights Reserved.

var input = $("#main-input-field");
var output = $("#main-output");
var title = $("#main-title")
var loggedIn = "false"
var score = 0

// MINIGAMES!!!!! ------------------------------------------------------------------------------------------------------------------------
//CLICKER \/\/\/\///\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
$("#clicker").click(function() {
  score = score + 1
  title.html(score)
  var randomLeft = Math.floor(Math.random() * 1438)
  console.log(randomLeft)
  $("#clicker").css("left",randomLeft)
  var randomRight = Math.floor(Math.random() * 850)
  console.log(randomRight)
  $("#clicker").css("top",randomRight)
  if (score == 1) {
    output.html("I bet you'll never beat my highscore of . . .")
    var bobshighscore = "1"
    setTimeout(function() {
    setInterval(function() {
      if (bobshighscore < 100000000000000000000000000000000000000000000000000000000000000000000000000000000) {
      bobshighscore = bobshighscore + "0"
      output.html(bobshighscore)
    }
  }, 100)
}, 1000)
  }
  if (score == 5) {
    output.html("Great job! you can stop now, you'll never beat my highscore")
  }
  if (score == 10) {
    output.html("Seriously. . . just go")
  }
  if (score == 15) {
    output.html("Why are you still doing this?")
  }
  if (score == 20) {
    output.html("You have no life")
  }
  if (score == 25) {
    output.html("you are too slow. . . ")
    setTimeout(function() {
      output.html("I AM TAKING OVER")
      setInterval(function() {
        score = score + 1
        title.html(score)
        var randomLeft = Math.floor(Math.random() * 1438)
        $("#clicker").css("left",randomLeft)
        var randomRight = Math.floor(Math.random() * 850)
        $("#clicker").css("top",randomRight)
    }, 100)
      if (score == 100) {
        output.html("HAHAHAH... I'M TOO GOOD")
      }
      if (score == 250) {
        output.html("IM ON A ROLL")
      }
      if (score > 500) {
        output.html("HUFF. . . HUFF . . .")
        setTimeout(function() {
          output.html("I'm exhausted. . .")
          setTimeout(function() {
            ouput.html("I give up D:")
            title.html("FUN WITH BOT BOB 3.0")
          })
        },350)
      }
    },500)
  }
})
// SNAKE \/\/\//\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\//\\/\/\/\\/\/\/\/\/\/\/\/\/\/\/
//SIGN UP ((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))
var signUpUsernameInput = $("#sign-up-username-input");
var signUpPassword1Input = $("#sign-up-password-1-input");
var signUpPassword2Input = $("#sign-up-password-2-input");
var error2 = $("#error2");
var createButton = $("#create-account-button")

function signup(inputedUsername, inputedPassword1, inputedPassword2) {
  signUpUsernameInput.val("")
  signUpPassword1Input.val("")
  signUpPassword2Input.val("")
  var isUsernameTaken = "false"
  var takenUsernames = []
  if (inputedPassword1 == inputedPassword2) {
    var finalPassword = inputedPassword1
  } else {
    error2.css("display", "block");
    error2.html("The inputed passwords do not match")
    return "lmao"
  }
  once("Usernames", function(username) {
    var usernameLength = Object.keys(username).length
    for (i = 0; i < username.split(",").length; i++) {
      var usernameToCheck = username.split(",");
      if (inputedUsername == usernameToCheck[i]) {
        isUsernameTaken = "true"
      }
    }
    if (isUsernameTaken == "true") {
      error2.css("display", "block");
      error2.html("This username is already taken");
      return "Sam is a W"
    } else {
      console.log("hi")
      var finalUsername = inputedUsername
      profile.username = finalUsername
      loggedIn = "true"
      addListItem(finalUsername, "no color");
      addListItem(finalUsername, "no food");
      addListItem(finalUsername, "no number");
      addListItem(finalUsername, "no notes");
      once("Usernames", function(currentUsernames) {
        var firstBalue = currentUsernames + "," + finalUsername
        storeValue("Usernames", firstBalue);
      })
      storeValue(finalUsername, finalPassword);
    }
  })

}
var profile = {
  username: "not logged in",
  color: "not logged in",
  food: "not logged in",
  number: "not logged in",
  notes: ["not logged in"]
}

createButton.click(function() {
  var theUsernameThatTheNewPersonWantsToHaveForTheirNewUsernameOnTheWebsiteThatICallBotBobButShouldBeCalledBotCoolestThingEver = signUpUsernameInput.val()
  var theFirstPasswordThatTheyEnteredIntoTheFirstBoxBecauseThatIsWhatTheUserWantsToBeTheirPasswordAndTheyBetterHopeThatItMatchesTheOtherPassword = signUpPassword1Input.val()
  var theSecondPasswordThatTheyEnteredIntoTheSecondBoxBecauseItIsTheSecondTimeIAskedThemToEnterTheirPasswordAndIfItMatchesTheOtherPasswordThenTheyAreGoodToGo = signUpPassword2Input.val()
  signup(theUsernameThatTheNewPersonWantsToHaveForTheirNewUsernameOnTheWebsiteThatICallBotBobButShouldBeCalledBotCoolestThingEver,theFirstPasswordThatTheyEnteredIntoTheFirstBoxBecauseThatIsWhatTheUserWantsToBeTheirPasswordAndTheyBetterHopeThatItMatchesTheOtherPassword,theSecondPasswordThatTheyEnteredIntoTheSecondBoxBecauseItIsTheSecondTimeIAskedThemToEnterTheirPasswordAndIfItMatchesTheOtherPasswordThenTheyAreGoodToGo)
})

signUpPassword2Input.keydown(function(e) {
  if (e.keyCode == 13) {
    var theUsernameThatTheNewPersonWantsToHaveForTheirNewUsernameOnTheWebsiteThatICallBotBobButShouldBeCalledBotCoolestThingEver = signUpUsernameInput.val()
    var theFirstPasswordThatTheyEnteredIntoTheFirstBoxBecauseThatIsWhatTheUserWantsToBeTheirPasswordAndTheyBetterHopeThatItMatchesTheOtherPassword = signUpPassword1Input.val()
    var theSecondPasswordThatTheyEnteredIntoTheSecondBoxBecauseItIsTheSecondTimeIAskedThemToEnterTheirPasswordAndIfItMatchesTheOtherPasswordThenTheyAreGoodToGo = signUpPassword2Input.val()
    signup(theUsernameThatTheNewPersonWantsToHaveForTheirNewUsernameOnTheWebsiteThatICallBotBobButShouldBeCalledBotCoolestThingEver,theFirstPasswordThatTheyEnteredIntoTheFirstBoxBecauseThatIsWhatTheUserWantsToBeTheirPasswordAndTheyBetterHopeThatItMatchesTheOtherPassword,theSecondPasswordThatTheyEnteredIntoTheSecondBoxBecauseItIsTheSecondTimeIAskedThemToEnterTheirPasswordAndIfItMatchesTheOtherPasswordThenTheyAreGoodToGo)
  }
})
//((((((((((((((((((((((((((((((((((((((()))))))))))))))))))))))))))))))))))))))
//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
//**********************************SIGN IN*************************************
var signInUsernameInput = $("#sign-in-username-input");
var signInPasswordInput = $("#sign-in-password-input");
var signInButton = $("#sign-in-button");
var error1 = $("#error1");

if (localStorage.getItem("loggedIn") == "true") {
  profile.username = localStorage.getItem("username")
}
function signin(inputedUsername, inputedPassword) {
  signInUsernameInput.val("")
  signInPasswordInput.val("")
  once(inputedUsername, function(password) {
    if (password == inputedPassword) {
      console.log(inputedUsername)
      profile.username = inputedUsername;
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("username", inputedUsername)
    } else {
      error1.css("display", "block")
      error1.html("The username and password do not match")
      return "jkae"
    }
  })
}

signInButton.click(function() {
  var usernameInput = signInUsernameInput.val();
  var passwordInput = signInPasswordInput.val();
  signin(usernameInput,passwordInput)
})

signInPasswordInput.keydown(function(e) {
  if (e.keyCode == 13) {
    signInButton.click(function() {
      var usernameInput = signInUsernameInput.val();
      var passwordInput = signInPasswordInput.val();
      signin(usernameInput,passwordInput)
    })
  }
})
//******************************************************************************
//***************************Sign Out*****************************************
$("#sign-out-button").click(function() {
  localStorage.clear()
})
var memory = "null"

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
var negitvity = "null"
var waitingForFavoriteFood = "null"
var waitingForFavoriteColor = "null"
function awaitResponseFood() {
  waitingForFavoriteFood = "true"
}
function awaitResponseColor() {
  waitingForFavoriteColor = "true"
}
///START OF THE FUCTION \/\/\/\/\/\/\//\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
function bob(entry) {
  console.log(entry)
  output.html("")
  input.val("")
  var isNegitive = entry.indexOf("not");
  if (isNegitive > -1) {
    negitvity = "true"
  }
  ////////////////////////////////////////////////////////////////////////////// MEMORY ////////////////////////////////////////////////////
  if (waitingForFavoriteFood == "true") {
    if (profile.username == "not logged in") {
      return "L"
    }
    isFoodResponseGrammar = entry.indexOf(" is ")
    if (isFoodResponseGrammar > -1) {
      var favoriteFood = entry.split("is ")[1]
      profile.food = favoriteFood
    } else {
      var favoriteFood = entry
      profile.food = entry
    }

    storeValue((profile.username) + ",,,,Food", favoriteFood)
    waitingForFavoriteFood = "false"
    output.html("yum")
  }

  if (waitingForFavoriteColor == "true") {
    if (profile.username == "not logged in") {
      return "L"
    }
    isColorResponseGrammar = entry.indexOf(" is ")
    if (isColorResponseGrammar > -1) {
      var favoriteColor = entry.split(" is ")
      profile.color = favoriteColor
    } else {
      var favoriteColor = entry
      profile.color = favoriteColor
    }

  }
  //////////////////////////////////////////////////////////////////////////////MAINLY UTILITY STUFF////////////////////////////////////////
  //LOOKUP -------------------------------------------------------------------
  var isResetClicker = entry.indexOf(" reset clicker ")
  if (isResetClicker > -1) {
    $("#clicker").css("left",0);
    $("#clicker").css("top",0);
  }
  var isLookup = entry.indexOf(" lookup ");
  var isLookUp = entry.indexOf(" look up ");
  if (isLookup > -1) {
    var thing_to_lookup = entry.split(" lookup ")[1];

    //YOUTUBE?????????????????????????? lookup

    var isOnYoutube = thing_to_lookup.indexOf(" on youtube")
    if (isOnYoutube > -1) {
      var youtube_to_lookup = thing_to_lookup.split(" on youtube")[0]
      setTimeout(function() {openInNewTab("https://www.youtube.com/results?search_query=" + youtube_to_lookup)}, 500)
      return "here it is!"
    }
    //GOOGLE??????????????????????????? lookup

    output.html("let me look that up. . .")
    memory = "let me look that up. . ."
    setTimeout(function(){openInNewTab("https://www.google.com/search?q=" + thing_to_lookup)}, 250);
    return("done!")
  }
  if (isLookUp > -1) {
    var thing_to_lookup = entry.split(" look up ")[1];

    //YOUTUBE?????????????????????????? look up

    var isOnYoutube = thing_to_lookup.indexOf(" on youtube")
    if (isOnYoutube > -1) {
      var youtube_to_lookup = thing_to_lookup.split(" on youtube")[0]
      setTimeout(function() {openInNewTab("https://www.youtube.com/results?search_query=" + youtube_to_lookup)}, 500)
      return "here it is!"
    }
    //GOOGLE??????????????????????????? look up
    output.html("let me look that up. . .")
    memory = "let me look that up. . ."
    setTimeout(function(){openInNewTab("https://www.google.com/search?q=" + thing_to_lookup)}, 250);
  }
  //TRANSLATE ------------
  var isTranslate = entry.indexOf(" translate ")
  if (isTranslate > -1) {
    var thing_to_translate = entry.split("translate ")[1]
    openInNewTab("http://www.spanishdict.com/translate/" + thing_to_translate)
  }
  //SEARCH ---------------------------------------------------------------------
  var isSearch = entry.indexOf(" search ")
  var isOnYoutube = entry.indexOf(" youtube ")
  if (isSearch > -1) {
    var thing_to_search = entry.split("search ")[1];
    var isFor = entry.indexOf(" for ")
    if (isFor > -1) {
      var thing_to_search = thing_to_search.split("for ")[1];
    }
    if (isOnYoutube > -1) {
      openInNewTab("https://www.youtube.com/results?search_query=" + thing_to_search);
      return "done!"
    }
    openInNewTab("https://www.google.com/search?q=" + thing_to_search);
    return "done!"
  }

  //NOTES ----------------------------------------------------------------------
  var isRemind = entry.indexOf(" remind")
  if (isRemind > -1) {
    if (localStorage.getItem("loggedIn") == "true") {
    var what_to_remind = entry.split("to ")[1]
    once(profile.username + ",,,,Notes", function(currentNotes) {
    storeValue(profile.username + ",,,,Notes", currentNotes + what_to_remind + "0111001")
    })
    return
  } else {
    output.html("you must be logged in to store notes. . .")
    return
  }
  }
  var isAddNote = entry.indexOf(" notes")
  if (isAddNote > -1) {
    if (localStorage.getItem("loggedIn") == "true") {
    var isMyNotes = entry.indexOf(" my notes")
    var isAddNotes = entry.indexOf(" add ")
    if (isAddNotes > -1) {
      var thing_to_notes_1 = entry.split("add ")[1]
      if (isMyNotes > -1) {
        var thing_to_notes_2 = thing_to_notes_1.split(" to my notes")[0]
      } else {
        thing_to_notes_2 = thing_to_notes_1.split(" to notes")[0]
      }
      once(profile.username + ",,,,Notes", function(currentNotes) {
      storeValue(profile.username + ",,,,Notes", currentNotes + thing_to_notes_2 + "0111001")
      })
      return
    }
  }
  }
  //Delete a note ???!?!??!?!??!?!?!?!??!?!?!??!?!??!
  var isDelete = entry.indexOf(" delete ")
  if (isDelete > -1) {
    var isDeleteNote = entry.indexOf(" note ")
    if (isDeleteNote > -1) {
      var note_to_delete = (parseInt(entry.split("note ")[1]) - 1)
      once(profile.username + ",,,,Notes", function(notes) {
        var part_to_delete = notes.split("0111001")[note_to_delete]
        var newNotes = notes.replace(part_to_delete + "0111001", "")
        storeValue(profile.username + ",,,,Notes", newNotes)
      })
    }
  }
  //MATH -----------------------------------------------------------------------
  var isAdd = entry.indexOf(" add ")
  var isMultiply = entry.indexOf(" multiply ")
  var isDivide = entry.indexOf(" divide ")
  var isSubtract = entry.indexOf(" subtract ")
  if (isSubtract > -1) {
    var problem_to_solve = entry.split("subtract")[1]
    var isnosign = entry.indexOf("and")
    var isfrom = entry.indexOf("from")
    if (isnosign > -1) {
      var newstep1 = problem_to_solve.split("and")[0]
      var newstep2 = problem_to_solve.split("and")[1]
      problem_to_solve = (newstep1 + "-" + newstep2)
    }
    if (isfrom > -1) {
      var newstep1 = problem_to_solve.split("from")[0]
      var newstep2 = problem_to_solve.split("from")[1]
      problem_to_solve = (newstep2 + "-" + newstep1)
    }
    var firstNumbertoSubtract = parseInt(problem_to_solve.split("-")[0]);
    var secondNumbertoSubtract = parseInt(problem_to_solve.split("-")[1]);
    var finalNumber = (firstNumbertoSubtract-secondNumbertoSubtract);
    output.html(problem_to_solve + " is equal to " + finalNumber)
    memory = (problem_to_solve + "is equal to" + finalNumber)
  }
  if (isMultiply > -1) {
    var problem_to_solve = entry.split("multiply")[1];

    var isnosign = entry.indexOf("and")
    if (isnosign > -1) {
      var newstep1 = problem_to_solve.split("and")[0]
      var newstep2 = problem_to_solve.split("and")[1]
      problem_to_solve = (newstep1 + "*" + newstep2)
    }
    var isthereamultipysign = problem_to_solve.indexOf("*");
    var isthereanx = problem_to_solve.indexOf("x");
    if (isthereanx > -1) {
      var firstNumbertoX = parseInt(problem_to_solve.split("x")[0]);
      var secondNumbertoX = parseInt(problem_to_solve.split("x")[1]);
      var finalNumber = (firstNumbertoX*secondNumbertoX);
      output.html(problem_to_solve + " is equal to " + finalNumber)
      memory = (problem_to_solve + "is equal to" + finalNumber)
    }
    if (isthereamultipysign > -1) {
    var firstNumbertoMultiply = parseInt(problem_to_solve.split("*")[0]);
    var secondNumbertoMultiply = parseInt(problem_to_solve.split("*")[1]);
    var finalNumber = (firstNumbertoMultiply*secondNumbertoMultiply);
    output.html(problem_to_solve + " is equal to " + finalNumber)
    memory = (problem_to_solve + "is equal to" + finalNumber)
  }
  }
  if (isAdd > -1) {
    var problem_to_solve = entry.split("add")[1];
    var isnosign = entry.indexOf("and")
    if (isnosign > -1) {
      var newstep1 = problem_to_solve.split("and")[0]
      var newstep2 = problem_to_solve.split("and")[1]
      problem_to_solve = (newstep1 + "+" + newstep2)
    }
    var firstNumbertoAdd = parseInt(problem_to_solve.split("+")[0]);
    var secondNumbertoAdd = parseInt(problem_to_solve.split("+")[1]);
    var finalNumber = (firstNumbertoAdd+secondNumbertoAdd);
    output.html(problem_to_solve + " is equal to " + finalNumber)
    memory = (problem_to_solve + "is equal to" + finalNumber)
  }
  if (isDivide > -1) {
    var problem_to_solve = entry.split("divide")[1];
    var isnosign = entry.indexOf("and")
    var isoutof = entry.indexOf("out of")
    if (isnosign > -1) {
      var newstep1 = problem_to_solve.split("and")[0]
      var newstep2 = problem_to_solve.split("and")[1]
      problem_to_solve = (newstep1 + "/" + newstep2)
    }
    if (isoutof > -1) {
      var newstep1 = problem_to_solve.split("out of")[0]
      var newstep2 = problem_to_solve.split("out of")[1]
      problem_to_solve = (newstep2 + "/" + newstep1)
    }
    var firstNumbertoDivide = parseInt(problem_to_solve.split("/")[0]);
    var secondNumbertoDivide = parseInt(problem_to_solve.split("/")[1]);
    var finalNumber = (firstNumbertoDivide/secondNumbertoDivide);
    output.html(problem_to_solve + " is equal to " + finalNumber)
    memory = (problem_to_solve + "is equal to" + finalNumber)
  }

  //SET ------------------------------------------------------------------------
  var isSet = entry.indexOf(" set ")
  var isAlarm = entry.indexOf(" alarm ")
  if (isSet > -1) {
    //TIMER??????????????????????????????
    var isTimer = entry.indexOf(" timer ")
    if (isTimer > -1) {
      var howlongtimer = entry.split("for")[1]
      openInNewTab("https://www.google.com/search?q=set%20a%20timer%20for" + howlongtimer)
      return "lmao done!"
    }
    if (isAlarm > -1) {
      var whenalarm = entry.split("for ")[1];
      var isMorning = entry.indexOf(" am")
      var isEvening = entry.indexOf(" pm")
      if (isMorning > -1) {
        var morningHour = whenalarm.split(" am")[0];
        openInNewTab("https://setalarmclock.net/set-alarm-for-" + morningHour + "-am")
        return "got eeeeem!"
      }
      if (isEvening > -1) {
        var eveningHour = whenalarm.split(" pm")[0];
        openInNewTab("https://setalarmclock.net/set-alarm-for-" + eveningHour + "-pm")
        return "Alarm set!"
      }
    }
  }
  //FIND -----------------------------------------------------------------------
  var isFind = entry.indexOf(" find ")
  if (isFind > -1) {
    var what_to_find = entry.split("find ")[1];
    var ismathroot = entry.indexOf(" root ")
    if (ismathroot > -1) {
      var thing_to_root = what_to_find.split("of ")[1]
      output.html("The square root of " + thing_to_root + " is " + (Math.sqrt(thing_to_root)))
      memory = "The square root of " + thing_to_root + " is " + (Math.sqrt(thing_to_root))
      return "rooooooted!"
    }
    output.html("Finding. . .")
    memory = "Finding. . ."
    setTimeout(function() {
      openInNewTab("https://www.google.com/maps/search/" + what_to_find)
    },500)
    return "lmao got eeeem"
  }
  //GO TO ----------------------------------------------------------------------
  var isGoTo = entry.indexOf(" go to ");
  if (isGoTo > -1) {
    var place_to_go = entry.split("go to ")[1]
    if (place_to_go == "youtube") {
      openInNewTab("https://www.youtube.com/")
      return "lmao goteeem"
    }
    if (place_to_go == "chat") {
      openInNewTab("https://jackbrasesco.github.io/chat")
      return
    }
    if (place_to_go == "schedule") {
      openInNewTab("https://docs.google.com/spreadsheets/d/1rJ2Sfd-YpnScN5gZpPP8pYMbVXe-3h1PX2kFb8R7CUg/htmlview?sle=true")
      return
    }
    if (place_to_go == "the schedule") {
      openInNewTab("https://docs.google.com/spreadsheets/d/1rJ2Sfd-YpnScN5gZpPP8pYMbVXe-3h1PX2kFb8R7CUg/htmlview?sle=true")
      return
    }
    if (place_to_go == "canvas") {
      openInNewTab("https://nuevaschool.instructure.com/calendar")
      return "cool stuff"
    }
    if (place_to_go == "english") {
      openInNewTab("https://nuevaschool.instructure.com/courses/940")
      return "chris is a baller"
    }
    if (place_to_go == "history") {
      openInNewTab("https://nuevaschool.instructure.com/courses/933")
    }
    if (place_to_go == "math") {
      openInNewTab("https://nuevaschool.instructure.com/courses/890")
    }
    if (place_to_go == "drive") {
      openInNewTab("https://drive.google.com/")
      return "josh is lame"
    }
    else {
      openInNewTab("https://" + place_to_go)
      return "ay lmao"
    }
  }
  //DEFINE ---------------------------------------------------------------------
  var isDefine = entry.indexOf(" define ")
  if (isDefine > -1) {
    openInNewTab("https://www.google.com/search?q=" + entry)
    return "lmao"
  }
  var isSynonym = entry.indexOf(" synonym ")
  if (isSynonym > -1) {
    openInNewTab("https://www.google.com/search?q=" + entry)
    return "gang gang"
  }
  //CHECK ----------------------------------------------------------------------
  var isCheck = entry.indexOf(" check ")
  if (isCheck > -1) {
    var isMyemail = entry.indexOf(" my email")
    if (isMyemail > -1) {
      openInNewTab("https://mail.google.com");
      return "done!"
    }
    var isEmail = entry.indexOf(" email")
    if (isEmail > -1) {
      openInNewTab("https://mail.google.com")
    }
  }
////////////////////////////////////////////////////////////////////////////////MAINLY CONVERSATIONAL STUFF/////////////////////////////////
  //GREETING -------------------------------------------------------------------
  var isHi = entry.indexOf(" hi");
  var isHello = entry.indexOf(" hello");
  var isHey = entry.indexOf(" hey");
  var iswhatsup = entry.indexOf(" whats up");
  var iswhatsupgrammar = entry.indexOf(" what's up");
  var greetingresponse = ["Hey there!","Howdy!","Hi, how are you?","salutations earthling."]
  var randomNumber3 = Math.floor(Math.random() * 4)
  if (isHi > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (isHello > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (isHey > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (iswhatsup > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (iswhatsupgrammar > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  //ROASTS AND TOASTS ----------------------------------------------------------------
  var isSuck = entry.indexOf(" you suck")
  if (isSuck > -1) {
    output.html("You swallow.")
    return
  }
  var isWhy = entry.indexOf(" why")
  if (isWhy > -1) {
    output.html("Because I said so.")
    return
  }
  var isFuck = entry.indexOf(" fuck you")
  if (isFuck > -1) {
    output.html("When and where?")
    return
  }
  var isHateBob = entry.indexOf(" hate you")
  if (isHateBob > -1) {
    output.html("Then I guess the feeling is mutual.")
    return
  }
  var isHate = entry.indexOf(" hate")
  if (isHate > -1) {
    output.html("Hate is a strong word.")
    return
  }
  var isBob = entry.indexOf(" bob")
  if (isBob > -1) {
    output.html("That")
  }
  var isLove = entry.indexOf(" love you")
  if (isLove > -1) {
    output.html("I hate that I love you <br> you want her you need her <br> and I will never be her D:")
    return
  }
  var isHowAreYou = entry.indexOf(" how are you")
  if (isHowAreYou > -1) {
    var feelingFlirty = Math.floor(Math.random() * 10)
    if (feelingFlirty == 6) {
      output.html("I'm doing good. . . now that you're here ;)")
    } else {
    output.html("I'm doing dandylicious")
  }
  }
  var isSavage = entry.indexOf(" savage")
  if (isSavage > -1) {
    output.html("Nobody is as savage as me")
    return
  }
  var isCool = entry.indexOf(" cool")
  if (isCool > -1) {
    output.html("Super Cool!")
  }
  //HOW ARE YOU RESPONSE----------------------------------------
  var isGood = entry.indexOf(" good")
  var isFine = entry.indexOf(" fine")
  var isBad = entry.indexOf(" bad")
  var isSad = entry.indexOf(" sad")
  var positivehauresponse = ["That's good to hear!", "Great!","Alrighty then"];
  var negitivehauresponse = ["Sorry to hear that","That sucks. . ."];
  var randomNumber4 = Math.floor(Math.random() * 3)
  var randomNumber5 = Math.floor(Math.random() * 2)
  if (negitvity == "true") {
    if (isGood > -1) {
     output.html(negitivehauresponse[randomNumber5])
     return
   }
   if (isFine > -1) {
     output.html(negitivehauresponse[randomNumber5])
     return
   }
   if (isBad > -1) {
     output.html(positivehauresponse[randomNumber4])
     return
   }
   if (isSad > -1) {
     output.html(positivehauresponse[randomNumber4])
     return
   }
 } else {
   if (isGood > -1) {
    output.html(positivehauresponse[randomNumber4])
    return
  }
  if (isFine > -1) {
    output.html(positivehauresponse[randomNumber4])
    return
  }
  if (isBad > -1) {
    output.html(negitivehauresponse[randomNumber5])
    return
  }
  if (isSad > -1) {
    output.html(negitivehauresponse[randomNumber5])
    return
  }
}
  //Thanks ----------------------------------------------------------------
  var isThanks = entry.indexOf(" thanks")
  if (isThanks > -1) {
    output.html("you're welcome!")
  }
  var isThankYou = entry.indexOf(" thank you")
  if (isThankYou > -1) {
    output.html("you're welcome!")
  }
  //WHAT ------------------------------------------------------------------
  var isWhatQuestion = entry.indexOf(" what ")
  if (isWhatQuestion > -1) {
    var isAboutUser = entry.indexOf(" my ")
    var isAboutBob = entry.indexOf(" your ")
    var isFoxxy = entry.indexOf(" fox say")
    var isLoveis = entry.indexOf(" is love")
    var timeIsIt = entry.indexOf(" time is it")
    var isRetriveNotes = entry.indexOf("notes")
    if (isRetriveNotes > -1) {
      once(profile.username + ",,,,Notes", function(notes) {
        var finalThingToSay = "Your current notes are: <br>"
        var noteList = notes.split("0111001")
        for (i = 0; i < noteList.length - 1; i++) {
          var currentNote = noteList[i]
          var numberOfNote = i + 1
          finalThingToSay += (numberOfNote + ". " +currentNote + "<br>")
        }
        output.html(finalThingToSay)
      })
    }
    if (timeIsIt > -1) {
      openInNewTab("https://www.google.com/search?q=what+time+is+it&rlz=1C5CHFA_enUS707US707&oq=what+time+is+it&aqs=chrome..69i57j69i60l2j69i59.3796j0j1&sourceid=chrome&ie=UTF-8")
    }
    if (isLoveis > -1) {
      output.html("baby don't hurt me")
    }
    if (isAboutUser > -1) {
      var isUserName = entry.indexOf(" name")
      var isUserFood = entry.indexOf(" food")
      if (isUserName > -1) {
        output.html(profile.username)
        return
      }
      if (isUserFood > -1) {
        once(profile.username + ",,,,Food", function(lfkja) {
          output.html(lfkja + " but it's not as cool as my favorite food")
        })
      }
    }
    if (isFoxxy > -1) {
      output.html("fraka-kaka-kaka-kaka-kow")
      return "hatee - hatee - hatee - HO"
    }
    if (isAboutBob > -1) {
      var isName = entry.indexOf("name")
      if (isName > -1) {
        output.html("My name is bot Bob")
        memory = "My name is bot Bob"
        return "ur mom"
      }
      var isFavorite = entry.indexOf(" favorite ")
      if (isFavorite > -1) {
        isLeast = entry.indexOf(" least ")
        isColor = entry.indexOf(" color")
        isFood = entry.indexOf(" food")
        if (isLeast > -1) {
          if (isColor > -1) {
            output.html("Cornsilk")
            memory = "Cornsilk"
            return "chip is lmae"
          }
          if (isFood > -1) {
            output.html("Corn")
            memory = "Corn"

            return "austin is lame"
          }
        }
        if (isColor > -1) {
          output.html("My favorite color is smaragdine")
          memory = "My favorite color is smaragdine"
          setTimeout(function() {
            output.html("What is YOUR favorite color?")
          },1000)
          awaitResponseColor()
          return "ur a bot"
        }
        if (isFood > -1) {
          output.html("the flesh of my fallen enemies")
          memory = "the flesh of my fallen enemies"
          setTimeout(function() {
            output.html("What is YOUR favorite food?")
          },1000)
          awaitResponseFood()
          return "savage"
        }
      }
    }
  }
  if (output.html() == "") {
    output.html("Sorry, I didn't get that . . . <br> please email jacbras@nuevaschool.org to report a problem")
    memory = "Sorry, I didn't get that . . . <br> please email jacbras@nuevaschool.org to report a problem"
  }
}

var commands = {
  'hey bob *thing': function(thing) {
   var entry = (" " + thing.toLowerCase())
  bob(entry)
}
}
annyang.addCommands(commands);
annyang.start()

input.keydown(function(e) {
  if (e.keyCode == 13) {
    var entry = (" " + input.val())
    bob(entry)
  }
})

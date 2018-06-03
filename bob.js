//Copyright (c) 2016 Jack Brasesco All Rights Reserved.

var inputbox = $("#main-input-field");
var output = $("#main-output");
var title = $("#main-title")
var loggedIn = "false"
var score = 0
var chat = $("#chat-box")
var displayChat = "false"
var chatList = []
var dmButton = $("#dm-button")
var clicker = $("#clicker")

var hue = jsHue();
var bridge = hue.bridge('10.0.0.3');
var user = bridge.user("SLNNqvOYSKUZLfDIMpmI9oz0ZAD2R7n0UAyZ1Lhi")

var light1 = {
  "on": false,
}
var light2 = {
  "on": false,
}
var light3 = {
  "on": false,
}




//USELESS BUT STILL HERE FOR NO REASON///////////////////////////
var sourceSong = $("#songSource");
var currentSong = $("#currentSong")
////////////////////////////////////////////////////////////////

dmButton.click(function() {
  output.html("hi")
})
// MINIGAMES!!!!! ------------------------------------------------------------------------------------------------------------------------
//CLICKER \/\/\/\///\\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
clicker.click(function() {
  score = score + 1
  title.html(score)
  var randomLeft = Math.floor(Math.random() * 1438)
  clicker.css("left",randomLeft)
  var randomRight = Math.floor(Math.random() * 850)
  clicker.css("top",randomRight)
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
      clicker.css("left",randomLeft)
        var randomRight = Math.floor(Math.random() * 850)
        clicker.css("top",randomRight)
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
      storeValue(finalUsername + ",,,,Change", "0ayyylmaolol,hi")
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
var getChanges = "false"
if (localStorage.getItem("loggedIn") == "true") {
  getChanges == "true"
}
///START OF THE FUCTION \/\/\/\/\/\/\//\/\/\/\/\/\//\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/
function bob(entry) {
  console.log(entry)
  clicker.css("background-color","red")
  output.html("")
  inputbox.val("")
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
    var bobTalks = new Audio("Audio/yum.mp3")
    bobTalks.play()
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
  //DMs ----------------------------------------------------------------------
  var isStart = entry.indexOf(" start dm with ")
  if (isStart > -1) {
    var who_to_dm = entry.split("with ")[1];
    var isUserReal = "false"
    once("Usernames", function(e) {
      for (i = 0; i < e.split(",").length; i++) {
        var currentUserToCheck = e.split(",")[i]
        if (who_to_dm == currentUserToCheck) {
          console.log("hi")
          isUserReal = "true"
        }
      }
    })
    setTimeout(function() {
      if (isUserReal == "true") {
        console.log("hi")
        once("DMs", function(lol) {
          var newDm = who_to_dm + "..." + profile.username
          for (i = 0; i < lol.split(",").length; i++) {
            var currentConvo = lol.split(",")[i]
            console.log(currentConvo)
            if (newDm == currentConvo) {
              console.log("YOU ALREADY HAVE ONE")
              output.html("You already have a conversation with this person. Say open DM with " + who_to_dm + " to open the conversation")
              return "lmao"
            } else {
              once("DMs", function(oldDMs) {
                setTimeout(function() {
                var valueToStore = (oldDMs + "," + who_to_dm + "..." + profile.username)
                storeValue("DMs", valueToStore)
                output.html("conversation created! Say open DM with " + who_to_dm + " to open the conversation")
              },500)
              })
            }
          }
        })

      } else {
        output.html("This user does not exist. . .")
      }
    },400)
    }
  //LIGHTS--------------------------------------------------------------------
  function light1Change(command) {
    user.setLightState(1, command).then(data => {
      console.log("lights have been changed");
  });
}
function light2Change(command) {
  user.setLightState(2, command).then(data => {
    console.log("lights have been changed");
});
}
function light3Change(command) {
  user.setLightState(3, command).then(data => {
    console.log("lights have been changed");
});
}
  function lightsChange(e) {
    user.setLightState(3, e).then(data => {
      console.log("lights have been changed");
  });
    user.setLightState(2, e).then(data => {
      console.log("lights have been changed");
  });
    user.setLightState(1, e).then(data => {
      console.log("lights have been changed");
  });
  }

  var isLights = entry.indexOf(" lights")
  if (isLights > -1) {
    var commands = {
      "on": { on: true },
      "off": { on: false },
      "colorRed": { hue: 65280},
      "colorBlue": { hue: 46920},
      "colorYellow": { hue: 12750},
      "colorGreen": { hue: 25500},
      "colorPink": { hue: 56100},
      "loop": { effect: 'colorloop'},
      "static": { effect: 'none'}
    }
    var isLightsOn =     entry.indexOf(" on")
    var isLightsOff =    entry.indexOf(" off")
    var isLightsLoop =   entry.indexOf(" loop")
    var isLightsRed =    entry.indexOf(" red")
    var isLightsBlue =   entry.indexOf(" blue")
    var isLightsYellow = entry.indexOf(" yellow")
    var isLightsGreen =  entry.indexOf(" green")
    var isLightsPink =   entry.indexOf(" pink")
    var isLightsStatic = entry.indexOf(" static")
    if (isLightsOn > -1) {
      lightsChange(commands.on)
    }
    if (isLightsOff > -1) {
      lightsChange(commands.off)
    }
    if (isLightsRed > -1) {
      lightsChange(commands.colorRed)
    }
    if (isLightsBlue > -1) {
      lightsChange(commands.colorBlue)
    }
    if (isLightsYellow > -1) {
      lightsChange(commands.colorYellow)
    }
    if (isLightsGreen > -1) {
      lightsChange(commands.colorGreen)
    }
    if (isLightsPink > -1) {
      lightsChange(commands.colorPink)
    }
    if (isLightsLoop > -1) {
      lightsChange(commands.loop)
    }
    if (isLightsOn > -1) {
      lightsChange(commands.static)
    }
  }
  var isLight = entry.indexOf(" light")
  if (isLight > -1) {
    var commands = {
      "on": { on: true },
      "off": { on: false },
      "colorRed": { hue: 65280},
      "colorBlue": { hue: 46920},
      "colorYellow": { hue: 12750},
      "colorGreen": { hue: 25500},
      "colorPink": { hue: 56100},
      "loop": { effect: 'colorloop'},
      "static": { effect: 'none'}
    }
    var isLight1 = entry.indexOf(" 1");
    var isLight2 = entry.indexOf(" 2");
    var isLight3 = entry.indexOf(" 3");
    var isLightMain = entry.indexOf(" main ")
    if (isLight1 > -1) {
      var isLightsOn =     entry.indexOf(" on")
      var isLightsOff =    entry.indexOf(" off")
      var isLightsLoop =   entry.indexOf(" loop")
      var isLightsRed =    entry.indexOf(" red")
      var isLightsBlue =   entry.indexOf(" blue")
      var isLightsYellow = entry.indexOf(" yellow")
      var isLightsGreen =  entry.indexOf(" green")
      var isLightsPink =   entry.indexOf(" pink")
      var isLightsStatic = entry.indexOf(" static")
      if (isLightsOn > -1) {
        light1Change(commands.on)
      }
      if (isLightsOff > -1) {
        light1Change(commands.off)
      }
      if (isLightsRed > -1) {
        light1Change(commands.colorRed)
      }
      if (isLightsBlue > -1) {
        light1Change(commands.colorBlue)
      }
      if (isLightsYellow > -1) {
        light1Change(commands.colorYellow)
      }
      if (isLightsGreen > -1) {
        light1Change(commands.colorGreen)
      }
      if (isLightsPink > -1) {
        light1Change(commands.colorPink)
      }
      if (isLightsLoop > -1) {
        light1Change(commands.loop)
      }
      if (isLightsOn > -1) {
        light1Change(commands.static)
      }
    }
    if (isLight2 > -1) {
      var commands = {
        "on": { on: true },
        "off": { on: false },
        "colorRed": { hue: 65280},
        "colorBlue": { hue: 46920},
        "colorYellow": { hue: 12750},
        "colorGreen": { hue: 25500},
        "colorPink": { hue: 56100},
        "loop": { effect: 'colorloop'},
        "static": { effect: 'none'}
      }
      var isLightsOn =     entry.indexOf(" on")
      var isLightsOff =    entry.indexOf(" off")
      var isLightsLoop =   entry.indexOf(" loop")
      var isLightsRed =    entry.indexOf(" red")
      var isLightsBlue =   entry.indexOf(" blue")
      var isLightsYellow = entry.indexOf(" yellow")
      var isLightsGreen =  entry.indexOf(" green")
      var isLightsPink =   entry.indexOf(" pink")
      var isLightsStatic = entry.indexOf(" static")
      if (isLightsOn > -1) {
        light2Change(commands.on)
      }
      if (isLightsOff > -1) {
        light2Change(commands.off)
      }
      if (isLightsRed > -1) {
        light2Change(commands.colorRed)
      }
      if (isLightsBlue > -1) {
        light2Change(commands.colorBlue)
      }
      if (isLightsYellow > -1) {
        light2Change(commands.colorYellow)
      }
      if (isLightsGreen > -1) {
        light2Change(commands.colorGreen)
      }
      if (isLightsPink > -1) {
        light2Change(commands.colorPink)
      }
      if (isLightsLoop > -1) {
        light2Change(commands.loop)
      }
      if (isLightsOn > -1) {
        light2Change(commands.static)
      }
    }
    if (isLight3 > -1) {
      var commands = {
        "on": { on: true },
        "off": { on: false },
        "colorRed": { hue: 65280},
        "colorBlue": { hue: 46920},
        "colorYellow": { hue: 12750},
        "colorGreen": { hue: 25500},
        "colorPink": { hue: 56100},
        "loop": { effect: 'colorloop'},
        "static": { effect: 'none'}
      }
      var isLightsOn =     entry.indexOf(" on")
      var isLightsOff =    entry.indexOf(" off")
      var isLightsLoop =   entry.indexOf(" loop")
      var isLightsRed =    entry.indexOf(" red")
      var isLightsBlue =   entry.indexOf(" blue")
      var isLightsYellow = entry.indexOf(" yellow")
      var isLightsGreen =  entry.indexOf(" green")
      var isLightsPink =   entry.indexOf(" pink")
      var isLightsStatic = entry.indexOf(" static")
      if (isLightsOn > -1) {
        light3Change(commands.on)
      }
      if (isLightsOff > -1) {
        light3Change(commands.off)
      }
      if (isLightsRed > -1) {
        light3Change(commands.colorRed)
      }
      if (isLightsBlue > -1) {
        light3Change(commands.colorBlue)
      }
      if (isLightsYellow > -1) {
        light3Change(commands.colorYellow)
      }
      if (isLightsGreen > -1) {
        light3Change(commands.colorGreen)
      }
      if (isLightsPink > -1) {
        light3Change(commands.colorPink)
      }
      if (isLightsLoop > -1) {
        light3Change(commands.loop)
      }
      if (isLightsOn > -1) {
        light3Change(commands.static)
      }
    }
    if (isLightMain > -1) {
      var commands = {
        "on": { on: true },
        "off": { on: false },
        "colorRed": { hue: 65280},
        "colorBlue": { hue: 46920},
        "colorYellow": { hue: 12750},
        "colorGreen": { hue: 25500},
        "colorPink": { hue: 56100},
        "loop": { effect: 'colorloop'},
        "static": { effect: 'none'}
      }
      var isLightsOn =     entry.indexOf(" on")
      var isLightsOff =    entry.indexOf(" off")
      var isLightsLoop =   entry.indexOf(" loop")
      var isLightsRed =    entry.indexOf(" red")
      var isLightsBlue =   entry.indexOf(" blue")
      var isLightsYellow = entry.indexOf(" yellow")
      var isLightsGreen =  entry.indexOf(" green")
      var isLightsPink =   entry.indexOf(" pink")
      var isLightsStatic = entry.indexOf(" static")
      if (isLightsOn > -1) {
        light3Change(commands.on)
      }
      if (isLightsOff > -1) {
        light3Change(commands.off)
      }
      if (isLightsRed > -1) {
        light3Change(commands.colorRed)
      }
      if (isLightsBlue > -1) {
        light3Change(commands.colorBlue)
      }
      if (isLightsYellow > -1) {
        light3Change(commands.colorYellow)
      }
      if (isLightsGreen > -1) {
        light3Change(commands.colorGreen)
      }
      if (isLightsPink > -1) {
        light3Change(commands.colorPink)
      }
      if (isLightsLoop > -1) {
        light3Change(commands.loop)
      }
      if (isLightsOn > -1) {
        light3Change(commands.static)
      }
    }
  }
  //CHAT----------------------------------------------------------------------
  var isOpen = entry.indexOf(" open chat")
  if (isOpen > -1) {
    chat.css("display", "inline-block");
    displayChat = "true"
    inputbox.css("left", "230px")
    inputbox.attr("placeholder", "Type to chat. . . ")
  }
  //CHANGE -------------------------------------------------------------------
  var isChange = entry.indexOf(" change ")
  if (isChange > -1) {
    var thingsToChange = entry.split("change ")[1]
    var changeThis = thingsToChange.split(" to ")[0]
    var toThis = thingsToChange.split(" to ")[1]
    once(profile.username + ",,,,Change", function(currentChangeList) {
      var newChangeList = currentChangeList + ",0" + changeThis + "," + toThis
      storeValue(profile.username + ",,,,Change", newChangeList)
      output.html(changeThis + " will now read as this " + toThis)
    })
  }
  //LOOKUP -------------------------------------------------------------------
  var isResetClicker = entry.indexOf(" reset clicker ")
  if (isResetClicker > -1) {
    clicker.css("left",0);
    clicker.css("top",0);
  }
  var isLookup = entry.indexOf(" lookup ");
  var isLookkUp = entry.indexOf(" look up ");
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
    var bobTalks = new Audio("Audio/LetMeLookThatUp.mp3")
    bobTalks.play()
    memory = "let me look that up. . ."
    setTimeout(function(){openInNewTab("https://www.google.com/search?q=" + thing_to_lookup)}, 250);
    return("done!")
  }
  if (isLookkUp > -1) {
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
    var bobTalks = new Audio("Audio/LetMeLookThatUp.mp3")
    bobTalks.play()
    memory = "let me look that up. . ."
    setTimeout(function(){openInNewTab("https://www.google.com/search?q=" + thing_to_lookup)}, 250);
  }
  //TRANSLATE ------------
  var isTranslate = entry.indexOf(" translate ")
  if (isTranslate > -1) {
    var thing_to_translate = entry.split("translate ")[1]
    var bobTalks = new Audio("Audio/Translate.mp3")
    bobTalks.play()
    openInNewTab("http://www.spanishdict.com/translate/" + thing_to_translate)
    output.html("translating...")
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
      var bobTalks = new Audio("Audio/LookupYoutube.mp3")
      bobTalks.play()
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
    var bobTalks = new Audio("Audio/YouMustBeLoggedInToStoreNotes.mp3")
    bobTalks.play()
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
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
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
      var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
      bobTalks.play()
      memory = (problem_to_solve + "is equal to" + finalNumber)
    }
    if (isthereamultipysign > -1) {
    var firstNumbertoMultiply = parseInt(problem_to_solve.split("*")[0]);
    var secondNumbertoMultiply = parseInt(problem_to_solve.split("*")[1]);
    var finalNumber = (firstNumbertoMultiply*secondNumbertoMultiply);
    output.html(problem_to_solve + " is equal to " + finalNumber)
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
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
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
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
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
    memory = (problem_to_solve + "is equal to" + finalNumber)
  }
  var isMultipy = entry.indexOf("*")
  var isAdd = entry.indexOf("+")
  var isSubtract = entry.indexOf("-")
  var isDivide = entry.indexOf("/")
  if (isMultipy > -1) {
    var numbersToMultiply = entry.split("*")
    var answer = (parseInt(numbersToMultiply[0]) * parseInt(numbersToMultiply[1]))
    output.html(entry + " is equal to " + answer)
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
  }
  if (isAdd > -1) {
    var numbersToAdd = entry.split("+")
    var answer = (parseInt(numbersToAdd[0]) + parseInt(numbersToAdd[1]))
    output.html(entry + " is equal to " + answer)
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
  }
  if (isSubtract > -1) {
    var numbersToSubtract = entry.split("-")
    var answer = (parseInt(numbersToSubtract[0]) - parseInt(numbersToSubtract[1]))
    output.html(entry + " is equal to " + answer)
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
  }
  if (isDivide > -1) {
    var numbersToDivide = entry.split("/")
    var answer = (parseInt(numbersToDivide[0]) + parseInt(numbersToDivide[1]))
    output.html(entry + " is equal to " + answer)
    var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
    bobTalks.play()
  }
  //say ------------------------------------------------------------------------
  var isSay = entry.indexOf(" say ")
  if (isSay > -1) {
    output.html(entry.split(" say ")[1])
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
      var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
      bobTalks.play()
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
      var bobTalks = new Audio("Audio/GoingToYoutube.mp3")
      bobTalks.play()
      openInNewTab("https://www.youtube.com/")
      return "lmao goteeem"
    }
    if (place_to_go == "chat") {
      openInNewTab("https://jackbrasesco.github.io/chat")
      return
    }
    if (place_to_go == "schedule") {
      var bobTalks = new Audio("Audio/GoingToSchedule.mp3")
      bobTalks.play()
      openInNewTab("https://docs.google.com/spreadsheets/d/1x_TrA0pXxfy17RbSAbw-myCG8bj41esXwRkxIH6vvHA/edit#gid=12876729")

      return
    }
    if (place_to_go == "the schedule") {
      var bobTalks = new Audio("Audio/GoingToSchedule.mp3")
      bobTalks.play()
      openInNewTab("https://docs.google.com/spreadsheets/d/1x_TrA0pXxfy17RbSAbw-myCG8bj41esXwRkxIH6vvHA/edit#gid=12876729")
      return
    }
    if (place_to_go == "canvas") {
      var bobTalks = new Audio("Audio/GoingToCanvas.mp3")
      bobTalks.play()
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
      var bobTalks = new Audio("Audio/GoingToDrive.mp3")
      bobTalks.play()
      openInNewTab("https://drive.google.com/")
      return "josh is lame"
    }
    else {
      var bobTalks = new Audio("Audio/GoingWebsite.mp3")
      bobTalks.play()
      openInNewTab("https://" + place_to_go)
      return "ay lmao"
    }
  }
  //DEFINE ---------------------------------------------------------------------
  var isDefine = entry.indexOf(" define ")
  if (isDefine > -1) {
    var bobTalks = new Audio("Audio/FindDefinition.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    return "lmao"
  }
  var isSynonym = entry.indexOf(" synonym ")
  if (isSynonym > -1) {
    var bobTalks = new Audio("Audio/FindSynonym.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    return "gang gang"
  }
  //CHECK ----------------------------------------------------------------------
  var isCheck = entry.indexOf(" check ")
  if (isCheck > -1) {
    var isMyemail = entry.indexOf(" my email")
    if (isMyemail > -1) {
      var bobTalks = new Audio("Audio/CheckEmail.mp3")
      bobTalks.play()
      openInNewTab("https://mail.google.com");
      return "done!"
    }
    var isEmail = entry.indexOf(" email")
    if (isEmail > -1) {
      var bobTalks = new Audio("Audio/CheckEmail.mp3")
      bobTalks.play()
      openInNewTab("https://mail.google.com")
    }
  }
  //PLAY MUSIC -----------------------------------------------------------------
  var isPlay = entry.indexOf(" play ")
  if (isPlay > -1) {
    var what_to_play = entry.split(" play ")[1]
    var audioFile = new Audio("Audio/" + what_to_play + ".mp3")
    audioFile.play()
    var bobTalks = new Audio("Audio/LoadingDankMLGTunes.mp3")
    bobTalks.play()
    output.html("LOADING DANK MLG TUNES. . .")
    setTimeout(function() {
      output.html("PLAYING DANK MLG TUNES. . .")
    },1000)
  }
  var isPause = entry.indexOf(" pause")
  if (isPause  > -1) {
    audioFile.pause()
    output.html("Music paused")
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
  var greetingresponeVoice = ["HeyThere.mp3","Howdy.mp3","HiHowAreYou.mp3","SalutationsEarthling.mp3"]
  if (isHi > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    var response_voice = greetingresponeVoice[randomNumber3]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (isHello > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    var response_voice = greetingresponeVoice[randomNumber3]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (isHey > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    var response_voice = greetingresponeVoice[randomNumber3]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (iswhatsup > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    var response_voice = greetingresponeVoice[randomNumber3]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  if (iswhatsupgrammar > -1) {
    var response_greeting = greetingresponse[randomNumber3]
    var response_voice = greetingresponeVoice[randomNumber3]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(response_greeting)
    memory = response_greeting
    return
  }
  //ROASTS AND TOASTS ----------------------------------------------------------------
  var isSuck = entry.indexOf(" you suck")
  if (isSuck > -1) {
    output.html("You swallow.")
    var bobTalks = new Audio("Audio/YouSwallow.mp3")
    bobTalks.play()
    return
  }
  var isFuck = entry.indexOf(" fuck you")
  if (isFuck > -1) {
    var bobTalks = new Audio("Audio/WhenAndWhere.mp3")
    bobTalks.play()
    output.html("When and where?")
    return
  }
  var isHateBob = entry.indexOf(" hate you")
  if (isHateBob > -1) {
    var bobTalks = new Audio("Audio/ThenIGuessTheFeelingIsMutual.mp3")
    bobTalks.play()
    output.html("Then I guess the feeling is mutual.")
    return
  }
  var isHate = entry.indexOf(" hate")
  if (isHate > -1) {
    var bobTalks = new Audio("Audio/HateIsAStrongWord.mp3")
    bobTalks.play()
    output.html("Hate is a strong word.")
    return
  }
  var isBob = entry.indexOf(" bob")
  if (isBob > -1) {
    var bobTalks = new Audio("Audio/ThatsMe.mp3")
    bobTalks.play()
    output.html("That's me")
  }
  var isLove = entry.indexOf(" love you")
  if (isLove > -1) {
    output.html("I hate that I want you <br> you want her you need her <br> and I will never be her D:")
    var dankMlGBeats = new Audio("Audio/ilybae.wav");
    dankMlGBeats.play()
    return
  }
  var isHowAreYou = entry.indexOf(" how are you")
  if (isHowAreYou > -1) {
    var feelingFlirty = Math.floor(Math.random() * 10)
    if (feelingFlirty == 6) {
      var bobTalks = new Audio("Audio/ImDoingGoodNowThatYoureHere.mp3")
      bobTalks.play()
      output.html("I'm doing good. . . now that you're here ;)")
      return
    } else {
      var bobTalks = new Audio("Audio/ImDoingDandylicious.mp3")
      bobTalks.play()
    output.html("I'm doing dandylicious")
    return
  }
  }
  var isSavage = entry.indexOf(" savage")
  if (isSavage > -1) {
    var bobTalks = new Audio("Audio/NobodyIsAsSavageAsMe.mp3")
    bobTalks.play()
    output.html("Nobody is as savage as me")
    return
  }
  var isCool = entry.indexOf(" cool")
  if (isCool > -1) {
    var bobTalks = new Audio("Audio/SuperCool.mp3")
    bobTalks.play()
    output.html("Super Cool!")
  }
  var isFriend = entry.indexOf(" friend")
  if (isFriend > -1) {
    output.html("You are not my friend, you are my brother, my friend.")
    var MyFren = new Audio("Audio/myFren.wav")
    MyFren.play()
  }
  //HOW ARE YOU RESPONSE----------------------------------------
  var isGood = entry.indexOf(" good")
  var isFine = entry.indexOf(" fine")
  var isBad = entry.indexOf(" bad")
  var isSad = entry.indexOf(" sad")
  var positivehauresponse = ["That's good to hear!", "Great!","Alrighty then"];
  var negitivehauresponse = ["Sorry to hear that","That sucks. . ."];
  var positiveVoiceResponse = ["ThatsGoodToHear.mp3","Great.mp3","AlrightyThen.mp3"]
  var negitiveVoiceResponse = ["SorryToHearThat.mp3","ThatSucks.mp3"]
  var randomNumber4 = Math.floor(Math.random() * 3)
  var randomNumber5 = Math.floor(Math.random() * 2)
  if (negitvity == "true") {
    if (isGood > -1) {
      var response_voice = negitiveVoiceResponse[randomNumber5]
      var bobTalks = new Audio("Audio/" + response_voice)
      bobTalks.play()
     output.html(negitivehauresponse[randomNumber5])
     return
   }
   if (isFine > -1) {
     var response_voice = negitiveVoiceResponse[randomNumber5]
     var bobTalks = new Audio("Audio/" + response_voice)
     bobTalks.play()
     output.html(negitivehauresponse[randomNumber5])
     return
   }
   if (isBad > -1) {
     var response_voice = positiveVoiceResponse[randomNumber4]
     var bobTalks = new Audio("Audio/" + response_voice)
     bobTalks.play()
     output.html(positivehauresponse[randomNumber4])
     return
   }
   if (isSad > -1) {
     var response_voice = positiveVoiceResponse[randomNumber4]
     var bobTalks = new Audio("Audio/" + response_voice)
     bobTalks.play()
     output.html(positivehauresponse[randomNumber4])
     return
   }
 } else {
   if (isGood > -1) {
     var response_voice = positiveVoiceResponse[randomNumber4]
     var bobTalks = new Audio("Audio/" + response_voice)
     bobTalks.play()
    output.html(positivehauresponse[randomNumber4])
    return
  }
  if (isFine > -1) {
    var response_voice = positiveVoiceResponse[randomNumber4]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(positivehauresponse[randomNumber4])
    return
  }
  if (isBad > -1) {
    var response_voice = negitiveVoiceResponse[randomNumber5]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(negitivehauresponse[randomNumber5])
    return
  }
  if (isSad > -1) {
    var response_voice = negitiveVoiceResponse[randomNumber5]
    var bobTalks = new Audio("Audio/" + response_voice)
    bobTalks.play()
    output.html(negitivehauresponse[randomNumber5])
    return
  }
}
  //Thanks ----------------------------------------------------------------
  var isThanks = entry.indexOf(" thanks")
  if (isThanks > -1) {
    var bobTalks = new Audio("Audio/YoureWelcome.mp3")
    bobTalks.play()
    output.html("you're welcome!")
  }
  var isThankYou = entry.indexOf(" thank you")
  if (isThankYou > -1) {
    var bobTalks = new Audio("Audio/YoureWelcome.mp3")
    bobTalks.play()
    output.html("you're welcome!")
  }
  //WHAT ------------------------------------------------------------------
  var isWhatQuestion = entry.indexOf(" what ")
  if (isWhatQuestion > -1) {
    var isMultipy = entry.indexOf("*")
    var isAdd = entry.indexOf("+")
    var isSubtract = entry.indexOf("-")
    var isDivide = entry.indexOf("/")
    if (isMultipy > -1) {
      var problem = entry.split("what is ")[1]
      var numbersToMultiply = problem.split("*")
      var answer = (parseInt(numbersToMultiply[0]) * parseInt(numbersToMultiply[1]))
      var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
      bobTalks.play()
      output.html(entry + " is equal to " + answer)
      return
    }
    if (isAdd > -1) {
      var problem = entry.split("what is ")[1]
      var numbersToAdd = problem.split("+")
      var answer = (parseInt(numbersToAdd[0]) + parseInt(numbersToAdd[1]))
      var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
      bobTalks.play()
      output.html(entry + " is equal to " + answer)
      return
    }
    if (isSubtract > -1) {
      var problem = entry.split("what is ")[1]
      var numbersToSubtract = problem.split("-")
      var answer = (parseInt(numbersToSubtract[0]) - parseInt(numbersToSubtract[1]))
      var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
      bobTalks.play()
      output.html(entry + " is equal to " + answer)
      return
    }
    if (isDivide > -1) {
      var problem = entry.split("what is ")[1]
      var numbersToDivide = problem.split("/")
      var answer = (parseInt(numbersToDivide[0]) / parseInt(numbersToDivide[1]))
      var bobTalks = new Audio("Audio/MathHasBeenComputed.mp3")
      bobTalks.play()
      output.html(entry + " is equal to " + answer)
      return
    }
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
        return
      })
    }
    if (timeIsIt > -1) {
      openInNewTab("https://www.google.com/search?q=what+time+is+it&rlz=1C5CHFA_enUS707US707&oq=what+time+is+it&aqs=chrome..69i57j69i60l2j69i59.3796j0j1&sourceid=chrome&ie=UTF-8")
      return
    }
    if (isLoveis > -1) {
      output.html("baby don't hurt me")
      var sickTrack = new Audio("Audio/WhatIsLove.wav")
      sickTrack.play()
      return

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
          return
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
        var bobTalks = new Audio("Audio/MyNameIsBotBob.mp3")
        bobTalks.play()
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
            var bobTalks = new Audio("Audio/Cornsilk.mp3")
            bobTalks.play()
            output.html("Cornsilk")
            memory = "Cornsilk"
            return "chip is lmae"
          }
          if (isFood > -1) {
            var bobTalks = new Audio("Audio/Corn.mp3")
            bobTalks.play()
            output.html("Corn")
            memory = "Corn"

            return "austin is lame"
          }
        }
        if (isColor > -1) {
          var bobTalks = new Audio("Audio/MyFavoriteColorIsSmaragdine.mp3")
          bobTalks.play()
          output.html("My favorite color is smaragdine")
          memory = "My favorite color is smaragdine"
          setTimeout(function() {
            output.html("What is YOUR favorite color?")
          },1000)
          awaitResponseColor()
          return "ur a bot"
        }
        if (isFood > -1) {
          var bobTalks = new Audio("Audio/TheFleshOfMyFallenEnemies.mp3")
          bobTalks.play()
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
    if (isWhatQuestion == 0) {
      var bobTalks = new Audio("Audio/Searching.mp3")
      bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    output.html("searching . . .")
    return
  }
  }
  var isWhyQuestion = entry.indexOf(" why ")
  if (isWhyQuestion == 0) {
    var bobTalks = new Audio("Audio/Searching.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    output.html("searching . . .")
    return
  }
  var isWhoQuestion = entry.indexOf(" who ")
  if (isWhoQuestion == 0) {
    var bobTalks = new Audio("Audio/Searching.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    output.html("searching . . .")
    return
  }
  var isWhereQuestion = entry.indexOf(" where ")
  if (isWhereQuestion == 0) {
    var bobTalks = new Audio("Audio/Searching.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    output.html("searching . . .")
    return
  }
  var isHowQuestion = entry.indexOf(" how ")
  if (isHowQuestion == 0) {
    var bobTalks = new Audio("Audio/Searching.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    output.html("searching . . .")
    return
  }
  var isIsQuestion = entry.indexOf(" is ")
  if (isIsQuestion == 0) {
    var bobTalks = new Audio("Audio/Searching.mp3")
    bobTalks.play()
    openInNewTab("https://www.google.com/search?q=" + entry)
    output.html("searching . . .")
    return
  }
  var isWhy = entry.indexOf(" why")
  if (isWhy > -1) {
    var bobTalks = new Audio("Audio/BeacuseISaidSo.mp3")
    bobTalks.play()
    output.html("Because I said so.")
    return
  }
  if (displayChat == "false") {
    if (output.html() == "") {
      output.html("I didn't get that. . . I'm not very smart <br> please yell at Jack to report a problem ")
      var bobTalks = new Audio("Audio/IDidntGetThat.mp3")
      bobTalks.play()
      memory = "Sorry, I didn't get that . . . <br> please email jacbras@nuevaschool.org to report a problem"
    }
  } else {
    output.html("")
  }
}
var thing = "xDDDDDlmaololxDDDPAT"
var fishyness = "null"


var commands = {
  'hey bob *thing': function(thing) {
    clicker.css("background-color","yellow")
   var isGoTo = thing.indexOf("go to ")
   if (isGoTo > -1) {
      var placeThatGoingTo = thing.split("go to ")[1]
      var noSpacesInHere = placeThatGoingTo.replace(/\s+/g, '')
   }
   var entry = (" " + thing.toLowerCase())
  bob(entry)
}
}

annyang.addCommands(commands);
annyang.start()


inputbox.keydown(function(e) {
  if (e.keyCode == 13) {
    if (displayChat == "true") {
      var message = (inputbox.val()).replace(/</g, "&lt;").replace(/>/g, "&gt;");
      var user = (profile.username).replace(/</g, "&lt;").replace(/>/g, "&gt;")
      addListItem("chat", user + ",,,." + message)
      inputbox.val("")
    } else {
    if (localStorage.getItem("loggedIn") == "true")  {
      var inputvalue = inputbox.val()
      var detectList = []
      once(profile.username + ",,,,Change", function(change) {
        fishyness = "false"
        var changeList = change.split(",")
        for (i = 0; i < changeList.length; i++) {
          var isThingToChange = changeList[i].indexOf(0);
          if (isThingToChange > -1) {
            var cleanedUpChangeList = changeList[i].replace("0","")
            detectList.push(cleanedUpChangeList)
            detectList.push("111011010100101010011")
          }
        }
        thing = inputvalue
        for (i = 0; i < detectList.length; i++) {
          if (detectList[i] == "111011010100101010011") {

          } else {
          var isThereSomethingFishyGoingOn = thing.indexOf(detectList[i])
          if (isThereSomethingFishyGoingOn > -1) {
            fishyness = "true"
            var thingy = new RegExp(detectList[i], "g")
            var newthingy = thing.replace(thingy, changeList[i + 1])
            var entry = (" " + newthingy)
            bob(" " + entry)
          }
        }
        }
        if (fishyness == "false") {
          bob(" " + inputvalue)
        }
      })
    } else {
    var entry = (" " + inputbox.val().toLowerCase())
    bob(entry)
  }
  }
}
})

onNewListItem("chat", function(r) {
  var messageUser = r.split(",,,.")[0]
  var messageMessage = r.split(",,,.")[1]
  var message = messageUser.replace(/</g, "&lt;").replace(/>/g, "&gt;").bold() + ": " + messageMessage.replace(/</g, "&lt;").replace(/>/g, "&gt;")
  chatList.push(message)
  var limit = chatList.slice(chatList.length - 9, chatList.length)
  chat.html(limit.join("<br>"))
})


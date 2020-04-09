const express = require("express")
const app = express()

//
app.set('view engine', 'ejs')



app.get("/",function(req,res){
  let getDay = new Date()
  console.log(getDay.getDay())
  // creating variable to capture specific date (0-6)
  let currentDay = getDay.getDay()
  // using switch statement to render specific date from getDay.getDay()
  let day = ""

  switch(currentDay) {
    case 0:
      day = "Sunday"
      break;

    case 1:
      day = "Monday"
      break;

    case 2:
      day = "Tuesday"
      break;

        case 3:
          day = "Wednesday"
          break;

        case 4:
          day = "Thursday"
          break;

          case 5:
            day = "Friday"
              break;

            case 6:
              day = "Saturday"
              break;
            default:

            console.log("Error: current day is equal to" + currentDay)
  }

  res.render("list", {day: day})
})

app.listen(3000,function(){
  console.log("running on 3000.")  
})
// Input Validation
/*
function inputFields() {
    var boxInput = document.getElementById('input').value;
    if (boxInput == "") {
        alert("Nothing was entered. Try again.");
    }
    else {
        return boxInput;
    }
}
*/

// Enter to submit the text!!!

document.getElementById("user_input1")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add1").click();
    }
});

document.getElementById("user_input2")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add2").click();
    }
});

document.getElementById("user_input3")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add3").click();
    }
});

document.getElementById("user_input4")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add4").click();
    }
});

document.getElementById("user_input5")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add5").click();
    }
});

document.getElementById("user_input6")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add6").click();
    }
});

document.getElementById("user_input7")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("add7").click();
    }
});

document.getElementById("ing_input")
.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13 ) {
        document.getElementById("ing").click();
    }
});

// For Monday!!!

function get_monday() {
    var monday = new Array;
    var monday_str = localStorage.getItem('mondaymeals');
    if (monday_str != null) {
        monday = JSON.parse(monday_str); 
    }
    return monday;
}

function mondayAdd() {

    var newmonday = document.getElementById('user_input1').value;
    if (newmonday == "") {
        alert("Nothing was entered. Try again.");
    }
    else {
        var mondaylist = get_monday();
        mondaylist.push(newmonday);
        localStorage.setItem('mondaymeals', JSON.stringify(mondaylist));

        mondayShow();

        return false;

    }

}

function mondayRemove() {
    var id = this.getAttribute('id');
    var monday = get_monday();
    monday.splice(id, 1);
    localStorage.setItem('mondaymeals', JSON.stringify(monday));

    mondayShow();

    return false;
}

function mondayShow() {
    var monday = get_monday();

    var html = '<ul>';
    for(var i=0; i<monday.length; i++) {
        html += '<li>' + monday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item1').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', mondayRemove);
    };
}

document.getElementById('add1').addEventListener('click', mondayAdd);
mondayShow();

// For Tuesday!!!

function get_tuesday() {
    var tuesday = new Array;
    var tuesday_str = localStorage.getItem('tuesdaymeals');
    if (tuesday_str != null) {
        tuesday = JSON.parse(tuesday_str); 
    }
    return tuesday;
}

function tuesdayAdd() {
    var newtuesday = document.getElementById('user_input2').value;
    if (newtuesday == "") {
        alert("Nothing was entered. Try again.");
    }
    else {
        var tuesdaylist = get_tuesday();
        tuesdaylist.push(newtuesday);
        localStorage.setItem('tuesdaymeals', JSON.stringify(tuesdaylist));

        tuesdayShow();

        return false;
    }

}

function tuesdayRemove() {
    var id = this.getAttribute('id');
    var tuesday = get_tuesday();
    tuesday.splice(id, 1);
    localStorage.setItem('tuesdaymeals', JSON.stringify(tuesday));

    tuesdayShow();

    return false;
}

function tuesdayShow() {
    var tuesday = get_tuesday();

    var html = '<ul>';
    for(var i=0; i<tuesday.length; i++) {
        html += '<li>' + tuesday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item2').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', tuesdayRemove);
    };
}

document.getElementById('add2').addEventListener('click', tuesdayAdd);
tuesdayShow();

// For Wednesday

function get_wednesday() {
    var wednesday = new Array;
    var wednesday_str = localStorage.getItem('wednesdaymeals');
    if (wednesday_str != null) {
        wednesday = JSON.parse(wednesday_str); 
    }
    return wednesday;
}

function wednesdayAdd() {
    var newwednesday = document.getElementById('user_input3').value;
    if (newwednesday == "") {
        alert("Noting was entered. Try again.")
    }
    else {
        var wednesdaylist = get_wednesday();
        wednesdaylist.push(newwednesday);
        localStorage.setItem('wednesdaymeals', JSON.stringify(wednesdaylist));

        wednesdayShow();

        return false;  
    }

}

function wednesdayRemove() {
    var id = this.getAttribute('id');
    var wednesday = get_wednesday();
    wednesday.splice(id, 1);
    localStorage.setItem('wednesdaymeals', JSON.stringify(wednesday));

    wednesdayShow();

    return false;
}

function wednesdayShow() {
    var wednesday = get_wednesday();

    var html = '<ul>';
    for(var i=0; i<wednesday.length; i++) {
        html += '<li>' + wednesday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item3').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', wednesdayRemove);
    };
}

document.getElementById('add3').addEventListener('click', wednesdayAdd);
wednesdayShow();

// For Thursday

function get_thursday() {
    var thursday = new Array;
    var thursday_str = localStorage.getItem('thursdaymeals');
    if (thursday_str != null) {
        thursday = JSON.parse(thursday_str); 
    }
    return thursday;
}

function thursdayAdd() {
    var newthursday = document.getElementById('user_input4').value;
    if (newthursday == "") {
        alert("Nothing was entered. Try again.")
    }
    else {
        var thursdaylist = get_thursday();
        thursdaylist.push(newthursday);
        localStorage.setItem('thursdaymeals', JSON.stringify(thursdaylist));

        thursdayShow();

        return false;  
    }

}

function thursdayRemove() {
    var id = this.getAttribute('id');
    var thursday = get_thursday();
    thursday.splice(id, 1);
    localStorage.setItem('thursdaymeals', JSON.stringify(thursday));

    thursdayShow();

    return false;
}

function thursdayShow() {
    var thursday = get_thursday();

    var html = '<ul>';
    for(var i=0; i<thursday.length; i++) {
        html += '<li>' + thursday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item4').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', thursdayRemove);
    };
}

document.getElementById('add4').addEventListener('click', thursdayAdd);
thursdayShow();

// For Friday 

function get_friday() {
    var friday = new Array;
    var friday_str = localStorage.getItem('fridaymeals');
    if (friday_str != null) {
        friday = JSON.parse(friday_str); 
    }
    return friday;
}

function fridayAdd() {
    var newfriday = document.getElementById('user_input5').value;
    if (newfriday == "") {
        alert("Nothing was entered. Try again.")
    }
    else {
        var fridaylist = get_friday();
        fridaylist.push(newfriday);
        localStorage.setItem('fridaymeals', JSON.stringify(fridaylist));

        fridayShow();

        return false;   
    }

}

function fridayRemove() {
    var id = this.getAttribute('id');
    var friday = get_friday();
    friday.splice(id, 1);
    localStorage.setItem('fridaymeals', JSON.stringify(friday));

    fridayShow();

    return false;
}

function fridayShow() {
    var friday = get_friday();

    var html = '<ul>';
    for(var i=0; i<friday.length; i++) {
        html += '<li>' + friday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item5').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', fridayRemove);
    };
}

document.getElementById('add5').addEventListener('click', fridayAdd);
fridayShow();

// Saturday

function get_saturday() {
    var saturday = new Array;
    var saturday_str = localStorage.getItem('saturdaymeals');
    if (saturday_str != null) {
        saturday = JSON.parse(saturday_str); 
    }
    return saturday;
}

function saturdayAdd() {
    var newsaturday = document.getElementById('user_input6').value;
    if (newsaturday == "") {
        alert("Nothing was entered. Try again.")
    }
    else {
        var saturdaylist = get_saturday();
        saturdaylist.push(newsaturday);
        localStorage.setItem('saturdaymeals', JSON.stringify(saturdaylist));

        saturdayShow();

        return false;   
    }

}

function saturdayRemove() {
    var id = this.getAttribute('id');
    var saturday = get_saturday();
    saturday.splice(id, 1);
    localStorage.setItem('saturdaymeals', JSON.stringify(saturday));

    saturdayShow();

    return false;
}

function saturdayShow() {
    var saturday = get_saturday();

    var html = '<ul>';
    for(var i=0; i<saturday.length; i++) {
        html += '<li>' + saturday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item6').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', saturdayRemove);
    };
}

document.getElementById('add6').addEventListener('click', saturdayAdd);
saturdayShow();

// Sunday


function get_sunday() {
    var sunday = new Array;
    var sunday_str = localStorage.getItem('sundaymeals');
    if (sunday_str != null) {
        sunday = JSON.parse(sunday_str); 
    }
    return sunday;
}

function sundayAdd() {
    var newsunday = document.getElementById('user_input7').value;
    if (newsunday == "") {
        alert("Nothing was entered. Try again.")
    }
    else {
        var sundaylist = get_sunday();
        sundaylist.push(newsunday);
        localStorage.setItem('sundaymeals', JSON.stringify(sundaylist));

        sundayShow();

        return false;     
    }

}

function sundayRemove() {
    var id = this.getAttribute('id');
    var sunday = get_sunday();
    sunday.splice(id, 1);
    localStorage.setItem('sundaymeals', JSON.stringify(sunday));

    sundayShow();

    return false;
}

function sundayShow() {
    var sunday = get_sunday();

    var html = '<ul>';
    for(var i=0; i<sunday.length; i++) {
        html += '<li>' + sunday[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('list_item7').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', sundayRemove);
    };
}

document.getElementById('add7').addEventListener('click', sundayAdd);
sundayShow();

// For Ingredients

function get_ingredients() {
    var ingredients = new Array;
    var ingredients_str = localStorage.getItem('inglist');
    if (ingredients_str != null) {
        ingredients = JSON.parse(ingredients_str); 
    }
    return ingredients;
}

function ingredientsAdd() {
    var newingredient = document.getElementById('ing_input').value;
    if (newingredient == "") {
        alert("Nothing was entered. Try again.")
    }
    else {
        var ingredientlist = get_ingredients();
        ingredientlist.push(newingredient);
        localStorage.setItem('inglist', JSON.stringify(ingredientlist));

        ingredientsShow();

        return false;      
    }

}

function ingredientsRemove() {
    var id = this.getAttribute('id');
    var ingredients = get_ingredients();
    ingredients.splice(id, 1);
    localStorage.setItem('inglist', JSON.stringify(ingredients));

    ingredientsShow();

    return false;
}

function ingredientsShow() {
    var ingredients = get_ingredients();

    var html = '<ul>';
    for(var i=0; i<ingredients.length; i++) {
        html += '<li>' + ingredients[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';

    document.getElementById('ing_list').innerHTML = html;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ingredientsRemove);
    };
}

document.getElementById('ing').addEventListener('click', ingredientsAdd);
ingredientsShow();
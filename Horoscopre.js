var signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]
var messages = ["Pressures on the job may be mounting. You might feel so disgruntled that you want to chuck it all and run away. Foreign countries and distant states may suddenly seem far more appealing than usual. " +
    "Maybe it's a good idea to plan a vacation, Aries. The stresses you've been experiencing could adversely affect your health. You need to release them somehow. Give it some thought.",
    "Legal matters may be on your mind today, Taurus. Maybe your insecurities are blowing a certain difficulty all out of proportion. You need to view the entire situation a little more objectively.","You may need " +
    "someone's help or advice today, Gemini. Don't be afraid to ask for it.",
    "Spend your alone time relaxing and sprucing yourself up, Cancer.", "You are chock-full of ripe clarity today Leo, and you are able to get a handle on scheduling and other details with little (if any) guidance.",
    "You are making incredible progress right now, Virgo, but you will have to be careful not to push things too far too fast.", " Social occasions of all kinds could take place today, Libra. Some older visitors, " +
    "perhaps your parents, could visit your home.", "Someone you've been expecting to call might not do so today, Scorpio, and this could worry you a little. Don't be too shy to pick up the phone and call. ",
    "You're happiest in wide-open spaces with plenty of adventure and excitement, Scorpio." , " The desire to get together with friends is strong today, Capricorn, but you might be unable to do it as early as you'd hoped. You could be delayed by leftover work or " +
    "chores." , "A career goal you've been hoping to reach may seem uncertain now, Aquarius. You could be wondering if your work has gone for naught. ", "Are you spending a lot of time working on something " +
    "you've been trying to learn well? It could be more confusing than usual today, Pisces."]
var images = ["img/aries.png", "img/taurus.png" , "img/gemini.png" , "img/cancer.png" , "img/leo.png" , "img/virgo.png" , "img/libra.png" ,
    "img/scorpio.png" , "img/sagittarius.png" , "img/capricorn.png" , "img/aquarius.png" , "img/pisces.png"]
function start() {
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("name").value;
    var invalid = notADay();
    var sign = determineHoroscope(month, day);
    var birthday = birthdayToday(month, day);

    document.getElementById("outputSign").innerHTML = "You are a " + signs[sign];
    document.getElementById("outputMessages").innerHTML = messages[sign];
    document.getElementById("image").src = images[sign];
    document.getElementById("outputName").innerHTML = "Hi " + name + ","
    console.log(name);
}

function determineHoroscope(month, day) {


    //Aries Mar 21 - Apr 19
    if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        //return sign = "Aries"
        return 0;
    }

    //Taurus Apr 20 - May 20
    if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        //return sign = "Taurus"
        return 1;
    }

    //Gemini May 21 - Jun 20
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        //return sign = "Gemini"
        return 2;
    }

    //Cancer Jun 21 - Jul 22
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        //return sign = "Cancer"
        return 3;
    }

    //Leo July 23 - August 22
    if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        //return sign = "Leo"
        return 4;
    }

    //Virgo Aug 23 - Sept 22
    if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        //return sign = "Virgo"
        return 5;
    }

    //Libra Sept 23 - Oct 22
    if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        //return sign = "Libra"
        return 6;
    }

    // Scorpio Oct 23 - Nov 21
    if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        //return sign = "Scorpio"
        return 7;
    }

    //Saggitarius Nov 22 - Dec 21
    if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        //return sign = "Saggitarius"
        return 8;
    }

    //Capricorn Dec 22 - Jan 19
    if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        //return sign = "Capricorn"
        return 9;
    }

    //Aquarius Jan 20 - Feb 18
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        //return sign = "Aquarius"
        return 10;
    }

    //Pisces Feb 19 - Mar 20
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        //return sign = "Pisces"

        return 11;
    }

}

function notADay(day){
    console.log(day);
    var month = document.getElementById("month").value;
    console.log(month);
    if((month == 2 && day>28) || (month == 4 && day>30) || (month == 6 && day>30) || (month == 9 && day>30) || (month == 11 && day>30)){
        return document.getElementById("go").disabled = true

    } else {
        return document.getElementById("go").disabled = false
    }
}

function birthdayToday(month,day){
    var today = new Date();
    var date = today.getDate();
    var monn = today.getMonth()+1;

    if (date == day && monn == month){
        return document.getElementById("outputBirthday").innerHTML = "Happy Birthday! This next year is going to be awesome for you." +
            "Keep up the good work, kid.";
    }
}


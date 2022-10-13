var modal = document.querySelector('#modalDes')
var movieopen = document.querySelectorAll(".movies");
var closeBtn = document.querySelector("#cut");
var filmname = document.querySelectorAll(".movies .nam");

var imagep = document.querySelector("#imagef img");
var fname = document.querySelector("#fname");
var langu = document.querySelector("#lang");
var reldate = document.querySelector("#released");
var info = document.querySelector("#info");

var loginbtn = document.querySelector("#loginbtn");
var loginbtndiv = document.querySelector("#loginb");
var loginbox = document.querySelector("#loginDes");
var loginbtn2 = document.querySelector("#loginbtn3");

var userndiv=document.querySelector("#usernamediv");
var usernspace=document.querySelector("#usernamediv h2");
var logoutbtndiv=document.querySelector("#logoutb");
var logoutbtn=document.querySelector("#logoutbtn");

var Searchbtn=document.querySelector('#searchbtn');

var err1 = document.getElementsByClassName("error")[0];
var err2 = document.getElementsByClassName("error")[1];


for (let i = 0; i < movieopen.length; i++) {

    movieopen[i].addEventListener('click', function () {
        addProperties(i);
    })

    movieopen[i].addEventListener('click', function openModal() {
        modal.style.display = 'block';
    })

}

closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
})

window.addEventListener('click', function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})

function addProperties(i) {
    if (i == 0) {
        imagep.src = "Images/AvengersEndgame.jpeg";
        fname.innerHTML = "Avengers Endgame"
        langu.innerHTML = "English/Hindi"
        reldate.innerHTML = "26 April"
        info.innerHTML = "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.";
    }
    else if (i == 1) {
        imagep.src = "Images/KabirS.jpg";
        fname.innerHTML = "Kabir Singh";
        langu.innerHTML = "Hindi";
        reldate.innerHTML = "21 June";
        info.innerHTML = "An exalted but short-fused surgeon plunges into a spiral of drugs, alcohol and rage after his intense relationship with his girlfriend turbulently ends.";
    }
    else if (i == 2) {
        imagep.src = "Images/Toy4.jpg";
        fname.innerHTML = "Toy Story";
        langu.innerHTML = "English";
        reldate.innerHTML = "21 june";
        info.innerHTML = "When a new toy called 'Forky' joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.";
    }
    else if (i == 3) {
        imagep.src = "Images/Puada.jpg";
        fname.innerHTML = "Puaada";
        langu.innerHTML = "Punjabi";
        reldate.innerHTML = "12 june";
        info.innerHTML = "The film follows the love story of a Punjabi village boy, running a dairy farm and is in a relationship with Raunak, an air force officer's daughter.";
    }
    else if (i == 4) {
        imagep.src = "Images/jindeMeriye.jpg";
        fname.innerHTML = "Jinde Meriye";
        langu.innerHTML = "Punjabi";
        reldate.innerHTML = "20 Jan";
        info.innerHTML = "Yaadi falls in love with Rehmat, an innocent and focused student. Rehmat's father decides to arrange hermarriage with a law-abiding man called Yuvi which places Rehmat at a crossroad in her life.";
    }
    else if (i == 5) {
        imagep.src = "Images/Pagglait.jpg";
        fname.innerHTML = "Pagglait";
        langu.innerHTML = "hindi";
        reldate.innerHTML = "28 march";
        info.innerHTML = "The film follows a young widow as she learns how to face the family and was released on 26 March";
    }
    else if (i == 6) {
        imagep.src = "Images/Annabell.jpg";
        fname.innerHTML = "Annabelle";
        langu.innerHTML = "Engish";
        reldate.innerHTML = "26 june";
        info.innerHTML = "Demonologists Ed and Lorraine Warren confiscate the Annabelle doll from nurses Debbie and Camilla, who claim that the doll often performed violent activities in their apartment. During the drive back home, the doll summons spirits to attack Ed, but he narrowly survives. Annabelle is locked in a sacred glass case in the couple's artifacts room that is blessed by Father Gordon to ensure the evil is contained.";
    }
    else if (i == 7) {
        imagep.src = "Images/WhiteTiger.jpg";
        fname.innerHTML = "The White Tiger";
        langu.innerHTML = "Hindi";
        reldate.innerHTML = "22 january";
        info.innerHTML = "An adaptation of Aravind Adiga's 2008 novel of the same name, the story is about Balram, who comes from a poor Indian village and uses his wit and cunning to escape from poverty.";
    }
    else if (i == 8) {
        imagep.src = "Images/BigBull.jpeg";
        fname.innerHTML = "Big Bull";
        langu.innerHTML = "Hindi";
        reldate.innerHTML = "8 April";
        info.innerHTML = "The story of the film is based on real events of financial market that took place between 1990 and 2000 involving Harshad Mehta and his financial crimes.";
    }
    else if (i == 9) {
        imagep.src = "Images/Tesla.jpg";
        fname.innerHTML = "Tesla";
        langu.innerHTML = "English";
        reldate.innerHTML = "27 january";
        info.innerHTML = "The narrator tells how Nikola Tesla, saw electricity when petting his cat. In 1884 New York City, adult Nikola Tesla (Ethan Hawke) is working for Thomas Edison (Kyle MacLachlan), who doesn't seem to regard Tesla highly.";
    }
    else {
        imagep.src = "Images/DilBechaara.jpg";
        fname.innerHTML = "Dil Bechaara";
        langu.innerHTML = "Hindi";
        reldate.innerHTML = "24 July";
        info.innerHTML = "Dil Bechara is the story of Kizie Basu and Immanuel Rajkumar Junior or Manny and explores the funny, thrilling, and tragic adventure of being alive and in love. Together Kizie and Manny embark on an on-off-up-down-sad and sweet profound journey into the heart of that crazy little thing called life.";
    }
}



loginbtn.addEventListener('click', function () {
    loginbox.style.display = 'block';
})

window.addEventListener('click', function (e) {
    if (e.target == loginbox) {
        loginbox.style.display = "none";
    }
})

function clearErrors() {
    errors = document.getElementsByClassName('error');
    for (let item of errors) {
        item.innerHTML = "";
    }
}

function submitForm(e) {
    var user = document.getElementById('usernm').value;
    var pass = document.getElementById('passwd').value;
    console.log(user);

    var regex=/^[a-zA-Z]([A-Za-z0-9.\-]){8,12}$/
    let result1 = regex.test(user);
    let result2 = regex.test(pass);

    

    var result = true;
    clearErrors();

    if (!result1) {
        err1.innerHTML = "*Not in format(A-Z ,a-z ,0-9 and -)";
        result = false;
    }
    if (!result2) {
        err2.innerHTML = "*Not in format(A-Z ,a-z ,0-9 and -)";
        result = false;
    }
    else{
        usernspace.innerHTML=user;
        user="";
        pass="";
        loginbox.style.display = "none";
        loginbtndiv.style.display = "none";
        userndiv.style.display='block';
        logoutbtndiv.style.display='block';
    }
    return result;

}

logoutbtn.addEventListener('click',()=>{
    userndiv.style.display='none';
    logoutbtndiv.style.display='none';
    usernspace.innerHTML='';
    loginbtndiv.style.display='block';

})

// for autocomplete suggestion
const suggestions = [
    "Pinjore",
    "Patiala",
    "Rajpura",
    "Mumbai", 
    "NCR", 
    "Bangalore", 
    "Kolkata", 
    "Chennai", 
    "Ahmadabad", 
    "Hyderbad", 
    "Pune", 
    "Surat", 
    "Kanpur", 
    "Jaipur", 
    "Lucknow", 
    "Nagpur", 
    "Raigarh fort", 
    "Indore", 
    "Patna", 
    "Bopal", 
    "Ludiana", 
    "Agra", 
    "Gorakhpur", 
    "Nasik", 
    "Pimpri", 
    "Kalyan", 
    "Thane", 
    "Meerut", 
    "Faridabad", 
    "Ghaziabad", 
    "Dombivli", 
    "Rajkot", 
    "Benares", 
    "Amritsar", 
    "Allahabad", 
    "Vishakhapatnam", 
    "Teni", 
    "Jabalpur", 
    "Haora", 
    "Aurangabad", 
    "Shibaji nagar", 
    "Solopur", 
    "Srinagar", 
    "Coimbatore", 
    "Jodhpur", 
    "Chandigarh", 
    "Madurai", 
    "Guwahati", 
    "Gwalior", 
    "Vijaywada", 
    "Mysore", 
    "Ranchi", 
    "Hubi", 
    "Jalandhar", 
    "Thiruvanathapuram", 
    "Salem", 
    "Tiruchchirappalli", 
    "Kota", 
    "Bhubaneshwar", 
    "Aligarh", 
    "Bareilly", 
    "Moradabad", 
    "Bhiwandi", 
    "Raipur", 
    "Gorakhpur", 
    "Bilai", 
    "Jamshedpur", 
    "Borivili", 
    "Cochin", 
    "Sangli", 
    "Cuttack"
];



// getting all required elements
const searchWrapper = document.querySelector(".wrap");
const inputBox = document.querySelector("#inputcit");
const suggBox = document.querySelector(".suggestion");


// let linkTag = searchWrapper.querySelector("a");
// let webLink;

// if user press any key and release
inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if (userData) {
        // icon.onclick = ()=>{
        //     webLink = "https://www.google.com/search?q=" + userData;
        //     linkTag.setAttribute("href", webLink);
        //     console.log(webLink);
        //     linkTag.click();
        // }
        emptyArray = suggestions.filter((data) => {
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            // passing return data inside li tag
            return data = '<li>' + data + '</li>';
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    // icon.onclick = ()=>{
    //     webLink = "https://www.google.com/search?q=" + selectData;
    //     linkTag.setAttribute("href", webLink);
    //     linkTag.click();
    // }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    } else {
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
    console.log(listData);
}

Searchbtn.addEventListener('click',()=>{
    const lowercity=suggestions.map(ele=>ele.toLowerCase());
    if((lowercity.includes(inputBox.value.toLowerCase()))){
        location.href='movie.html';
    }

    else{
        alert("City not Found");
        inputBox.value='';
    }
})





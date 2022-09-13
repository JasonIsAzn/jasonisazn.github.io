function toggleTheme_index() {    
    if (theme.getAttribute('href') == 'styles/index.css') {
        theme.setAttribute('href', 'styles/index1.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index1.css");
    } else {
        theme.setAttribute('href', 'styles/index.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index.css");
    }
    // load_style();
}

function toggleTheme_project() {    
    if (theme.getAttribute('href') == 'styles/projects.css') {
        theme.setAttribute('href', 'styles/projects1.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index1.css");
    } else {
        theme.setAttribute('href', 'styles/projects.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index.css");
    }
    // load_style();
}

function toggleTheme_service() {    
    if (theme.getAttribute('href') == 'styles/service.css') {
        theme.setAttribute('href', 'styles/service1.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index1.css");
    } else {
        theme.setAttribute('href', 'styles/service.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index.css");
    }
    // load_style();
}

function toggleTheme_about() {    
    if (theme.getAttribute('href') == 'styles/aboutme.css') {
        theme.setAttribute('href', 'styles/aboutme1.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index1.css");
    } else {
        theme.setAttribute('href', 'styles/aboutme.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index.css");
    }
    // load_style();
}

function toggleTheme_skills() {    
    if (theme.getAttribute('href') == 'styles/skills.css') {
        theme.setAttribute('href', 'styles/skills1.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index1.css");
    } else {
        theme.setAttribute('href', 'styles/skills.css');
        // localStorage.setItem("page_stylesheet_name", "styles/index.css");
    }
    // load_style();
}


// const check=document.getElementById("check")

// //If darkMode doesn’t exist in the LocalStorage, create it. False by default
// if (localStorage.getItem('secondStyle')===null){
//     localStorage.setItem('secondStyle', "false");
// }

// //Create a link tag to later link the CSS file we want
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// document.getElementsByTagName('HEAD')[0].appendChild(link);

// //Or we can create the tag in the HTML and later reference in our code
// //const link=document.getElementsByTagName("link");  

// //checkStatus is only called one time in the program, when you reload the page
// //It gives the page it's default look, depening on waht darkMode is set to it will load one css or another
// checkStatus()

// function checkStatus(){
//     if (localStorage.getItem('secondStyle')==="true"){
//         check.checked = true;                           //the checkbox is checked (if you load the page by default it isn’t)
//         link.href = './css/index1.css';                   //since it's true we load the dark theme CSS
//     }else{
//         check.checked = false;                          //the checkbox is unchecked
//         link.href = '';
//     }
// }

// function changeStatus(){                                //This function gets called every time the checkbox is clicked
//     if (localStorage.getItem('secondStyle')==="true"){     //if darkMode was active and this function is called it means the user now wants light
//         localStorage.setItem('secondStyle', "false");      //so we set it to false, to indicate we are in light mode
//         link.href = '';
//     } else{
//         localStorage.setItem('secondStyle', "true");       //same code but adapted for dark theme
//         link.href = './css/index1.css';
//     }
// }
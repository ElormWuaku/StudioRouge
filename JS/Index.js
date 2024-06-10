

const btn = document.getElementById('btn-btn')
btn.onclick = function () {
    alert('Pose for the camera!')
}

const btn1 = document.getElementById('header-btn')
btn1.onclick = function () {
    alert('Are you ready?!')
}

const btn2 = document.getElementById('rm-btn')
btn2.onclick = function () {
    alert('Say Cheese!!!')
}

//Functions
//Definig a function
function login(username, password) {
    //validate the username and password
    if(!username || !password)
  {return 'username or password not provided';} 
    //verify username and password
   if (username == 'Elorm' && password == '1234')
     {
        return 'User is logged in';
     } else {
       return 'Invalid username or password';
     }
  } 
  //invoking a function
  login('Elorm', );
  
  
  // Basic Arithmetic Operations
  11 + 12;
  1 + 0.5;
  43 - 12;
  45 / 7;
  5 * 3;
  14 % 3;
  
  Math.floor(45/24)
  45 % 24
  Math.random() * 1000;
  
  
  
  
  
  
  
  
  
  
  
  
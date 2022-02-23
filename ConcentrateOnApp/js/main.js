// DOM Elements 
const time = document.querySelector('#time'),
  greeting = document.querySelector('#greeting'),
  key = document.querySelector('#key'),
  focus = document.querySelector('#focus');
  
  //Options
  const showAmPm = true;

  //Show Time
  function showTime() {
    let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

    //Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12hr Format
    hour = hour % 12 || 12;

    // Output TIme
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
  }

  //add zeros
  // function addZero(n) {
  //   return(parseInt(n, 10) < 10 ? '0' : '') + n;
  // }

  function addZero(n) {
      if(parseInt(n,10) < 10) {
        return '0' + n;
      } else {
        return '' + n;
      }
  }
  //parseInt(n, 10)の第二引数10は10進数で変換するという意味。
   //クロームはデフォルトで基数が10進数だが、ブラウザによっては異なる場合があるため。

  //set background and Greating
  function setBgGreet() {
    let today = new Date(),
      hour = today.getHours();
      console.log(hour);

    if(hour < 12) {
      // Mornig
      document.body.style.backgroundImage = "url('images/mornig.jpg')";
      greeting.textContent = 'Good Mornign';
    } else if (hour < 18) {
      // Afternoon
      document.body.style.backgroundImage = "url('images/afternoon.jpg')";
      greeting.textContent = 'Good Afternoon';
    } else {
      //Evening
      document.body.style.backgroundImage = "url('images/night.jpg')";
      greeting.textContent = 'Good Evening';
      document.body.style.color = 'white';
    }
  }

  // Get name
  function getName() {
    if(localStorage.getItem('key') === null) {
      key.textContent = '[Enter Name]';
    } else {
      key.textContent = localStorage.getItem('name');
    }
  }

  //Set name
  function setName(e) {
    if(e.type === 'keypress') {
      // Make sure enter is pressed
      //e.whichで押されたキーを確認でき、Enterは13に割り当てられている。
      // ||の左辺、右辺どちらかがTrueであればTrueを返す。
      // 下記の条件分岐は、エンターが押された時に、blurを入力し、編集を終わらせる。
      if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('key', e.target.innerText);
        key.blur();
      }
    } else {
      localStorage.setItem('key', e.target.innerText);
    }
  }

  //get focus
  function getFocus() {
    if(localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter Focus]';
    } else {
      focus.textContent = localStorage.getItem('name');
    }
  }

  //set focus
  function setFocus(e) {
    if(e.type === 'keypress') {
      // Make sure enter is pressed
      if(e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }


  key.addEventListener('keypress', setName);
  key.addEventListener('blur', setName);
  focus.addEventListener('keypress', setName);
  focus.addEventListener('blur', setName);

  //Run
  showTime();
  setBgGreet();
  getName();
  getFocus();
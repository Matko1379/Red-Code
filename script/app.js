// // // // // // // // // // // const toDoList = [
// // // // // // // // // // // 
// // // // // // // // // // //   { id: 1, name: 'HTML', isBool: false },
// // // // // // // // // // //   { id: 2, name: 'CSS', isBool: true },
// // // // // // // // // // //   { id: 3, name: 'JS', isBool: false },
// // // // // // // // // // // ];
// // // // // // // // // // // 
// // // // // // // // // // // const userInput = prompt('1 - Add \n 2 - Remove \n 3 - Function');
// // // // // // // // // // // 
// // // // // // // // // // // if (userInput == 1) {
// // // // // // // // // // // 
// // // // // // // // // // //   const addTodoName = prompt('Enter todo name for add');
// // // // // // // // // // //   const newtodoItem = {
// // // // // // // // // // //     id: toDoList.length + 1,
// // // // // // // // // // //     name: addTodoName,
// // // // // // // // // // //     isBool: true
// // // // // // // // // // //   };





// // // // // // // // // // // 
// // // // // // // // // // //   toDoList.push(newtodoItem);
// // // // // // // // // // //   console.log(toDoList);
// // // // // // // // // // // 
// // // // // // // // // // // } else if (userInput == 2) {
// // // // // // // // // // // 
// // // // // // // // // // //   const removeTodoName = prompt('Enter todo name for remove');
// // // // // // // // // // //   const removeTodoIndex = toDoList.findIndex((item) => item.name === removeTodoName);
// // // // // // // // // // // 
// // // // // // // // // // //   toDoList.splice(removeTodoIndex, 1);
// // // // // // // // // // //   console.log(toDoList);
// // // // // // // // // // // 
// // // // // // // // // // // } else if (userInput == 3) {
// // // // // // // // // // // 
// // // // // // // // // // //   const doFunction = prompt('1 - All todo \n 2 - Choose one :');
// // // // // // // // // // // 
// // // // // // // // // // //   if (doFunction == 1) {
// // // // // // // // // // // 
// // // // // // // // // // //     toDoList.forEach(item => {
// // // // // // // // // // // 
// // // // // // // // // // //       if (item.isBool === true) item.isBool = false;
// // // // // // // // // // //       else item.isBool = true;
// // // // // // // // // // //     })
// // // // // // // // // // // 
// // // // // // // // // // //     console.log(toDoList);
// // // // // // // // // // // 
// // // // // // // // // // //   } else if (doFunction == 2) {
// // // // // // // // // // // 
// // // // // // // // // // //     const doFunction = prompt('Enter name of todo for do function:');
// // // // // // // // // // // 
// // // // // // // // // // //     const doFunctionIndex = toDoList.find((item) => item.name === doFunction);
// // // // // // // // // // // 
// // // // // // // // // // //     if (doFunctionIndex.isBool === true) doFunctionIndex.isBool = false;
// // // // // // // // // // //     else doFunctionIndex.isBool = true;
// // // // // // // // // // // 
// // // // // // // // // // //     console.log(toDoList);
// // // // // // // // // // //   }
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // const   alltasks = {
// // // // // // // // // // // 
// // // // // // // // // // //   Matin: ['HTML', 'CSS', 'JS'],
// // // // // // // // // // //   Neda: ['Web Design', 'Planing']
// // // // // // // // // // // };
// // // // // // // // // // // 
// // // // // // // // // // // const addNewTask = prompt('Enter a new task name'),
// // // // // // // // // // //   EmployName = prompt('Enter a employ name for add the task'),
// // // // // // // // // // //   emplyTask = alltasks[EmployName];
// // // // // // // // // // // 
// // // // // // // // // // // emplyTask.push(addNewTask);
// // // // // // // // // // // console.log(alltasks);
// // // // // // // // // // 
// // // // // // // // // // // const n1 = ['Amir', 'ali', 'matin'];
// // // // // // // // // // // const n2 = ['Amir', 'ali', 'matin'];
// // // // // // // // // // // const n3 = ['Amir', 'ali', 'matin'];
// // // // // // // // // // // const n4 = ['Amir', 'ali', 'matin'];
// // // // // // // // // // // 
// // // // // // // // // // // const result = [...n1, ...n2, ...n3, ...n4];
// // // // // // // // // // // 
// // // // // // // // // // // console.log(result);
// // // // // // // // // // // console.log(typeof result);
// // // // // // // // // // 
// // // // // // // // // // // const allQuestion = [
// // // // // // // // // // // 
// // // // // // // // // // //   { id: 1, title: 'Name', answer: '' },
// // // // // // // // // // //   { id: 2, title: 'Family', answer: '' },
// // // // // // // // // // // ];
// // // // // // // // // // // 
// // // // // // // // // // // let mainAnswer;
// // // // // // // // // // // allQuestion.forEach((item) => {
// // // // // // // // // // // 
// // // // // // // // // // //   mainAnswer = prompt(`What's your ${item.title} ?`);
// // // // // // // // // // //   console.log(mainAnswer);
// // // // // // // // // // // 
// // // // // // // // // // //   item.answer = mainAnswer;
// // // // // // // // // // // })
// // // // // // // // // // // 
// // // // // // // // // // // console.log(allQuestion);
// // // // // // // // // // 
// // // // // // // // // // // const allQuestion = [
// // // // // // // // // // // 
// // // // // // // // // // //   { id: 1, title: '2 + 2', answer: '4' },
// // // // // // // // // // //   { id: 2, title: '12 / 2', answer: '6' },
// // // // // // // // // // // ];
// // // // // // // // // // // 
// // // // // // // // // // // let mainAnswer,
// // // // // // // // // // //   score = 0
// // // // // // // // // // // 
// // // // // // // // // // // allQuestion.forEach((item) => {
// // // // // // // // // // // 
// // // // // // // // // // //   mainAnswer = prompt(`Answer this questions \n ${item.title} ?`);
// // // // // // // // // // //   console.log(mainAnswer);
// // // // // // // // // // // 
// // // // // // // // // // //   if (mainAnswer === item.answer) score++;
// // // // // // // // // // // })
// // // // // // // // // // // 
// // // // // // // // // // // console.log('Your final score : ' + score);
// // // // // // // // // // 
// // // // // // // // // // // const allUserData = [
// // // // // // // // // // // 
// // // // // // // // // // //   { id: 1, username: 'matin', password: 'martinloter1379' },
// // // // // // // // // // //   { id: 2, username: 'amir', password: 'amirsojodi1377' }
// // // // // // // // // // // ];
// // // // // // // // // // // 
// // // // // // // // // // // alert('Please enter your username and password for login');
// // // // // // // // // // // const userName = prompt('Enter your username :');
// // // // // // // // // // // const passCheck = prompt('1 - Enter password \n2 - Forgot password');
// // // // // // // // // // // 
// // // // // // // // // // // if (passCheck == 1) {
// // // // // // // // // // // 
// // // // // // // // // // //   const userPass = prompt('Enter your password :');
// // // // // // // // // // //   const checkData = allUserData.some((user) => {
// // // // // // // // // // //     return user.username === userName && user.password === userPass;
// // // // // // // // // // //   })
// // // // // // // // // // // 
// // // // // // // // // // //   if (checkData) alert('Login Successful');
// // // // // // // // // // //   else alert('Username or password inccorect');
// // // // // // // // // // // 
// // // // // // // // // // // } else if (passCheck == 2) {
// // // // // // // // // // // 
// // // // // // // // // // //   const checkData = allUserData.find((user) => {
// // // // // // // // // // //     return user.username === userName;
// // // // // // // // // // //   })
// // // // // // // // // // // 
// // // // // // // // // // //   if (checkData) alert('Your password : ' + checkData.password);
// // // // // // // // // // //   else alert('Username inccorect');
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // let userTimer = prompt('Enter time to second unit for starting the timer :');
// // // // // // // // // // // 
// // // // // // // // // // // const timer = setInterval(() => {
// // // // // // // // // // //   console.log(userTimer);
// // // // // // // // // // //   userTimer--;
// // // // // // // // // // // 
// // // // // // // // // // //   if (userTimer === 0) clearInterval(timer);
// // // // // // // // // // // 
// // // // // // // // // // // }, 1000);
// // // // // // // // // // 
// // // // // // // // // // // const para = document.querySelectorAll('p');
// // // // // // // // // // // const result1 = para.getAttribute('class');
// // // // // // // // // // // para.setAttribute('class', 'text');
// // // // // // // // // // // const result = para.forEach((item) => item.setAttribute('class', 'text'));
// // // // // // // // // // // console.log(result);
// // // // // // // // // // 
// // // // // // // // // // // const userInput = document.querySelector('input'),
// // // // // // // // // // //   selectBox = document.querySelector('select');
// // // // // // // // // // // 
// // // // // // // // // // //   userInput.addEventListener('change', () => {
// // // // // // // // // // // 
// // // // // // // // // // //     console.log('Action');
// // // // // // // // // // //   })
// // // // // // // // // // // 
// // // // // // // // // // //   selectBox.addEventListener('blur', () => {
// // // // // // // // // // // 
// // // // // // // // // // //     console.log('Action');
// // // // // // // // // // //     console.log(selectBox.value);
// // // // // // // // // // //   })
// // // // // // // // // // 
// // // // // // // // // // // const validNames = ['matin', 'ali', 'amir'];
// // // // // // // // // // // 
// // // // // // // // // // // const input = document.querySelector('input');
// // // // // // // // // // // const btn = document.querySelector('button');
// // // // // // // // // // // 
// // // // // // // // // // // btn.addEventListener('click', (event) => {
// // // // // // // // // // //   console.log(input.value);
// // // // // // // // // // // })
// // // // // // // // // // // 
// // // // // // // // // // // input.addEventListener('keypress', (event) => {
// // // // // // // // // // // 
// // // // // // // // // // //   console.log(event.key);
// // // // // // // // // // //   if (event.key === 'Enter') {
// // // // // // // // // // // 
// // // // // // // // // // //     console.log(input.value);
// // // // // // // // // // //     const exportName = validNames.some(name => {
// // // // // // // // // // // 
// // // // // // // // // // //       return name === input.value;
// // // // // // // // // // //     })
// // // // // // // // // // //     console.log(exportName);
// // // // // // // // // // // 
// // // // // // // // // // //     if (exportName) console.log('Login Successful');
// // // // // // // // // // //     else console.log('Login Faild');
// // // // // // // // // // //   }
// // // // // // // // // // // })
// // // // // // // // // // 
// // // // // // // // // // // const text = 'Matin matin';
// // // // // // // // // // // console.log(text.match('Matin'))
// // // // // // // // // // // console.log(text.matchAll(/Matin/ig))
// // // // // // // // // // 
// // // // // // // // // // // const startBtn = document.querySelector('button'),
// // // // // // // // // // //   animationBox = document.querySelector('.animation');
// // // // // // // // // // // 
// // // // // // // // // // // startBtn.addEventListener('click', () => {
// // // // // // // // // // // 
// // // // // // // // // // //   let time = '';
// // // // // // // // // // //   let pos = 0;
// // // // // // // // // // //   clearInterval(time);
// // // // // // // // // // //   time = setInterval(() => {
// // // // // // // // // // // 
// // // // // // // // // // //     if (pos === 450) clearInterval(time);
// // // // // // // // // // //     else {
// // // // // // // // // // //       pos++;
// // // // // // // // // // //       animationBox.style.top = pos + 'px';
// // // // // // // // // // //       animationBox.style.left = pos + 'px';
// // // // // // // // // // //     }
// // // // // // // // // // //   }, 1);
// // // // // // // // // // // 
// // // // // // // // // // //   for (; pos < 450;) {
// // // // // // // // // // // 
// // // // // // // // // // //     pos++;
// // // // // // // // // // //     animationBox.style.top = pos + 'px';
// // // // // // // // // // //     animationBox.style.left = pos + 'px';
// // // // // // // // // // //   }
// // // // // // // // // // // })
// // // // // // // // // // 
// // // // // // // // // // // const listItems = document.querySelectorAll('.list-item');
// // // // // // // // // // // 
// // // // // // // // // // // listItems.forEach(item => {
// // // // // // // // // // // 
// // // // // // // // // // //   item.addEventListener('click', (event) => {
// // // // // // // // // // //     // console.log(event);
// // // // // // // // // // //     // item.remove()
// // // // // // // // // // //     event.target.remove();
// // // // // // // // // // //   })
// // // // // // // // // // // })
// // // // // // // // // // 
// // // // // // // // // // // const para = document.querySelectorAll('p'); // nodeList
// // // // // // // // // // // const para2 = document.getElementsByTagName('p');
// // // // // // // // // // // // para[2].innerHTML = 'Matin Hedayat';
// // // // // // // // // // // // para.forEach(item => {
// // // // // // // // // // // //   item.style.color = 'red';
// // // // // // // // // // // // })
// // // // // // // // // // // const elem = document.createElement('p').textContent = 'sdvsr';
// // // // // // // // // // // document.body.append(elem);
// // // // // // // // // // // 
// // // // // // // // // // // for (i = 0; i < para2.length; i++) {
// // // // // // // // // // //   para2[i].style.color = 'red';
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // para.childNodes[0].nodeValue = 'red';
// // // // // // // // // // // console.log(para.childNodes[0].nodeType)
// // // // // // // // // // 
// // // // // // // // // // // const userInput = document.querySelector('input');
// // // // // // // // // // // 
// // // // // // // // // // // userInput.addEventListener('transitionstart', () => {
// // // // // // // // // // //   console.log('transition Start');
// // // // // // // // // // //   userInput.style.background = 'red'
// // // // // // // // // // // })
// // // // // // // // // // // 
// // // // // // // // // // // userInput.addEventListener('transitionend', () => {
// // // // // // // // // // //   console.log('transition End');
// // // // // // // // // // //   userInput.style.background = 'white'
// // // // // // // // // // // })
// // // // // // // // // // 
// // // // // // // // // // // window methods and property :
// // // // // // // // // // // window.document : document => selection
// // // // // // // // // // 
// // // // // // // // // // // window.innerWidth => live width of window
// // // // // // // // // // // window.innerHeight => live height of window
// // // // // // // // // // 
// // // // // // // // // // // window.open() => open new window
// // // // // // // // // // // window.close() => close current window
// // // // // // // // // // // window.moveTo() => move current window
// // // // // // // // // // // window.resizeTo() => resize current window
// // // // // // // // // // 
// // // // // // // // // // // window.screen methods :
// // // // // // // // // // // window.screen : screen
// // // // // // // // // // 
// // // // // // // // // // // sreen.width => static width
// // // // // // // // // // // sreen.height => static height
// // // // // // // // // // // sreen.availWidth => static width minus taskbar width
// // // // // // // // // // // sreen.availHeight => static height minus taskbar height
// // // // // // // // // // // sreen.colorDepth => bits value of color depth of screen
// // // // // // // // // // // screen.pixelDepth =? bits value of pixel depth of screen
// // // // // // // // // // // note: colorDepth and pixelDepth values are equal in modern browser
// // // // // // // // // // 
// // // // // // // // // // // window.location : location
// // // // // // // // // // // location.url => full URL of the current page
// // // // // // // // // // // location.hostname => domain name of web host
// // // // // // // // // // // location.pathname => path and filename
// // // // // // // // // // // location.protocol => http or https
// // // // // // // // // // // location.port => internet host port
// // // // // // // // // // // location.assign() => leads to a new document or window
// // // // // // // // // // // note : location.port value in most browser will not display
// // // // // // // // // // // for http : 80 and for https : 443 
// // // // // // // // // // 
// // // // // // // // // // // window.history : history 
// // // // // // // // // // // history.back() => for back page
// // // // // // // // // // // history.forward() => for forward page
// // // // // // // // // // 
// // // // // // // // // // // window.navigator : navigator 
// // // // // // // // // // // navigator.cookieEnabled => true if cookie are enabled otherwise false
// // // // // // // // // // // navigator.appName => app name of browser
// // // // // // // // // // 
// // // // // // // // // // // document.cookie = 'name = matin';
// // // // // // // // // // // document.cookie = 'family = hedayat';
// // // // // // // // // // // console.log(document.cookie);
// // // // // // // // // // 
// // // // // // // // // // // const containerElem = document.querySelector('.container');
// // // // // // // // // // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // // // // // // // // // // 
// // // // // // // // // // // let fragmentDiv = document.createDocumentFragment();
// // // // // // // // // // // const spanContainer = document.createElement('div');
// // // // // // // // // // // // let result = document.createElement('div');
// // // // // // // // // // // let result = document.createDocumentFragment();
// // // // // // // // // // // 
// // // // // // // // // // // numbers.forEach(number => {
// // // // // // // // // // // const spanElem = document.createElement('span');
// // // // // // // // // // // spanElem.innerHTML = number;
// // // // // // // // // // // result.insertAdjacentHTML('beforeend', `<span>${number}</span>`);
// // // // // // // // // // // containerElem.append(result);
// // // // // // // // // // // result.insertAdjacentHTML('beforeend', `<span>${number}</span>`);
// // // // // // // // // // // result = fragmentDiv;
// // // // // // // // // // 
// // // // // // // // // // // spanContainer.append(spanElem);
// // // // // // // // // // // fragmentDiv.append(spanElem);
// // // // // // // // // // // })
// // // // // // // // // // 
// // // // // // // // // // // containerElem.insertAdjacentHTML("beforeend", result);
// // // // // // // // // // // containerElem.append(result)
// // // // // // // // // // 
// // // // // // // // // // // containerElem.append(spanContainer);
// // // // // // // // // // // containerElem.append(fragmentDiv);
// // // // // // // // // // 
// // // // // // // // // // // containerElem.insertAdjacentHTML('beforebegin', '<div></div>');
// // // // // // // // // // 
// // // // // // // // // // // const myArray = [
// // // // // // // // // // //   { id: 1, name: 'matin', family: 'hedayat' },
// // // // // // // // // // //   { id: 1, name: 'matin', family: 'hedayat' },
// // // // // // // // // // // ];
// // // // // // // // // // // 
// // // // // // // // // // // // console.log('log')
// // // // // // // // // // // // console.error('Error')
// // // // // // // // // // // // console.warn('Warning')
// // // // // // // // // // // // console.info('Info')
// // // // // // // // // // // // console.assert(false, 'True');
// // // // // // // // // // // // console.log(myArray);
// // // // // // // // // // // 
// // // // // // // // // // // console.group('Group log');
// // // // // // // // // // // console.log('log started')
// // // // // // // // // // // console.log('log end')
// // // // // // // // // // // console.groupEnd('Group log');
// // // // // // // // // // // 
// // // // // // // // // // // console.time();
// // // // // // // // // // // // for (let i = 0; i < 10000000; i++) {
// // // // // // // // // // // //   // Some code ...
// // // // // // // // // // // // }
// // // // // // // // // // // console.timeEnd();
// // // // // // // // // // 
// // // // // // // // // // // if (location.protocol == 'http:') console.log('5500')
// // // // // // // // // // // console.log(location.protocol)
// // // // // // // // // // 
// // // // // // // // // // // const info = window.screen.availWidth;
// // // // // // // // // // // const info2 = screen.availHeight;
// // // // // // // // // // // console.log(info, info2)
// // // // // // // // // // 
// // // // // // // // // // // const divElem = document.querySelectorAll('div');
// // // // // // // // // // // 
// // // // // // // // // // // divElem.forEach((div, number) => {
// // // // // // // // // // //   div.addEventListener('click', (event) => {
// // // // // // // // // // //     event.stopPropagation();
// // // // // // // // // // // 
// // // // // // // // // // //     console.log('div' + (number + 1));
// // // // // // // // // // //     event.target.style.background = 'red';
// // // // // // // // // // //   }, { capture: false })
// // // // // // // // // // // });
// // // // // // // // // // 
// // // // // // // // // // // const userInput = document.querySelector('.user-input');
// // // // // // // // // // // const listItem = document.querySelector('.list');
// // // // // // // // // // // const itemList = document.querySelectorAll('.item');
// // // // // // // // // // // 
// // // // // // // // // // // const addItem = (event) => {
// // // // // // // // // // //   if (event.keyCode === 13) {
// // // // // // // // // // //     listItem.insertAdjacentHTML('beforeend',
// // // // // // // // // // //       `<li class="item">${userInput.value}</li>`);
// // // // // // // // // // // 
// // // // // // // // // // //     userInput.value = '';
// // // // // // // // // // //   }
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // // itemList.forEach(item => {
// // // // // // // // // // // //   item.addEventListener('click', (event) => {
// // // // // // // // // // // //     event.target.remove();
// // // // // // // // // // // //   })
// // // // // // // // // // // // })
// // // // // // // // // // // 
// // // // // // // // // // // const removeItem = (event) => {
// // // // // // // // // // //   console.log(event.target.tagName)
// // // // // // // // // // //   if (event.target.tagName === 'LI') event.target.remove();
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // listItem.addEventListener('click', removeItem);
// // // // // // // // // // // userInput.addEventListener('keydown', addItem);
// // // // // // // // // // 
// // // // // // // // // // // Obeject
// // // // // // // // // // // const user = {
// // // // // // // // // // //   name: 'Matin', // property
// // // // // // // // // // //   family: 'Hedayat', // key:value pair
// // // // // // // // // // //   age: 24, // (,) => that is important 
// // // // // // // // // // //   'is admin': true,
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // property values are acceible width:
// // // // // // // // // // // 1 - dot notaion
// // // // // // // // // // // 1 - square bracket notation
// // // // // // // // // // 
// // // // // // // // // // // const person = {
// // // // // // // // // // //   name: 'amir',
// // // // // // // // // // //   age: 26,
// // // // // // // // // // //   isAdmin: 'sdvsd',
// // // // // // // // // // //   details: {
// // // // // // // // // // //     id: 56,
// // // // // // // // // // //     color: 'red',
// // // // // // // // // // //   }
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // const permission = {family: 'hedayat'};
// // // // // // // // // // // 
// // // // // // // // // // // // const person2 = {};
// // // // // // // // // // // 
// // // // // // // // // // // // for (pers in person) {
// // // // // // // // // // // //   person2[pers] = person[pers];
// // // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // const person2 = Object.assign({isAdmin: true}, person, permission);
// // // // // // // // // // // const person3 = structuredClone(person);
// // // // // // // // // // // 
// // // // // // // // // // // person2.age = 78;
// // // // // // // // // // // person2.name = 'Matin';
// // // // // // // // // // // // person2.details.color = 'orange';
// // // // // // // // // // // person3.details.id = 100;
// // // // // // // // // // // 
// // // // // // // // // // // console.log(person);
// // // // // // // // // // // console.log(person2);
// // // // // // // // // // // console.log(person3);
// // // // // // // // // // 
// // // // // // // // // // // const person = ['Matin', 'Hedayat'];
// // // // // // // // // // // 
// // // // // // // // // // // // let personName = person[0];
// // // // // // // // // // // // let personFamily = person[1];
// // // // // // // // // // // 
// // // // // // // // // // // const [, personName = 'Matin', , personFamily] = ['Amir', 'Reza', 'Sojoudi', 'Moeini'];
// // // // // // // // // // // console.log(personName)
// // // // // // // // // // // console.log(personFamily)
// // // // // // // // // // 
// // // // // // // // // // // const person = { id: 56, name: 'reza', family: 'moeini' };
// // // // // // // // // // // 
// // // // // // // // // // // const showText = (text) => {
// // // // // // // // // // //   console.log(text ?? 'Reza');
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // showText('Amir');
// // // // // // // // // // // console.log(person)
// // // // // // // // // // 
// // // // // // // // // // // function declaration
// // // // // // // // // // 
// // // // // // // // // // // const age = 18;
// // // // // // // // // // // 
// // // // // // // // // // // const result = function checkAge() {
// // // // // // // // // // //   return age > 18 || false;
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // // checkAge()
// // // // // // // // // // // 
// // // // // // // // // // // let userInfo = function () {
// // // // // // // // // // //   console.log(result)
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // console.log(result())
// // // // // // // // // // 
// // // // // // // // // // // function ask(question, yes, no) {
// // // // // // // // // // //   question ? yes() : no();
// // // // // // // // // // // }
// // // // // // // // // // // 
// // // // // // // // // // // ask(confirm('Are you admin ?'), () => alert(true), () => alert(false));
// // // // // // // // // // 
// // // // // // // // // // // const age = 18;
// // // // // // // // // // 
// // // // // // // // // // // function welcome() {
// // // // // // // // // // //   if (age > 18) console.log('Welcome');
// // // // // // // // // // //   else console.log('Welcome too');
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // const welcome = function () {
// // // // // // // // // // //   console.log('Good')
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // const welcome = () => {
// // // // // // // // // // //   if (age > 18) console.log('Welcome');
// // // // // // // // // // //   else console.log('Welcome too');
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // const welcome = (age >= 18) ?
// // // // // // // // // // //   function () { console.log(true); }
// // // // // // // // // // //   : function () { console.log(false); }
// // // // // // // // // // 
// // // // // // // // // // // const welcome = (age >= 18) ?
// // // // // // // // // // //   () => console.log(true)
// // // // // // // // // // //   : () => console.log(false)
// // // // // // // // // // // 
// // // // // // // // // // // welcome();
// // // // // // // // // // 
// // // // // // // // // // // function showNames(fName, sName, tName, ...args) {
// // // // // // // // // // //   console.log(fName)
// // // // // // // // // // //   console.log(sName)
// // // // // // // // // // //   console.log(tName)
// // // // // // // // // // // 
// // // // // // // // // // //   console.log('-----------');
// // // // // // // // // // // 
// // // // // // // // // // //   args.forEach(arg => console.log(arg + ' text'));
// // // // // // // // // // // 
// // // // // // // // // // //   console.log('-----------');
// // // // // // // // // // // 
// // // // // // // // // // //   for (let name of arguments) console.log(name);
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // const showNames = (fName, sName, tName, arguments, ...other) => {
// // // // // // // // // // //   console.log(fName)
// // // // // // // // // // //   console.log(sName)
// // // // // // // // // // //   console.log(tName)
// // // // // // // // // // // 
// // // // // // // // // // //   console.log('-----------');
// // // // // // // // // // // 
// // // // // // // // // // //   for (let name of other) console.log(name);
// // // // // // // // // // // 
// // // // // // // // // // //   console.log('-----------');
// // // // // // // // // // // 
// // // // // // // // // // //   for(let name of arguments) console.log(name);
// // // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // showNames('Reza', 'Amir', 'Ali', 'Matin', 'Hasan', 'Javad');
// // // // // // // // // // 
// // // // // // // // // // const userDetail = (firstParameter, ...otherParameter) => {
// // // // // // // // // //   console.log(firstParameter);
// // // // // // // // // //   console.log(otherParameter);
// // // // // // // // // //   // console.log(arguments);
// // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // function myFunction(fPara, ...rest) {
// // // // // // // // // //   console.log(fPara);
// // // // // // // // // //   console.log(rest);
// // // // // // // // // //   // console.log(arguments);
// // // // // // // // // //   const matko = (text) => console.log(...text, arguments);
// // // // // // // // // //   matko('text');
// // // // // // // // // // }
// // // // // // // // // // 
// // // // // // // // // // // userDetail('Matin', 'Ali', 'Reza');
// // // // // // // // // // // myFunction('Amir', 'Javad');
// // // // // // // // // // 
// // // // // // // // // // const numbers = [1, 2, 3, 4];
// // // // // // // // // // const numbers2 = [5, 6, 7, 8];
// // // // // // // // // // const numbers3 = numbers;
// // // // // // // // // // const numbers4 = [...numbers2];
// // // // // // // // // // 
// // // // // // // // // // numbers3.push(56);
// // // // // // // // // // numbers4.push(79);
// // // // // // // // // // 
// // // // // // // // // // console.log(numbers)
// // // // // // // // // // console.log(numbers2)
// // // // // // // // // // console.log(numbers3)
// // // // // // // // // // console.log(numbers4)
// // // // // // // // // // 
// // // // // // // // // // console.log(numbers === numbers3)
// // // // // // // // // // console.log(numbers2 === numbers4)
// // // // // // // // // 
// // // // // // // // // const numbers = [1, 2, 3, 4, 5];
// // // // // // // // // 
// // // // // // // // // function numbersOperation(fNumber, ...numbers) {
// // // // // // // // //   console.log(fNumber)
// // // // // // // // //   console.log(numbers)
// // // // // // // // //   console.log(arguments)
// // // // // // // // // }
// // // // // // // // // 
// // // // // // // // // numbersOperation(100, ...numbers, 56);
// // // // // // // // 
// // // // // // // // // const introducer = (name, family) => {
// // // // // // // // //   const person = {
// // // // // // // // //     name: name,
// // // // // // // // //     family: family,
// // // // // // // // //     age: 23,
// // // // // // // // //     assets: 10_000_000,
// // // // // // // // //     dept: 5_000_000,
// // // // // // // // //     money: () => this.assets - this.dept
// // // // // // // // //   }
// // // // // // // // // 
// // // // // // // // //   const introDetail = `Hi, I am ${person.name} ${person.family} and my value of money have is ${person.money()}T`;
// // // // // // // // // 
// // // // // // // // //   console.log(introDetail);
// // // // // // // // // }
// // // // // // // // // 
// // // // // // // // // introducer('Matin', 'Hedayat');
// // // // // // // // // console.log(introducer('Matin', 'Hedayat'));
// // // // // // // // 
// // // // // // // // // [1, 2, 3, 4, 5]
// // // // // // // // 
// // // // // // // // // const maxNumber = (numbers) => {
// // // // // // // // //   let result = numbers[0];
// // // // // // // // //   for (const number of numbers) {
// // // // // // // // //     if (number > result) result = number;
// // // // // // // // //   }
// // // // // // // // // 
// // // // // // // // //   console.log(result);
// // // // // // // // // }
// // // // // // // // // 
// // // // // // // // // maxNumber([1, 2, 56, 3, 32]);
// // // // // // // // 
// // // // // // // // const letterFrequency = (phrase) => {
// // // // // // // //   const frequency = {};
// // // // // // // //   // const expression = phrase.toUpperCase();
// // // // // // // // 
// // // // // // // //   for (const letter of phrase) {
// // // // // // // //     if (letter in frequency) frequency[letter]++;
// // // // // // // //     else frequency[letter] = 1;
// // // // // // // //   }
// // // // // // // // 
// // // // // // // //   console.log(frequency);
// // // // // // // // }
// // // // // // // // 
// // // // // // // // // letterFrequency('Matin Hedayat');
// // // // // // // // 
// // // // // // // // const wordFrequency = (phrase) => {
// // // // // // // //   const words = phrase.split(' ');
// // // // // // // //   return letterFrequency(words);
// // // // // // // //   // for (const word of words) 
// // // // // // // //   // return words.length
// // // // // // // // }
// // // // // // // // 
// // // // // // // // console.log(wordFrequency('matin hedayat have a matin'));
// // // // // // // 
// // // // // // // function sumNumbers(fNumber, sNumber, ...numbers) {
// // // // // // //   let restSum = 0;
// // // // // // //   for (const number of numbers) restSum += number;
// // // // // // //   console.log('Rest: ' + restSum);
// // // // // // // 
// // // // // // //   let argsSum = 0;
// // // // // // //   for (const args of arguments) argsSum += args;
// // // // // // //   console.log('Args: ' + argsSum);
// // // // // // // 
// // // // // // //   return fNumber + sNumber;
// // // // // // // }
// // // // // // // 
// // // // // // // console.log(sumNumbers(5, 6, 6, 6));
// // // // // // 
// // // // // // // const numbers = [5, 8, 4, 19, 2, -3];
// // // // // // // 
// // // // // // // const maxNumber = (arrayNumber) => {
// // // // // // //   let number = arrayNumber[0];
// // // // // // // 
// // // // // // //   for (const num of arrayNumber) {
// // // // // // //     if (num > number) number = num;
// // // // // // //   }
// // // // // // // 
// // // // // // //   return number;
// // // // // // // }
// // // // // // // 
// // // // // // // console.log(maxNumber(numbers));
// // // // // // // 
// // // // // // // console.log('------------')
// // // // // // // console.log(numbers)
// // // // // // // console.log('------------')
// // // // // // // console.log(Math.max(...numbers))
// // // // // // // console.log('------------')
// // // // // // // for (const number of numbers) console.log(number) 
// // // // // // 
// // // // // // // const numbers = [1, 2, 3, 4, 5];
// // // // // // // const numbers2 = Object.assign([], numbers);
// // // // // // // const numbers3 = structuredClone(numbers);
// // // // // // // 
// // // // // // // numbers2.push(6);
// // // // // // // numbers3.push(6, 7);
// // // // // // // 
// // // // // // // console.log(numbers)
// // // // // // // console.log(numbers2)
// // // // // // // console.log(numbers3)
// // // // // // 
// // // // // // // const numbers = [1, 2, 3, 4, 5];
// // // // // // // const numbers2 = [...numbers];
// // // // // // // const numbers3 = [...numbers, ...numbers2];
// // // // // // // const numbers4 = [5, ...numbers, 89, ...numbers2];
// // // // // // // const text = 'string';
// // // // // // // 
// // // // // // // numbers2.push(6);
// // // // // // // 
// // // // // // // const showNumbers = (...rest) => {
// // // // // // //   let sum = 0
// // // // // // //   for (const number of rest) sum += number;
// // // // // // //   console.log(sum)
// // // // // // // }
// // // // // // // 
// // // // // // // console.log(numbers)
// // // // // // // console.log(numbers2)
// // // // // // // console.log(numbers3)
// // // // // // // console.log(numbers4)
// // // // // // // 
// // // // // // // showNumbers(6, ...numbers);
// // // // // // // console.log(...numbers)
// // // // // // // console.log(...text)
// // // // // // // console.log([...text])
// // // // // // // console.log(Array.from(text));
// // // // // // 
// // // // // // const myArray = ['Matin', 'Hedayat'];
// // // // // // 
// // // // // // const [fName, lName] = ['Matin Hedayat'];
// // // // // // 
// // // // // // console.log(myArray)
// // // // // // console.log(fName)
// // // // // // console.log(lName)
// // // // // 
// // // // // // const showResult = (result) => {
// // // // // //   const text = result ?? 'Matin';
// // // // // //   console.log(text);
// // // // // // }
// // // // // // 
// // // // // // showResult()
// // // // // 
// // // // // // let name = 'Matin';
// // // // // // let family = 'Hedayat';
// // // // // 
// // // // // // let user = ['Matin', 'Hedayat'];
// // // // // // 
// // // // // // // [name, family] = [family, name];
// // // // // // // [name, family] = user;
// // // // // // [name, family] = user;
// // // // // // [name, family] = ['Hedayat', 'Matin'];
// // // // // // 
// // // // // // 
// // // // // // console.log('name: ' +  name)
// // // // // // console.log(family)
// // // // // 
// // // // // const user = {
// // // // //   name: 'Matin',
// // // // //   age: 23,
// // // // //   isAdmin: true,
// // // // //   info: {
// // // // //     id: 47,
// // // // //     email: 'mtnhedayat@gmail'
// // // // //   },
// // // // //   passKey: ['martin', 'loter'],  
// // // // // }
// // // // // 
// // // // // const {
// // // // //   name,
// // // // //   myage = 56,
// // // // //   isAdmin: admin = false,
// // // // //   info: {
// // // // //     id,
// // // // //     email = 'martinloter',
// // // // //   },
// // // // //   text = 'me',
// // // // //   passKey
// // // // // } = user;
// // // // // 
// // // // // console.log(user);
// // // // // 
// // // // // console.log(name);
// // // // // console.log(myage);
// // // // // console.log(admin);
// // // // // console.log(id);
// // // // // console.log(email);
// // // // // console.log(text);
// // // // // console.log(passKey);
// // // // // console.log(passKey[1]);
// // // // 
// // // // // const liElems = document.getElementsByTagName('li');
// // // // // const liElems = document.querySelectorAll('li');
// // // // // 
// // // // // // const result = Array.from(liElems);
// // // // //  
// // // // // liElems.forEach(element => {
// // // // //   console.log(element)
// // // // // });
// // // // // 
// // // // // for (let elem of liElems) {
// // // // //   console.log(elem)
// // // // // }
// // // // // 
// // // // // console.log(liElems)
// // // // // console.log(typeof liElems)
// // // // // console.log(typeof result)
// // // // 
// // // // // const user = {
// // // // //   id: 65,
// // // // //   name:'Matin'
// // // // // }
// // // // // 
// // // // // for (const prop in user) {
// // // // //   console.log(user[prop])
// // // // // }
// // // // 
// // // // const containerElem = document.querySelector('.container');
// // // // 
// // // // const red = document.querySelector('.red');
// // // // const green = document.querySelector('.green');
// // // // const blue = document.querySelector('.blue');
// // // // const alpha = document.querySelector('.alpha');
// // // // 
// // // // const redCode = document.querySelector('.red-code');
// // // // const greenCode = document.querySelector('.green-code');
// // // // const blueCode = document.querySelector('.blue-code');
// // // // const alphaCode = document.querySelector('.alpha-code');
// // // // 
// // // // red.textContent = redCode.value;
// // // // green.textContent = greenCode.value;
// // // // blue.textContent = blueCode.value;
// // // // alpha.textContent = alphaCode.value;
// // // // 
// // // // const containerBack = () => {
// // // //   containerElem.style.backgroundColor = `
// // // //   rgba(${red.textContent}, ${green.textContent}, 
// // // //   ${blue.textContent}, ${alpha.textContent})`;
// // // // }
// // // // containerBack();
// // // // 
// // // // const changeValue = (event, span) => {
// // // //   span.textContent = event.target.value;
// // // //   containerBack();
// // // // }
// // // // 
// // // // redCode.setAttribute('oninput', 'changeValue(event, red)');
// // // // greenCode.setAttribute('oninput', 'changeValue(event, green)');
// // // // blueCode.setAttribute('oninput', 'changeValue(event, blue)');
// // // // alphaCode.setAttribute('oninput', 'changeValue(event, alpha)');
// // // 
// // // // && (and) :
// // // const number = 23;
// // // const haveLicense = true;
// // // 
// // // // if (number > 18 && !haveLicense) console.log(true);
// // // // else console.log(false);
// // // 
// // // number > 53 && console.log(false);
// // // // const result = number > 53 && haveLicense;
// // // // console.log(result)
// // 
// // const generateOTP = (limit) => {
// //   let digits = '0123456789';
// //   let OTP = '';
// //   for (let i = 0; i < limit; i++) {
// //     let randomNumber = Math.floor(Math.random() * 10);
// //     OTP += digits[randomNumber];
// //   }
// // 
// //   return OTP;
// // }
// // 
// // console.log(generateOTP(6));
// 
// // window.addEventListener('load', () => {
// // 
// //   const dataBase = indexedDB.open('Matko', 2);
// //   
// //   dataBase.addEventListener('success', (event) => console.log(event));
// //   dataBase.addEventListener('error', (event) => console.log(event));
// //   dataBase.addEventListener('upgradeneeded', (event) => console.log(event));
// // 
// //   console.log(dataBase)
// // })
// 
// // const tabs = document.querySelectorAll('.tab');
// // 
// // tabs.forEach(tab => {
// //   tab.addEventListener('click', () => {
// // 
// //   // tabs.forEach(tab => tab.classList.remove('active'));
// //   // tab.classList.add('active');
// // 
// //   tab.classList.toggle('active');
// //   })
// // })
// 
// // const toggleBtn = document.querySelector('.toggle');
// // const sidebar = document.querySelector('.sidebar');
// // 
// // const setupSidebar = () => sidebar.classList.toggle('show-sidebar');
// // toggleBtn.addEventListener('click', setupSidebar);
// 
// 
// // const observer = new IntersectionObserver((entries) => {
// //   entries.forEach(entry => {
// //     console.log(entry)
// //     
// //     if (entry.isIntersecting) entry.target.classList.add('show');
// //     else entry.target.classList.remove('show');
// //     // entry.target.classList.add('show');
// //   })
// // })
// // 
// // const sections = document.querySelectorAll('.hidden');
// // sections.forEach(section => observer.observe(section));
// 
// // const para = document.querySelectorAll('.para');
// // 
// // function doSomething(parameter = 'Amir') {
// //   return parameter;
// // }
// 
// // let number = 9_000_000_000_000_000_0n;
// // console.log(number)
// // console.log(typeof number)
// // console.log(number.length)
// 
// // para.forEach(el => {
// //   el.addEventListener('click', () => {
// //     if (el.textContent === 'Matin') el.textContent = doSomething();
// //     else el.textContent = doSomething('Matin');
// //   })
// // });
// 
// const userInfos = [
//   {
//     id: 1,
//     imgAddress: 'Assets/alexandra daddario.jpg',
//     title: 'alexandra daddario',
//     description: 'she is gourges'
//   },
//   {
//     id: 2,
//     imgAddress: 'Assets/emma estone.jpg',
//     title: 'emma estone',
//     description: 'she is gourges'
//   },
//   {
//     id: 3,
//     imgAddress: 'Assets/margot robbie.jpg',
//     title: 'margot robbie',
//     description: 'she is gourges'
//   }
// ];
// 
// // function dataGenerator() {
// // 
// //   userInfos.forEach(item => {
// //     const divEelem = document.createElement('div');
// //     divEelem.setAttribute('class', 'division');
// // 
// //     divEelem.insertAdjacentHTML('beforeend', `
// //     <div class="img-container">
// //     <img src="${item.imgAddress}" class="img">
// //     </div>
// //     <span class="title">${item.title}</span>
// //     <span class="description">${item.description}</span>
// //     `);
// //     infoEelem.append(divEelem);
// //   })
// // }
// // dataGenerator();
// 
// 
// const infoEelem = document.querySelector('.info'),
//   imgEelem = document.querySelector('.img'),
//   titleEelem = document.querySelector('.title');
// 
// const prevBtn = document.querySelector('.left'),
//   nextBtn = document.querySelector('.right');
// 
// // let startIndex = 0;
// // 
// // const prevItem = () => {
// //   startIndex--;
// //   if (startIndex < 0) startIndex = userInfos.length - 1;
// //   imgEelem.src = userInfos[startIndex].imgAddress;
// //   titleEelem.innerHTML = userInfos[startIndex].title;
// // }
// // 
// // const nextItem = () => {
// //   startIndex++;
// //   if (startIndex > userInfos.length - 1) startIndex = 0;
// // 
// //   setTimeout(() => {
// //     imgEelem.src = userInfos[startIndex].imgAddress;
// //     titleEelem.innerHTML = userInfos[startIndex].title;
// //   }, 500);
// // 
// //   infoEelem.classList.add('active-data');
// //   setTimeout(() => {
// //     infoEelem.classList.remove('active-data');
// //   }, 500);
// // }
// // 
// // prevBtn.addEventListener('click', prevItem);
// // nextBtn.addEventListener('click', nextItem);
// 
// const buttons = document.querySelectorAll('[data-carousel-button]');
// 
// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const offset = btn.dataset.carouselButton === 'next' ? 1 : -1;
//     const slides = document.querySelector('.slides');
// 
//     const activeSlide = slides.querySelector('[data-active]');
//     let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//     if (newIndex < 0) newIndex = newIndex.children.length - 1;
//     if (newIndex > slides.children.length - 1) newIndex = 0
// 
//       slides.children[newIndex].dataset.active = true;
//       delete activeSlide.dataset.active;
//   })
// })
// 
// // console.log(Boolean());
// // console.log(Boolean(''));
// // console.log(Boolean(0));
// // console.log(Boolean('0'));
// // console.log(Boolean(null));
// // console.log(Boolean(undefined));
// // console.log(Boolean(NaN));
// 
// // prefix ++counter
// // postfix counter++
// 
// let counter = 1;
// // ++counter
// // counter++
// let result = counter++;
// 
// console.log(counter)
// console.log(result)

import {sayHi} from './otherAppScript.js';

export const name = 'Matin Hedayat';
export const userId = 56;

sayHi('Matin');
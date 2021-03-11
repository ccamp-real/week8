function promise1(){
    return new Promise((resolve, reject) => {
        resolve();
    })
};

promise1()
.then(() => {console.log('success')})
.catch(() => {console.log('there was an error')})

function promise2(errorBoolean){
    return new Promise((resolve, reject) =>{
    if(errorBoolean){
        reject('There was an error');
    } else{
        resolve('Your data you asked for');
    }
    })
}

promise2(true)
.then(data =>{console.log(data)})
.catch(err => {console.log(err)})

promise2(false)
.then(data => {console.log(data)})
.catch(err => {console.log(err)})

const promise3 = new Promise((resolve, reject) => {resolve('promise 3 complete')});
const promise4 = new Promise((resolve, reject) => {resolve('promise 4 complete')});
const promise5 = new Promise ((resolve, reject) => {resolve('Promise 5 complete')});

// promise3(true)
// .then(data => {console.log(data)})
// .catch(err => {console.log(err)})

// promise3(false)
// .then(data => {console.log(data)} )
// .catch(data => {console.log(err)})

Promise.all([promise3,promise4,promise5])
.then(data => {console.log(data)})
.catch(err => {console.log(err)})

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.icndb.com/jokes/15', true);

xhr.onload = function(){
    console.log(this.responseText);
    const joke = JSON.parse(this.responseText).value.joke;
    console.log(joke);
    URL.innerHTML = `<li>${joke}</li>`;
};

xhr.send()
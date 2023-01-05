const loginForm =  document.getElementById('login');

loginForm.addEventListener(
    "submit",
    (e) => {
        // alert('Form is submitted.');
        e.preventDefault();
        const username= document.querySelector('#username');
        const password= document.querySelector('#password');

        console.log(`Username is: ${username.value} \n Password is: ${password.value}`);
    }
);

const fruitsForm = document.querySelector('#fruits');
fruitsForm.addEventListener(
    "submit",
    (f) => {
        /*
        1. Prevent default form submit
        2. Get the value of fruit and quantity
        3. Create a new li element
        4. Set the text of new li element to include fruit and quantity (e.g. 99 Apple)
        5. Append the new li element to the ul id=list
        6. Reset inputs/set value to empty
        */
        f.preventDefault();
        const fruit = document.querySelector('#fruit');
        const quantity = document.querySelector('#quantity');
        const list = document.querySelector('#list');
        const item = document.createElement("li");
       
        if(quantity.value >= 2) {
            item.innerText = `${quantity.value} ${fruit.value}`;
        }
        else {
            item.innerText = `${quantity.value} ${fruit.value}`;
        } 
        list.appendChild(item);
        fruitsForm.reset();
    }
);
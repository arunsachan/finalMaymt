// getMenu() function
function getMenu() {
    return fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        const menuContainer = document.getElementById('menu');
        menuContainer.innerHTML = '';
  
        data.forEach(item => {
          const foodItem = createFoodItem(item.name, item.price);
          menuContainer.appendChild(foodItem);
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  // TakeOrder() function
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = getRandomBurgers(3);
        const order = { burgers };
  
        resolve(order);
      }, 2500);
    });
  }
  
  // orderPrep() function
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = false;
        const order = { orderStatus, paid };
  
        resolve(order);
      }, 1500);
    });
  }
  
  // payOrder() function
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const orderStatus = true;
        const paid = true;
        const order = { orderStatus, paid };
  
        resolve(order);
      }, 1000);
    });
  }
  
  // thankyouFnc() function
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Function to create a food item element
  function createFoodItem(name, price) {
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');
  
    const foodName = document.createElement('h3');
    foodName.textContent = name;
  
    const foodPrice = document.createElement('p');
    foodPrice.textContent = `Price: $${price}`;
  
    foodItem.appendChild(foodName);
    foodItem.appendChild(foodPrice);
  
    return foodItem;
  }
  
  // Function to generate random burgers from the menu
  function getRandomBurgers(count) {
    const menu = [
      { name: 'Cheeseburger', price: 9.99 },
      { name: 'Veggie Burger', price: 8.99 },
      { name: 'Chicken Burger', price: 10.99 },
      { name: 'BBQ Burger', price: 11.99 },
      { name: 'Mushroom Burger', price: 9.99 },
      { name: 'Bacon Burger', price: 12.99 }
    ];
  
    const randomBurgers = [];
    const menuLength = menu.length;
  
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * menuLength);
      randomBurgers.push(menu[randomIndex]);
    }
  
    return randomBurgers;
  }
  
  // Function to start the order process
  function startOrder() {
    getMenu()
      .then(() => takeOrder())
      .then(order => {
        console.log('Order:', order);
        return orderPrep();
      })
      .then(order => {
        console.log('Order Prepared:', order);
        return payOrder();
      })
      .then(order => {
        console.log('Order Paid:', order);
        thankyouFnc();
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
const glass = {name:'glass',
     color: 'golden',
      price:12, 
      isCleaned:true};

    //   console.log(glass.name);

      const keys = Object.keys(glass);

      const values = Object.values(glass);
      console.log(values);

      const pair = Object.entries(glass);
      console.log(pair);
      console.log(glass);


      //array of array ,two dimensional array
      /*[
        [ 'name', 'glass' ],
        [ 'color', 'golden' ],
        [ 'price', 12 ],
        [ 'isCleaned', true ]
      ] */
delete glass.isCleaned;
// console.log(glass);


const {isCleaned, ...shortGlass }= glass;
console.log(shortGlass);

//freeze

// Object.freeze(glass);
Object.seal(glass);
glass.source = 'bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);

//object seal


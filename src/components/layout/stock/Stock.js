import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";

const stock = [
   {
      name: "La Dame De Montrose",
      img: img1,
      price: 24,
      stock: 15,
      category: "Merlot",
      descr: `
       Made to the same rigorous standards as the First Wine, from grapes grown in the same vineyard, La Dame de Montrose 
       is the estate's second label. Smooth and silky Merlot generally predominates in the varietal blend. Its very pronounced 
       red fruit aromas and flavors reflect another expression of terroir in a distinctive style that is less elaborately complex 
       than that of the First Wine.
       `,
      id: 1,
      country: 'France',
      year: '1983'
   },
   {
      name: "Di Montefalco",
      img: img2,
      price: 15,
      stock: 9,
      category: "Merlot",
      descr: `
      Montefalco Sagrantino (also Sagrantino di Montefalco before 2009) is a style of Italian wine made from
      100% Sagrantino grapes in the commune of Montefalco and its surroundings. Two DOCG styles are made, a secco (dry) wine
      which makes up the majority of production, and a more traditional passito sweet dessert wine style.
    `,
      id: 2,
      country: 'Italy',
      year: '1992'
   },
   {
      name: "St Henry Shiraz",
      img: img2,
      price: 39,
      stock: 5,
      category: "Malbec",
      id: 3,
      country: 'Australia',
      descr: `
      St. Henri is rich and luxurious when young, taking on soft, earthy, mocha-like characters with age. He is matured in a variety of 
      large old vats that allow the wine to develop, imparting minimal, if any, oak character. Although a small proportion of cabernet can 
      sneak into the mix.
      `,
      year: '1957'
   },
   {
      name: "Santa Helena",
      img: img1,
      price: 399,
      stock: 5,
      category: "Malbec",
      id: 4,
      country: 'Chile',
      descr: `
      It is a fresh wine on the palate, with excellent acidity that enhances the fruit, with a rich concentration, soft tannins and a very round finish.
      `,
      year: '1942'
   },
   {
      name: "Viña Maipo",
      img: img1,
      price: 39,
      stock: 18,
      category: "Malbec",
      id: 4,
      country: 'Chile',
      descr: `
      Viña Maipo Cabernet Sauvignon is an invitation to continue enjoying life and its special moments. It has an intense ruby red color and violet tones, 
      this wine with a fruity aroma with hints of chocolate has a memorable finish, when tasted it is harmonic with a medium body, good fruit and balanced. 
      It has a variety of grapes: 85% Cabernet Sauvignon, 15% Merlot, on the nose, aromas of red cherries and plums with spicy notes.
      `,
      year: '1952'
   },
   {
      name: "LAZO VINO BLANCO",
      img: img3,
      price: 39,
      stock: 20,
      category: "Merlot",
      id: 4,
      country: 'Chile',
      descr: `
      Enjoy a pale, with greenish tones, fruity aroma and floral white wine.
      `,
      year: '1952'
   }
   
   
];

export default stock;

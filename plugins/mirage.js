import { Server } from 'miragejs';

new Server({
  seeds(server) {
    server.db.loadData({
      pizzas: [{
        name: 'Сырная пицца',
        prices: [{
          label: 'Маленькая',
          price: 35000,
        }, { label: 'Средняя', price: 45000 }, {
          label: 'Большая', price: 60000,
        }],
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        }, {
          label: 'Пикантная пеперони',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF34D3A25F',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        },
          {
            label: 'Цыпленок',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13',
            types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
          }],
      }, {
        name: 'Сырная пицца',
        prices: [{
          label: 'Маленькая',
          price: 35000,
        }, { label: 'Средняя', price: 45000 }, {
          label: 'Большая', price: 60000,
        }],
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        }, {
          label: 'Пикантная пеперони',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF34D3A25F',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        },
          {
            label: 'Цыпленок',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13',
            types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
          }],
      }, {
        name: 'Сырная пицца',
        prices: [{
          label: 'Маленькая',
          price: 35000,
        }, { label: 'Средняя', price: 45000 }, {
          label: 'Большая', price: 60000,
        }],
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        }, {
          label: 'Пикантная пеперони',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF34D3A25F',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        },
          {
            label: 'Цыпленок',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13',
            types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
          }],
      }, {
        name: 'Сырная пицца',
        prices: [{
          label: 'Маленькая',
          price: 35000,
        }, { label: 'Средняя', price: 45000 }, {
          label: 'Большая', price: 60000,
        }],
        img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/a9de393408e34b37ba00ba56a97fb64d_584x584.jpeg',
        description: 'Увеличенная порция моцареллы, томатный соус',
        sizes: [{ label: 'Большая', size: '35' }, { label: 'Средняя', size: '28' }, { label: 'Маленькая', size: '20' }],
        doughType: [{ label: 'Традиционное' }, { label: 'Тонкое' }],
        additionalProducts: [{
          label: 'Брынза',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        }, {
          label: 'Пикантная пеперони',
          img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAF34D3A25F',
          types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
        },
          {
            label: 'Цыпленок',
            img: 'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAEC6D04E13',
            types: [{ label: 'Big', price: 17000 }, { label: 'Medium', price: 12000 }, { label: 'Small', price: 7000 }],
          }],
      }],
    });
  },
  routes() {
    this.timing = 1000;
    this.get('/api/pizzas', (schema) => {
      return schema.db.pizzas;
    });
  },


});

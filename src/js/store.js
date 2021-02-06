
import { createStore } from 'framework7';

const store = createStore({
  state: {
    url: 'http://localhost:8081/',
    products: [
      {
        id: '1',
        title: 'Apple iPhone 8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.'
      },
      {
        id: '2',
        title: 'Apple iPhone 8 Plus',
        description: 'Velit odit autem modi saepe ratione totam minus, aperiam, labore quia provident temporibus quasi est ut aliquid blanditiis beatae suscipit odio vel! Nostrum porro sunt sint eveniet maiores, dolorem itaque!'
      },
      {
        id: '3',
        title: 'Apple iPhone X',
        description: 'Expedita sequi perferendis quod illum pariatur aliquam, alias laboriosam! Vero blanditiis placeat, mollitia necessitatibus reprehenderit. Labore dolores amet quos, accusamus earum asperiores officiis assumenda optio architecto quia neque, quae eum.'
      },
    ],
    users: [
      {
        id_user:'1',
        username: 'owner',
        password: 'owner',
        nama: 'Cakrabirawa Santoso',
        level: 'Owner',
        status: 'Aktif',
        registered: false
      },
      {
        id_user:'2',
        username: 'admin@satu',
        password: 'admin@satu',
        nama: 'Gina Cindy Usamah',
        level: 'Admin',
        status: 'Aktif',
        registered: false
      },
      {
        id_user:'3',
        username: 'admin@dua',
        password: 'admin@dua',
        nama: 'Farhunnisa Fujiati',
        level: 'Admin',
        status: 'Tidak Aktif',
        registered: false
      },
      {
        id_user:'4',
        username: 'dapur@satu',
        password: 'dapur@satu',
        nama: 'Galang Najmudin',
        level: 'Dapur',
        status: 'Aktif',
        registered: false
      },
      {
        id_user:'5',
        username: 'dapur@dua',
        password: 'dapur@dua',
        nama: 'Salman Pradipta',
        level: 'Dapur',
        status: 'Tidak Aktif',
        registered: false
      },
    ],
    kategori: [],
    menu: [],
    daftar_menu: [],
    cart: [
      // {
      //   id: 1,
      //   id_menu: 1,
      //   nama_menu: "AFOGATTO",
      //   kategori: "Ice Cream Roll",
      //   keterangan: "-",
      //   harga: 4000,
      //   qty: 2
      // },
      // {
      //   harga: 32000,
      //   id: 2,
      //   kategori: "Ice Cream Roll",
      //   keterangan: "-",
      //   id_menu: 2,
      //   nama_menu: "CHOCOLATE",
      //   qty: 3
      // }
    ],
    pesanan: [
      {
        id_pesanan: 1,
        id_user: 2,
        nomor_meja: "1",
        tanggal_pesanan: "2021-1-23 10:18:20"
      }
    ],
    pesanan_detail: [
      {
        harga: 4000,
        id_menu: 1,
        id_pesanan: 1,
        id_pesanan_detail: 1,
        jumlah: 2,
        keterangan: "-",
        status: "Selesai"
      },
      {
        harga: 32000,
        id_menu: 2,
        id_pesanan: 1,
        id_pesanan_detail: 3,
        jumlah: 3,
        keterangan: "-",
        status: "Selesai"
      }
    ], 
  },
  getters: {
    url({ state }) {
      return state.url;
    },
    products({ state }) {
      return state.products;
    },
    users({ state }) {
      return state.users;
    },
    kategori({ state }) {
      return state.kategori;
    },
    menu({ state }) {
      return state.menu;
    },
    daftar_menu({ state }) {
      return state.daftar_menu;
    },
    cart({ state }) {
      return state.cart;
    },
    pesanan({ state }) {
      return state.pesanan;
    },
    pesanan_detail({ state }) {
      return state.pesanan_detail;
    },

    registeredUsers: ({ state }) => {
      return state.users.filter((user) => user.registered);
    },
  },
  actions: {
    getProducts({ state }) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => res.json())
        .then((users) => {
          state.products = users;
        })
    },
    getKategori({ state }) {
      fetch(`${state.url}/kategori`)
        .then((res) => res.json())
        .then((kategori) => {
          state.kategori = kategori;
        })
    },
    getMenu({ state }) {
      fetch(`${state.url}/menu`)
        .then((res) => res.json())
        .then((menu) => {
          state.menu = menu;
        })
    },
    getDaftarMenu({ state }) {
      fetch(`${state.url}/daftar-menu`)
        .then((res) => res.json())
        .then((daftar_menu) => {
          state.daftar_menu = daftar_menu;
        })
    },
    addProduct({ state }, product) {
      state.products = [...state.products, product];
    },
    addUser({ state }, user) {
      state.users = [...state.users, user];
    },
    addKategori({ state }, kategori) {
      state.kategori = [...state.kategori, kategori];
    },
    addMenu({ state }, menu) {
      state.menu = [...state.menu, menu];
    },
    addCart({ state }, cart) {
      state.cart = [...state.cart, cart];
    },
    setCartEmpty({ state }) {
      state.cart = [];
    },
    addPesanan({ state }, pesanan) {
      state.pesanan = [...state.pesanan, pesanan];
    },
    addPesananDetail({ state }, pesanan_detail) {
      state.pesanan_detail = [...state.pesanan_detail, pesanan_detail];
    },
    updateUser({ state }, user) {
      state.users.forEach((item,index) => {
        if ( item.id_user === user.id_user ) {
          state.users[index] = user;
        }
      });
    },
    updateKategori({ state }, kategori) {
      state.kategori.forEach((item,index) => {
        if ( item.id_kategori === kategori.id_kategori ) {
          state.kategori[index] = kategori;
        }
      });
    },
    updateMenu({ state }, menu) {
      state.menu.forEach((item,index) => {
        if ( item.id_menu === menu.id_menu ) {
          state.menu[index] = menu;
        }
      });
    },
    updatePesanan({ state }, pesanan) {
      state.pesanan.forEach((item,index) => {
        if ( item.id_pesanan === pesanan.id_pesanan ) {
          state.pesanan[index] = pesanan;
        }
      });
    },
    updatePesananDetail({ state }, pesanan_detail) {
      state.pesanan_detail.forEach((item,index) => {
        if ( item.id_pesanan_detail === pesanan_detail.id_pesanan_detail ) {
          state.pesanan_detail[index] = pesanan_detail;
        }
      });
    },
  },
})
export default store;


import { createStore } from 'framework7';

const store = createStore({
  state: {
    level: 0,
    url: 'https://restapp.site.co.id',
    users: [],
    user_login: [],
    laporan_penjualan: [],
    laporan_penjualan_filter: [],
    laporan_stok: [],
    laporan_menu_favorit: [],
    kategori: [],
    menu: [],
    daftar_menu: [],
    menu_belum_siap: [],
    menu_siap: [],
    daftar_antrian: [],
    cart: [],
    pesanan: [],
    pesanan_detail: [], 
  },
  getters: {
    url({ state }) {
      return state.url;
    },
    level({ state }) {
      return state.level;
    },
    users({ state }) {
      return state.users;
    },
    user_login({ state }) {
      return state.user_login;
    },
    laporan_penjualan({ state }) {
      return state.laporan_penjualan;
    },
    laporan_penjualan_filter({ state }) {
      return state.laporan_penjualan_filter;
    },
    laporan_stok({ state }) {
      return state.laporan_stok;
    },
    laporan_menu_favorit({ state }) {
      return state.laporan_menu_favorit;
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
    menu_siap({ state }) {
      return state.menu_siap;
    },
    menu_belum_siap({ state }) {
      return state.menu_belum_siap;
    },
    daftar_antrian({ state }) {
      return state.daftar_antrian;
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
    getUsers({ state }) {
      fetch(`${state.url}/users`)
        .then((res) => res.json())
        .then((users) => {
          state.users = users;
        })
    },
    getLaporanPenjualan({ state }) {
      fetch(`${state.url}/laporan/penjualan`)
        .then((res) => res.json())
        .then((laporan_penjualan) => {
          state.laporan_penjualan = laporan_penjualan;
        })
    },
    getLaporanPenjualanFilter({ state }, periode) {
      fetch(`${state.url}/laporan/penjualan-filter?start=${periode.start}&end=${periode.end}`)
        .then((res) => res.json())
        .then((laporan_penjualan_filter) => {
          state.laporan_penjualan_filter = laporan_penjualan_filter;
        })
    },
    getLaporanStok({ state }) {
      fetch(`${state.url}/laporan/stok`)
        .then((res) => res.json())
        .then((laporan_stok) => {
          state.laporan_stok = laporan_stok;
        })
    },
    getLaporanMenuFavorit({ state }) {
      fetch(`${state.url}/laporan/menu-favorit`)
        .then((res) => res.json())
        .then((laporan_menu_favorit) => {
          state.laporan_menu_favorit = laporan_menu_favorit;
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
    getDaftarAntrian({ state }) {
      fetch(`${state.url}/pesanan?status_pesanan=daftar_antrian`)
        .then((res) => res.json())
        .then((daftar_antrian) => {
          state.daftar_antrian = daftar_antrian;
        })
    },
    getMenuBelumSiap({ state }) {
      fetch(`${state.url}/pesanan?status_pesanan=Belum Siap`)
        .then((res) => res.json())
        .then((menu_belum_siap) => {
          state.menu_belum_siap = menu_belum_siap;
        })
    },
    getMenuSiap({ state }) {
      fetch(`${state.url}/pesanan?status_pesanan=Siap`)
        .then((res) => res.json())
        .then((menu_siap) => {
          state.menu_siap = menu_siap;
        })
    },
    addCart({ state }, cart) {
      state.cart = [...state.cart, cart];
    },
    updateUserLogin({ state }, user_login) {
      state.user_login = user_login;
    },
    updateLevel({ state }, level) {
      state.level = level;
    },
    setCartEmpty({ state }) {
      state.cart = [];
    },
    updateUser({ state }, user) {
      state.users.forEach((item,index) => {
        if ( item.id_user === user.id_user ) {
          state.users[index] = user;
        }
      });
    },
  },
})
export default store;

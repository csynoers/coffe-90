
import LoginPage from '../pages/user/login.f7.html';
import LupaPasswordPage from '../pages/user/lupa-password.f7.html';
import UsersPage from '../pages/user/users.f7.html';
import UserAddPage from '../pages/user/add.f7.html';
import UserEditPage from '../pages/user/edit.f7.html';

// kategori
import KategoriPage from '../pages/kategori/all.f7.html';
import KategoriAddPage from '../pages/kategori/add.f7.html';
import KategoriEditPage from '../pages/kategori/edit.f7.html';

// menu
import MenuPage from '../pages/menu/all.f7.html';
import MenuAddPage from '../pages/menu/add.f7.html';
import MenuEditPage from '../pages/menu/edit.f7.html';

// home pages
import HomeOwnerPage from '../pages/home/owner.f7.html';
import HomeAdminPage from '../pages/home/admin.f7.html';
import HomeDapurPage from '../pages/home/dapur.f7.html';

// report pages
import LaporanPenjualanPage from '../pages/laporan/penjualan.f7.html';
import LaporanPenjualanFilterPage from '../pages/laporan/penjualan-filter.f7.html';
import LaporanStokPage from '../pages/laporan/stok.f7.html';

import CheckoutPage from '../pages/checkout.f7.html';
import DaftarAntrianPage from '../pages/daftar-antrian.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  // {
  //   path: '/',
  //   component: LoginPage,
  // },
  {
    path: '/',
    component: HomeOwnerPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/laporan-penjualan/',
    component: LaporanPenjualanPage,
  },
  {
    path: '/laporan-penjualan-filter/',
    component: LaporanPenjualanFilterPage,
  },
  {
    path: '/laporan-stok/',
    component: LaporanStokPage,
  },
  {
    path: '/checkout/',
    component: CheckoutPage,
  },
  {
    path: '/daftar-antrian/',
    component: DaftarAntrianPage,
  },
  {
    path: '/users/',
    component: UsersPage,
  },
  {
    path: '/user-add/',
    component: UserAddPage,
  },
  {
    path: '/user-edit/:userId',
    component: UserEditPage,
  },

  // route kategori
  {
    path: '/kategori/',
    component: KategoriPage,
  },
  {
    path: '/kategori-add/',
    component: KategoriAddPage,
  },
  {
    path: '/kategori-edit/:kategoriId',
    component: KategoriEditPage,
  },

  // route menu
  {
    path: '/menu/',
    component: MenuPage,
  },
  {
    path: '/menu-add/',
    component: MenuAddPage,
  },
  {
    path: '/menu-edit/:menuId',
    component: MenuEditPage,
  },

  {
    path: '/lupa-password/',
    component: LupaPasswordPage,
  },
  {
    path: '/home-owner/',
    component: HomeOwnerPage,
  },
  {
    path: '/home-admin/',
    component: HomeAdminPage,
  },
  {
    path: '/home-dapur/',
    component: HomeDapurPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
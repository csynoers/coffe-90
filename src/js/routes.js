
import LoginPage from '../pages/user/login.f7.html';
import LupaPasswordPage from '../pages/user/lupa-password.f7.html';
import UsersPage from '../pages/user/users.f7.html';
import UserAddPage from '../pages/user/add.f7.html';
import UserEditPage from '../pages/user/edit.f7.html';

// karyawan
// import KaryawanPage from '../pages/karyawan/all.f7.html';
// import KaryawanAddPage from '../pages/karyawan/add.f7.html';

// kursi
// import KursiPage from '../pages/kursi/all.f7.html';
// import KursiAddPage from '../pages/kursi/add.f7.html';

// kategori
import KategoriPage from '../pages/kategori/all.f7.html';
import KategoriAddPage from '../pages/kategori/add.f7.html';
import KategoriEditPage from '../pages/kategori/edit.f7.html';

// menu
import MenuPage from '../pages/menu/all.f7.html';
import MenuAddPage from '../pages/menu/add.f7.html';
import MenuEditPage from '../pages/menu/edit.f7.html';

// makanan
// import MakananPage from '../pages/makanan/all.f7.html';
// import MakananAddPage from '../pages/makanan/add.f7.html';

// minuman
// import MinumanPage from '../pages/minuman/all.f7.html';
// import MinumanAddPage from '../pages/minuman/add.f7.html';

// home pages
// import HomePage from '../pages/home.f7.html';
import HomeOwnerPage from '../pages/home/owner.f7.html';
import HomeAdminPage from '../pages/home/admin.f7.html';
import HomeDapurPage from '../pages/home/dapur.f7.html';

// report pages
import LaporanPenjualanPage from '../pages/laporan/penjualan.f7.html';
import LaporanPenjualanFilterPage from '../pages/laporan/penjualan-filter.f7.html';
import LaporanProdukPage from '../pages/laporan/produk.f7.html';
import LaporanStokPage from '../pages/laporan/stok.f7.html';

// pesanan pages
import PesananPage from '../pages/pesanan.f7.html';
import PesananKonfirmasiPage from '../pages/pesanan-konfirmasi.f7.html';

// import AboutPage from '../pages/about.f7.html';
// import FormPage from '../pages/form.f7.html';
import CheckoutPage from '../pages/checkout.f7.html';
import DaftarAntrianPage from '../pages/daftar-antrian.f7.html';

// import LeftPage1 from '../pages/left-page-1.f7.html';
// import LeftPage2 from '../pages/left-page-2.f7.html';
// import DynamicRoutePage from '../pages/dynamic-route.f7.html';
// import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: MenuPage,
  },
  // {
  //   path: '/',
  //   component: LaporanStokPage,
  // },
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
    path: '/laporan-produk/',
    component: LaporanProdukPage,
  },
  {
    path: '/laporan-stok/',
    component: LaporanStokPage,
  },
  {
    path: '/pesanan/',
    component: PesananPage,
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
    path: '/konfirmasi-pesanan/',
    component: PesananKonfirmasiPage,
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
  // {
  //   path: '/karyawan/',
  //   component: KaryawanPage,
  // },
  // {
  //   path: '/karyawan-add/',
  //   component: KaryawanAddPage,
  // },
  // {
  //   path: '/kursi/',
  //   component: KursiPage,
  // },
  // {
  //   path: '/kursi-add/',
  //   component: KursiAddPage,
  // },

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

  // {
  //   path: '/makanan/',
  //   component: MakananPage,
  // },
  // {
  //   path: '/makanan-add/',
  //   component: MakananAddPage,
  // },

  // {
  //   path: '/minuman/',
  //   component: MinumanPage,
  // },
  // {
  //   path: '/minuman-add/',
  //   component: MinumanAddPage,
  // },

  // {
  //   path: '/',
  //   // component: HomePage,
  // },
  {
    path: '/lupa-password/',
    component: LupaPasswordPage,
  },
  // {
  //   path: '/home/',
  //   component: HomePage,
  // },
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
  // {
  //   path: '/about/',
  //   component: AboutPage,
  // },
  // {
  //   path: '/form/',
  //   component: FormPage,
  // },

  // {
  //   path: '/left-page-1/',
  //   component: LeftPage1,
  // },
  // {
  //   path: '/left-page-2/',
  //   component: LeftPage2,
  // },
  // {
  //   path: '/dynamic-route/blog/:blogId/post/:postId/',
  //   component: DynamicRoutePage,
  // },
  // {
  //   path: '/request-and-load/user/:userId/',
  //   async: function ({ router, to, resolve }) {
  //     // App instance
  //     var app = router.app;

  //     // Show Preloader
  //     app.preloader.show();

  //     // User ID from request
  //     var userId = to.params.userId;

  //     // Simulate Ajax Request
  //     setTimeout(function () {
  //       // We got user data from request
  //       var user = {
  //         firstName: 'Vladimir',
  //         lastName: 'Kharlampidi',
  //         about: 'Hello, i am creator of Framework7! Hope you like it!',
  //         links: [
  //           {
  //             title: 'Framework7 Website',
  //             url: 'http://framework7.io',
  //           },
  //           {
  //             title: 'Framework7 Forum',
  //             url: 'http://forum.framework7.io',
  //           },
  //         ]
  //       };
  //       // Hide Preloader
  //       app.preloader.hide();

  //       // Resolve route to load page
  //       resolve(
  //         {
  //           component: RequestAndLoad,
  //         },
  //         {
  //           props: {
  //             user: user,
  //           }
  //         }
  //       );
  //     }, 1000);
  //   },
  // },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
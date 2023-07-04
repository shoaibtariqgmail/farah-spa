
import React, { useState } from 'react';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const menuItems = [
    {
      name: 'dashboard',
      icon: '/icons/dashboard.svg',
      active_icon: '/icons/dashboard_purple.svg',
      label: 'Dashboard',
      subMenu: null,
    },
    {
      name: 'product',
      icon: '/icons/product.svg',
      active_icon: '/icons/product_purple.svg',
      label: 'Products',
      subMenu: null,
    },
    {
      name: 'order',
      icon: '/icons/order.svg',
      active_icon: '/icons/order_purple.svg',
      label: 'Order',
      subMenu: [
        {
          name: 'All Orders',
        },
        {
          name: 'Recent Orders',
        }

      ],
    },
    {
      name: 'inventory',
      icon: '/icons/inventory.svg',
      active_icon: '/icons/inventory_purple.svg',
      label: 'Inventory',
      subMenu: [
        {
          name: 'Pakistan',
          icon: '/icons/pakistan.svg',
        },
        {
          name: 'Australia',
          icon: '/icons/australia.svg',
        },
        {
          name: 'UK',
          icon: '/icons/uk.svg',
        }
      ],
    },
    {
      name: 'users',
      icon: '/icons/user.svg',
      active_icon: '/icons/user_purple.svg',
      label: 'Users',
      subMenu: [
        {
          name: 'All Users',
        },
        {
          name: 'Add a new user',
        },
        {
          name: 'Schedule',
        }
        ],
    },
    {
      name: 'suplier',
      icon: '/icons/suppliers.svg',
      active_icon: '/icons/suppliers_purple.svg',
      label: 'Suplier',
      subMenu: null,
    },
    {
      name: 'voucher',
      icon: '/icons/voucher.svg',
      active_icon: '/icons/voucher_purple.svg',
      label: 'Voucher',
      subMenu:
        [
          {
            name: 'All Vouchers',
          },
          {
            name: 'Add a new Voucher',
          }
        ],
    },
  ];
  

  const handleMenuClick = (menuIndex) => {
    if (activeMenu === menuIndex) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuIndex);
    }
  };
  return (
    <aside className="h-screen w-64 p-4 shadow-sidebar">
    <ul className="space-y-2">
      {menuItems.map((menuItem) => (
        <li key={menuItem.name} className={`pb-4`}>
          <button
            className={
              menuItem.subMenu !== null
                ? `flex justify-between items-center w-full focus:outline-none ${
                    activeMenu === menuItem.name ? ' border-b-2 border-[#885AF8] text-[#885AF8] pb-1' : ''
                  }`
                : `flex justify-between items-center w-full focus:outline-none`

            }
            onClick={() => handleMenuClick(menuItem.name)}
          >
           
            <div
              className={
                menuItem.subMenu === null

                  ? `flex items-center gap-3 ${
                      activeMenu === menuItem.name ? 'border-b-2 border-[#885AF8] text-[#885AF8]  pb-1' : ''
                    }`
                  : `flex items-center gap-3`
              }
            >
              {
                activeMenu === menuItem.name ? (
                  <img src={menuItem.active_icon} alt="" />
                ) : (
                  <img src={menuItem.icon} alt="" />
                )
              }
              <p className="text-xl font-semibold">{menuItem.label}</p>
            </div>
            {menuItem.subMenu && <img src="/icons/left_errow.svg" alt=""
              className={activeMenu === menuItem.name ? 'transform -rotate-90 transition-transform' : 'transform rotate-360 transition-transform'}
            />}
          </button>
          {menuItem.subMenu && activeMenu === menuItem.name && (
            <ul className="pl-4 space-y-2 pt-2">
              {menuItem.subMenu.map((subMenuItem) => (
                <li key={subMenuItem} className=''>
                  <div className='flex items-center gap-2'>
                    {
                      subMenuItem.icon && <img src={subMenuItem.icon} alt="" />
                    }
                    <p className="text-lg font-semibold">{subMenuItem.name}</p>
                  </div>
                  </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </aside>
  );
};

export default Sidebar;

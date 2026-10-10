import { cn } from '../../../lib/utils';
import { Button } from '@dashflowx/core';
import { MenuList } from '../../../lib/kit';

interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iDfxNavBarProps {
  logo?: JSX.Element;
  menuArrays?: iDfxMenu[];
  actions?: JSX.Element;
  menuIcon?: JSX.Element;
  navClassName?: string;
  navItemClassName?: string;
  libraryType?: 'react' | 'next';
  style?: any;
  menuType?: any;
  hideMenuIcon?: boolean;
  handleMenutoggle?: () => void;
  openMenu?: boolean;
}

const NavbarTwo = ({
  menuArrays,
  actions,
  logo,
  menuIcon,
  navClassName,
  navItemClassName,
  style,
  libraryType = 'react',
  menuType,
  hideMenuIcon,
  handleMenutoggle,
  openMenu,
}: iDfxNavBarProps) => {
  return (
    <nav className={cn('shadow-sm m-2',navClassName)} style={style}>
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="flex items-center justify-center">
          <div className="mr-6">{logo && logo}</div>
          {!hideMenuIcon ? (
            <Button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={handleMenutoggle}
            >
              <span className="sr-only">Open main menu</span>
              {menuIcon ? (
                menuIcon
              ) : (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </Button>
          ) : null}
          <div
            className={cn(
              openMenu ? '' : 'hidden ',
              'w-full md:block md:w-auto'
            )}
            id="navbar-default"
          >
            {menuArrays && (
              <MenuList
                type={menuType}
                className={navItemClassName}
                variant="one"
                menuArrays={menuArrays}
                library={libraryType}
              />
            )}
          </div>
        </div>
        <div
          className={cn(
            !hideMenuIcon ? 'hidden md:flex' : 'flex',
            'items-center justify-end'
          )}
        >
          <div>{actions}</div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTwo;

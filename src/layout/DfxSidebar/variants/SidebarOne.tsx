import { cn } from '../../../lib/utils';
import { MenuList, TypographyComp } from '../../../lib/kit';
import { ArrowRight } from '../../../lib/kit';

interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}

interface iDfxSidebar {
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  logo: JSX.Element;
  menuType: any;
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  profilePath?: string;
  libraryType: 'react' | 'next';
}

export const SidebarOne = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  profileImage,
  profileName,
  profileDescription,
  profilePath,
  libraryType = 'react',
}: iDfxSidebar) => {
  return (
    <aside
      id="side-bar"
      className={cn(
        expanded
          ? 'flex flex-col w-96 min-h-[28rem] px-8 py-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'
          : 'relative flex flex-col items-start w-20 px-2 min-h-[28rem] py-4 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700'
      )}
    >
      {logo}
      <TypographyComp
        as={menuType}
        {...(libraryType === 'react' && {
          to: profilePath,
        })}
        {...(libraryType === 'next' && {
          href: profilePath,
        })}
        className="flex flex-col items-center mt-6 -mx-2"
      >
        {profileImage}
        {profileName && (
          <h4
            className={cn(
              expanded
                ? 'mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200'
                : 'hidden'
            )}
          >
            {profileName}
          </h4>
        )}
        {profileDescription && (
          <p
            className={cn(
              expanded
                ? 'mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400'
                : 'hidden'
            )}
          >
            {profileDescription}
          </p>
        )}
      </TypographyComp>
      <div
        className={cn(
          'fixed top-4 flex flex-col items-start justify-between h-full flex-1 w-full',
          expanded ? 'mt-[230px]' : 'mt-[130px]',
          expanded ? 'max-w-60' : 'max-w-14'
        )}
      >
        <div
          className={cn(
            'absolute h-full w-full',
            expanded ? 'max-w-60' : 'max-w-14'
          )}
        >
          <MenuList
            showText={expanded}
            library={libraryType}
            variant="basic"
            menuArrays={menuArrays}
            type={menuType}
            linkClassName="w-full"
            className="w-full"
            tooltipClassName="bg-white"
          />
        </div>
        <div
          className={cn(
            'fixed w-full mb-6 z-30 bottom-0 flex items-center justify-center px-4 py-4 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700',
            expanded ? 'max-w-60' : 'max-w-16'
          )}
        >
          <button
            onClick={toggleExpand}
            className={cn(
              'flex items-center justify-center w-full',
              expanded ? 'rotate-180 duration-75' : 'duration-75'
            )}
          >
            <ArrowRight className={cn('w-6 h-6')} />
          </button>
        </div>
      </div>
    </aside>
  );
};

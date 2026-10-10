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
  sidebarFooter?: JSX.Element;
}

export const SidebarThree = ({
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
  sidebarFooter,
}: iDfxSidebar) => {
  return (
    <aside
      id="side-bar"
      className={cn(
        expanded
          ? 'flex flex-col w-96 min-h-[28rem] p-4 overflow-y-auto'
          : 'relative flex flex-col items-start w-24 min-h-[28rem] p-4 overflow-y-auto'
      )}
    >
      <div
        className={cn(
          expanded
            ? 'bg-white m-2 my-4 shadow-lg rounded-3xl h-full flex justify-between flex-col'
            : 'bg-white m-2 my-4 shadow-lg rounded-3xl h-full flex justify-between items-center flex-col'
        )}
      >
        <div>
          <div className="flex flex-col items-center w-full mt-4">
            {logo}
            <TypographyComp
              as={menuType}
              {...(libraryType === 'react' && {
                to: profilePath,
              })}
              {...(libraryType === 'next' && {
                href: profilePath,
              })}
              className="flex flex-col items-center mt-2"
            >
              {profileImage}
              {profileName && (
                <h4
                  className={cn(
                    expanded
                      ? 'mx-2 mt-2 text-lg font-bold text-gray-800 dark:text-gray-200'
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
                      ? 'mx-2 mt-1 text-xs font-medium text-gray-600 dark:text-gray-400'
                      : 'hidden'
                  )}
                >
                  {profileDescription}
                </p>
              )}
            </TypographyComp>
          </div>
          <div
            className={cn(
              'flex flex-col items-start justify-between flex-1 w-full',
              expanded ? 'h-[70%]' : 'h-[70%]'
            )}
          >
            <div className={cn('w-full', expanded ? 'max-w-60' : 'max-w-14')}>
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
          </div>
        </div>
        <div>
          <div
            className={cn(
              'w-full flex flex-col items-center justify-center px-4 py-6 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
            )}
          >
            {sidebarFooter}
          </div>
          <div
            className={cn(
              'w-full mb-6 flex flex-col items-center justify-center px-4 py-4 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
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
      </div>
    </aside>
  );
};

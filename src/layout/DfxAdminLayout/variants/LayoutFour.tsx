import { DfxNavBar } from '../../DfxNavBar';
import { DfxSidebar } from '../../DfxSidebar';
import { cn } from '../../../lib/utils';
interface iDfxMenu {
  id: string;
  menuIcon?: JSX.Element;
  title: string;
  path: string;
  active: boolean;
}
interface iLayoutComp {
  logo: JSX.Element;
  expanded: boolean;
  menuArrays: iDfxMenu[];
  toggleExpand: () => void;
  menuType: any;
  children: JSX.Element;
  NavActions?: JSX.Element;
  libraryType: 'react' | 'next';
  profileImage?: JSX.Element;
  profileName?: string;
  profileDescription?: string;
  navClassName?: string;
  scrollAreaClassName?: string;
  profilePath?: string;
  prefixNavBar?: JSX.Element;
  sidebarFooter?: JSX.Element;
}
export const LayoutFour = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  children,
  NavActions,
  libraryType,
  profileImage,
  profileName,
  profileDescription,
  navClassName,
  scrollAreaClassName,
  profilePath,
  prefixNavBar,
  sidebarFooter
}: iLayoutComp) => {
  return (
    <div className="flex w-full min-h-[28rem] bg-white m-[10px] rounded-3xl">
      <DfxSidebar
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        variant="four"
        profileImage={profileImage}
        profileName={profileName}
        profileDescription={profileDescription}
        libraryType={libraryType}
        profilePath={profilePath}
        sidebarFooter={sidebarFooter}
      />
      <div className="min-h-0 w-full flex-1">
        <DfxNavBar
          libraryType={libraryType}
          actions={NavActions}
          variant="two"
          navClassName={navClassName}
          logo={prefixNavBar}
        />
        <div
          className={cn(
            'm-2 overflow-y-scroll h-80',
            scrollAreaClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

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
  navClassName?: string;
  scrollAreaClassName?: string;
  prefixNavBar?: JSX.Element;
}
export const LayoutComp = ({
  logo,
  expanded,
  menuArrays,
  toggleExpand,
  menuType,
  children,
  NavActions,
  libraryType,
  navClassName,
  scrollAreaClassName,
  prefixNavBar,
}: iLayoutComp) => {
  return (
    <div className="flex min-h-[28rem] w-full bg-white">
      <DfxSidebar
        logo={logo}
        expanded={expanded}
        menuArrays={menuArrays}
        toggleExpand={toggleExpand}
        menuType={menuType}
        variant="basic"
        libraryType={libraryType}
      />
      <div className="min-h-0 w-full flex-1">
        <DfxNavBar
          logo={prefixNavBar}
          libraryType={libraryType}
          actions={NavActions}
          variant="basic"
          navClassName={navClassName}
        />
        <div
          className={cn(
            'w-full p-6 bg-slate-100 overflow-y-scroll h-80',
            scrollAreaClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

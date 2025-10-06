import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import uiStore from '@/store/uiStore';
import { Link ,useLocation} from 'react-router'

function NavLinks({links}) {
    const { pathname } = useLocation();
    const {activePage,setActivePage} = uiStore()
  return (
   <SidebarMenu className={"mt-10"}>
          {links.map((link) => (
            <SidebarMenuItem key={link.title}>
              <Link to={link.url} onClick={()=>setActivePage(link.title)}>
                <SidebarMenuButton
                  asChild
                  tooltip={link.name}
                  isActive={pathname.startsWith(link.url)}
                  className="data-[active=true]:bg-primary data-[active=true]:text-background mx-auto text-sidebar-accent-foreground/60 w-[90%]"
                >
                  <div className="py-6 flex gap-3 text-base sm:text-[15px] px-3 font-medium ">
                    <span>
                      <link.icon className="size-5 sm:size-6" />
                    </span>
                    <span>{link.title}</span>
                  </div>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
  )
}

export default NavLinks
import { experiments } from "@/lib/utils/constants";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "./ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>Experiments</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {experiments.length > 0 &&
            experiments.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={`/experiments/${item.id}`}>
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          {experiments.length === 0 && <div>No current Experiments</div>}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

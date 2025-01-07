"use client";
import { useExperimentStore } from "@/app/store/experiment-store";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { TypographyH3, TypographyMuted } from "./Typography";
import { Button } from "./ui/button";
import { PlusCircle, PlusSquare } from "lucide-react";

// fix linking to url to link based on experiment/eval id
export function AppSidebar() {
  const experiments = useExperimentStore((state) => state.experiments);
  return (
    <Sidebar>
      <SidebarHeader>
        {/* <div className="relative flex items-center justify-between"> */}
        <div className="text-center">
          <TypographyH3 value="Experiments" />
          {/* {experiments.length > 0 && (
            <Button className="absolute right-0" size="icon">
              <PlusCircle className="size-sm" />
            </Button>
          )} */}
        </div>
        <hr />
      </SidebarHeader>
      <SidebarContent className="mt-4">
        <SidebarMenu>
          {experiments.length > 0 &&
            experiments.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a href={`/experiments/${item.id}`}>
                    <span className="text-lg font-semibold text-muted-foreground">
                      {item.name}
                    </span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          <SidebarMenuItem className="text-center mt-2">
            <Button size="lg">
              Create New Experiment
              <PlusSquare />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

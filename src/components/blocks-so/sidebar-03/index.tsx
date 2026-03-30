import { SidebarInset, SidebarProvider } from "@/components/blocks-so/sidebar";
import { DashboardSidebar } from "@/components/sidebar-03/app-sidebar";

export default function Sidebar03() {
  return (
    <SidebarProvider>
      <div className="relative flex h-dvh w-full">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col" />
      </div>
    </SidebarProvider>
  );
}

export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
  permission: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    heading: "Menu",
    id: Number(uniqueId()),
    children: [
      {
        name: "Dashboard",
        icon: "solar:widget-add-line-duotone",
        id: uniqueId(),
        permission: 'participant',
        url: "/dashboard",
      },
      {
        name: "Team",
        id: uniqueId(),
        permission: 'participant',
        icon: "solar:users-group-rounded-bold-duotone",
        url: "/dashboard/team"
      }
    ],
  }
];

export default SidebarContent;

import React, { ReactNode } from "react";

export interface ISidebarItemComponent {
    icon: ReactNode
    name: string
    link: string
    component: React.ComponentType
}

export interface ISidebarItem extends Omit<ISidebarItemComponent, "component"> {}
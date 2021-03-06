/// <reference types="react" />
import { Tool } from '../../common/tool';
export interface CustomToolbarItemProps {
    tool: Tool;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    isReverse: boolean;
    onClick: (e?: any) => void;
    style?: {
        [key: string]: string;
    };
    className?: string;
}
export declare type CustomAdvancedToolbarItem = React.ComponentType<CustomToolbarItemProps>;

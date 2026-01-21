import {ButtonProps} from "primereact/button";
import {IconType} from "primereact/utils";

export interface IButton {
    severity?: "success" | "help" | "warning" | "secondary" | "info" | "danger" | "contrast"
    onClick?: () => void
    icon?: IconType<ButtonProps>
    size?: "small" | "large"
    rounded?: boolean
    text?: boolean
    className?: string
}

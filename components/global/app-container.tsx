import { cn } from "@/lib/utils"
import { FC } from "react"

interface AppContainerProps {
    children: React.ReactNode
    className?: string,
}
export const AppContainer:FC<AppContainerProps> = ({className, children}) => {
    return (
        <div className={cn("max-w-7xl mx-auto w-full p-4", className)}>{children}</div>
    )
}
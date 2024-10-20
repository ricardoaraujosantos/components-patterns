import { twMerge } from 'tailwind-merge'

export const MessageAction = ({Icon, ...rest}) => {
    return(
        <button className={twMerge("w-8 h-8 rounded flex items-center justify-center bg-green-300", rest.className)}>
            <Icon className="w-3 h-3 text-zinc-50"/>
        </button> 
    )
}
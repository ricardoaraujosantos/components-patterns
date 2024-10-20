import { twMerge } from 'tailwind-merge'

export const MessageIcon = ({Icon, ...rest}) => {
    return(
       <Icon  className={twMerge("w-8 h-8 p-2 rounded bg-blue-400", rest.className)}/>
    )
}


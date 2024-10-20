export const MessageContent = ({textMensage}) => {
    return(
        <div className="flex-1 flex justify-center items-center flex-col gap-2">
            <p className="text-sm text-zinc-50 mx-2">
                {textMensage}
            </p>
        </div>
    )
}
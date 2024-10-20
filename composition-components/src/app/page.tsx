import { TiWarningOutline } from "react-icons/ti";
import { MessageCuston } from "./components/MessageCuston"
import { FaCheck, FaTrashCan, FaCircleInfo } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <MessageCuston.Root>
            <MessageCuston.Icon Icon={TiWarningOutline} className="bg-yellow-400 text-black"/>
            <MessageCuston.Content textMensage="Mensagem de texto"/>
            <MessageCuston.Actions>
              <MessageCuston.Action Icon={FaCheck} className="bg-green-600" />
              <MessageCuston.Action Icon={FaTrashCan} className="bg-red-600" />
            </MessageCuston.Actions>
        </MessageCuston.Root>
        <MessageCuston.Root>
            <MessageCuston.Icon Icon={FaCircleInfo} className="text-white"/>
            <MessageCuston.Content textMensage="Mensagem de texto"/>
            <MessageCuston.Actions>
              <MessageCuston.Action Icon={FaCheck} className="bg-green-600" />
            </MessageCuston.Actions>
        </MessageCuston.Root>
        <MessageCuston.Root>
            <MessageCuston.Content textMensage="Mensagem de texto"/>
            <MessageCuston.Actions>
              <MessageCuston.Action Icon={FaTrashCan} className="bg-red-600" />
              <MessageCuston.Action Icon={FaCheck} className="bg-green-600" />
            </MessageCuston.Actions>
        </MessageCuston.Root>
        <MessageCuston.Root>
            <MessageCuston.Content textMensage="Mensagem de texto"/>
        </MessageCuston.Root>
    </div>
  );
}

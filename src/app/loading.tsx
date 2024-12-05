import {Spinner} from "@nextui-org/spinner";

export default function loading() {
 return(
    <div className="flex w-full h-full justify-center items-center">
        <Spinner size="lg" label="Carregando" color="danger" labelColor="danger"/>
    </div>
 );
}

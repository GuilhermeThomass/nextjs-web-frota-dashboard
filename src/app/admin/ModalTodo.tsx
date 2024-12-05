import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input} from "@nextui-org/react";
import { Button } from "../components/Button";
import { create } from "../lib/actions";
import {DateInput} from "@nextui-org/react";

export default function ModalTodo() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <>
        <Button onClick={onOpen} variant="primary" size="md">Adicionar Tarefa</Button>
        <Modal
            onSubmit={()=>create()}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            classNames={{
                body: "text-black",
                backdrop: "bg-[#203240]/50 backdrop-opacity-40",
                base: "border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-foreground">Tarefa</ModalHeader>
                <ModalBody>
                    <form onSubmit={()=>{create()}} className="flex flex-col gap-6">
                        <Input
                            color="success"
                            autoFocus
                            placeholder="Entre quem fez o pedido"
                            variant="underlined"
                        />
                        <Input
                            color="success"
                            placeholder="Entre uma descrição"
                            variant="underlined"
                        />
                        <DateInput granularity="second" variant="underlined" color="success" className="text-white"/>

                        <Button variant="primary" size="md" onClick={onClose}>
                            Criar Tarefa
                        </Button>
                    </form>

                </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

'use client'

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input} from "@nextui-org/react";
import { Button } from "../components/Button";
import { useForm } from "react-hook-form";
import { createTodo } from "../lib/actions";

export default function ModalTodo() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { register,handleSubmit, formState:{} } = useForm({});
    const onSubmit = (data:any) => {
        const unidade = data.unidade;
        const descricao = data.descricao;
        const date = data.date;
        const hora = data.hora;
        createTodo(unidade,descricao,date,hora);
    };
    return (
      <>
        <Button onClick={onOpen} variant="primary" size="md">Adicionar Tarefa</Button>
        <Modal
            onSubmit={handleSubmit(onSubmit)}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
            classNames={{
                body: "text-black bg-background",
                backdrop: "bg-[#203240]/50 backdrop-opacity-40",
                base: "border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
            }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-textcolor bg-background">Tarefa</ModalHeader>
                <ModalBody>
                    <form className="flex flex-col gap-6" >
                        <Input
                            aria-label="unidade"
                            classNames={{
                                input: ["text-textcolor ",
                                    "bg-transparent",
                                    "placeholder:text-textcolor/50"],
                            }}
                            {...register("unidade")}
                            color="danger"
                            autoFocus
                            placeholder="Entre quem fez o pedido"
                            variant="underlined"
                        />
                        <Input
                            aria-label="descrição"
                            classNames={{
                                input: ["text-textcolor ",
                                "bg-transparent",
                                "placeholder:text-textcolor/50"],

                            }}
                            {...register("descricao")}
                            color="danger"
                            placeholder="Entre uma descrição"
                            variant="underlined"
                        />
                        <Input
                            pattern='(?:((?:0[1-9]|1[0-9]|2[0-9])\/(?:0[1-9]|1[0-2])|(?:30)\/(?!02)(?:0[1-9]|1[0-2])|31\/(?:0[13578]|1[02]))\/(?:19|20)[0-9]{2})'
                            arial-label="data"
                            classNames={{
                                input: ["text-textcolor ",
                                    "bg-transparent",
                                    "placeholder:text-textcolor/50"],

                            }}
                            {...register("date")}
                            color="danger"
                            placeholder="DD/MM/AAAA"
                            variant="underlined"
                        />
                        <Input
                            pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
                            arial-label="danger"
                            classNames={{
                                input: ["text-textcolor ",
                                    "bg-transparent",
                                    "placeholder:text-textcolor/50"],
                            }}
                            {...register("hora")}
                            color="danger"
                            placeholder="00:00"
                            variant="underlined"
                        />


                        <Button variant="primary" size="md" onClick={onClose}>
                            Criar Tarefa
                        </Button>
                    </form>

                </ModalBody>
                <ModalFooter className="bg-background">
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

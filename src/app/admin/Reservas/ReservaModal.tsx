'use client'

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal";
import { Button } from "../../components/Button";
import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import { createReservas } from "../../lib/actions";



export default function ReservaModal() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const { register,handleSubmit, formState:{} } = useForm({});
    const onSubmit = (data:any) => {
        const carro = data.carro;
        const placa = data.placa;
        const local_saida = data.local_saida;
        const local_destino = data.local_destino;
        const data_hora = data.data_hora;
        const vagas = data.vagas;
        createReservas(carro,placa,local_saida,local_destino,data_hora,vagas);
    };
    return (
        <>
          <Button onClick={onOpen} variant="secondary" size="md">Reservar Carro</Button>
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
                  <ModalHeader className="flex flex-col gap-1 text-textcolor bg-background">Reservar</ModalHeader>
                  <ModalBody>
                        <form className="flex flex-col gap-6" >
                            <Input
                                aria-label="carro"
                                classNames={{
                                    input: ["text-textcolor ",
                                        "bg-transparent",
                                        "placeholder:text-textcolor/50"],
                              }}
                              {...register("carro")}
                              color="danger"
                              autoFocus
                              placeholder="Entre o carro"
                              variant="underlined"
                          />
                            <Input
                                aria-label="placa"
                                classNames={{
                                    input: ["text-textcolor ",
                                        "bg-transparent",
                                        "placeholder:text-textcolor/50"],
                              }}
                              {...register("placa")}
                              color="danger"
                              placeholder="Entre a placa"
                              variant="underlined"
                          />
                            <Input
                                aria-label="local de saida"
                                classNames={{
                                    input: ["text-textcolor ",
                                        "bg-transparent",
                                        "placeholder:text-textcolor/50"],
                              }}
                              {...register("local_saida")}
                              color="danger"
                              placeholder="Entre o local de saida"
                              variant="underlined"
                          />
                            <Input
                                aria-label="local de destino"
                                classNames={{
                                    input: ["text-textcolor ",
                                        "bg-transparent",
                                        "placeholder:text-textcolor/50"],
                              }}
                              {...register("local_destino")}
                              color="danger"
                              placeholder="Entre o local de destino"
                              variant="underlined"
                          />
                            <Input
                                aria-label="data e hora"
                                classNames={{
                                    input: ["text-textcolor ",
                                        "bg-transparent",
                                        "placeholder:text-textcolor/50"],
                              }}
                              {...register("data_hora")}
                              color="danger"
                              placeholder="Entre a data e hora de saida"
                              variant="underlined"
                          />
                            <Input
                                aria-label="vagas disponiveis"
                                classNames={{
                                    input: ["text-textcolor ",
                                        "bg-transparent",
                                        "placeholder:text-textcolor/50"],
                              }}
                              {...register("vagas")}
                              color="danger"
                              placeholder="Entre a quantidade de vagas disponiveis"
                              variant="underlined"
                          />
                          <Button variant="primary" size="md" onClick={onClose}>
                              Criar Reserva
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

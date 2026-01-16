"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { submitServicioTecnicoForm } from "@/app/actions";

const servicioTecnicoSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido."),
  company: z.string().min(1, "El nombre de la empresa es requerido."),
  brand: z.string().min(1, "La marca es requerida."),
  model: z.string().min(1, "El modelo es requerido."),
  problem: z
    .string()
    .min(10, "La descripción del problema debe tener al menos 10 caracteres."),
});

type ServicioTecnicoFormValues = z.infer<typeof servicioTecnicoSchema>;

export default function ServicioTecnicoForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<ServicioTecnicoFormValues>({
    resolver: zodResolver(servicioTecnicoSchema),
    defaultValues: {
      fullName: "",
      company: "",
      brand: "Ricoh",
      model: "",
      problem: "",
    },
  });

  const onSubmit = (data: ServicioTecnicoFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitServicioTecnicoForm(formData);

      if (result.success) {
        toast({
          title: "¡Solicitud Enviada!",
          description:
            "Gracias por contactarnos. Un técnico te contactará pronto.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error al enviar",
          description:
            result.error ||
            "Hubo un problema al enviar tu solicitud. Intenta de nuevo.",
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Ej. Juan Pérez" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de su organización" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="brand"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca del Equipo</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Ricoh">Ricoh</SelectItem>
                    <SelectItem value="Epson">Epson</SelectItem>
                    <SelectItem value="HP">HP</SelectItem>
                    <SelectItem value="Kyocera">Kyocera</SelectItem>
                    <SelectItem value="Otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input placeholder="Ej. MP 301" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="problem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descripción del Problema</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="¿Qué error presenta el equipo?"
                  rows={4}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full font-bold py-4 text-base"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Enviar Solicitud de Servicio"
          )}
        </Button>
      </form>
    </Form>
  );
}

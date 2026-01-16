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
import { submitMantenimientoForm } from "@/app/actions";

const mantenimientoSchema = z.object({
  companyName: z.string().min(1, "El nombre de la empresa es requerido."),
  contactPerson: z
    .string()
    .min(1, "El nombre de la persona de contacto es requerido."),
  phone: z.string().min(1, "El teléfono es requerido."),
  equipmentCount: z.string(),
  message: z.string(),
});

type MantenimientoFormValues = z.infer<typeof mantenimientoSchema>;

export default function MantenimientoForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<MantenimientoFormValues>({
    resolver: zodResolver(mantenimientoSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      phone: "",
      equipmentCount: "1-10",
      message: "",
    },
  });

  const onSubmit = (data: MantenimientoFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitMantenimientoForm(formData);

      if (result.success) {
        toast({
          title: "¡Solicitud Enviada!",
          description:
            "Gracias por tu interés. Un especialista se pondrá en contacto para realizar un diagnóstico.",
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Nombre de la Empresa
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Ej. Soluciones SAS"
                  {...field}
                  className="rounded-xl p-4 bg-muted/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Persona de Contacto
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Juan Pérez"
                  {...field}
                  className="rounded-xl p-4 bg-muted/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Teléfono
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="+57"
                  {...field}
                  className="rounded-xl p-4 bg-muted/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="equipmentCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Número de Equipos
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-xl p-4 bg-muted/30">
                    <SelectValue />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1-10">1 - 10 equipos</SelectItem>
                  <SelectItem value="11-50">11 - 50 equipos</SelectItem>
                  <SelectItem value="50+">Más de 50 equipos</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel className="text-xs font-bold uppercase tracking-wider text-foreground/50">
                Mensaje adicional
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Cuéntenos sus requerimientos específicos..."
                  rows={4}
                  {...field}
                  className="rounded-xl p-4 bg-muted/30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="md:col-span-2 font-black py-4 rounded-xl shadow-lg shadow-primary/20"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Solicitar Cotización Personalizada"
          )}
        </Button>
      </form>
    </Form>
  );
}

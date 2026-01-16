"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
  FormField,
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
import { submitQuoteForm } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";

const quoteSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido."),
  company: z.string().min(1, "El nombre de la empresa es requerido."),
  email: z.string().email("Correo electrónico inválido."),
  service: z.string(),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres."),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function QuoteForm() {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      service: "Outsourcing de Impresión",
      message: "",
    },
  });

  const onSubmit = (data: QuoteFormValues) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const result = await submitQuoteForm(formData);

      if (result.success) {
        toast({
          title: "¡Solicitud Enviada!",
          description:
            "Gracias por tu interés. Un asesor te contactará pronto.",
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
        className="bg-card p-8 rounded-2xl shadow-2xl flex flex-col gap-5 text-foreground"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Nombre Completo
                </FormLabel>
                <FormControl>
                  <Input placeholder="Ej: Juan Pérez" {...field} />
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
                <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Empresa
                </FormLabel>
                <FormControl>
                  <Input placeholder="Nombre de su empresa" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Correo Electrónico
                </FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@empresa.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Servicio de Interés
                </FormLabel>
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
                    <SelectItem value="Outsourcing de Impresión">
                      Outsourcing de Impresión
                    </SelectItem>
                    <SelectItem value="Renta de Cómputo">
                      Renta de Cómputo
                    </SelectItem>
                    <SelectItem value="Ambos Servicios">
                      Ambos Servicios
                    </SelectItem>
                    <SelectItem value="Otro Proyecto TI">
                      Otro Proyecto TI
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Mensaje / Requerimientos
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describa brevemente sus necesidades..."
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
          className="w-full font-black text-lg py-4 h-auto rounded-xl mt-2"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Enviar Solicitud"
          )}
        </Button>
        <p className="text-[10px] text-center text-muted-foreground">
          Al enviar, acepta nuestra política de tratamiento de datos personales.
        </p>
      </form>
    </Form>
  );
}

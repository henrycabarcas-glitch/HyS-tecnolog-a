"use server";

import { z } from "zod";

const contactSchema = z.object({
  fullName: z.string().min(1, "El nombre completo es requerido."),
  email: z.string().email("Correo electrónico inválido."),
  phone: z.string().min(1, "El teléfono es requerido."),
  company: z.string().min(1, "La empresa es requerida."),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export async function submitContactForm(formData: FormData) {
  const parsed = contactSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    console.error("Form validation failed:", parsed.error.format());
    return { success: false, error: "Validation failed" };
  }

  try {
    console.log("Form data received:", parsed.data);
    // Here you would typically send an email, save to a database, etc.
    return { success: true };
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Server error" };
  }
}

const quoteSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido."),
  company: z.string().min(1, "El nombre de la empresa es requerido."),
  email: z.string().email("Correo electrónico inválido."),
  service: z.string(),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres."),
});

export async function submitQuoteForm(formData: FormData) {
  const parsed = quoteSchema.safeParse({
    fullName: formData.get("fullName"),
    company: formData.get("company"),
    email: formData.get("email"),
    service: formData.get("service"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    console.error("Quote form validation failed:", parsed.error.format());
    return { success: false, error: "Validation failed" };
  }

  try {
    console.log("Quote form data received:", parsed.data);
    // Here you would typically send an email, save to a database, etc.
    return { success: true };
  } catch (error) {
    console.error("Error submitting quote form:", error);
    return { success: false, error: "Server error" };
  }
}

const servicioTecnicoSchema = z.object({
  fullName: z.string().min(1, "El nombre es requerido."),
  company: z.string().min(1, "El nombre de la empresa es requerido."),
  brand: z.string().min(1, "La marca es requerida."),
  model: z.string().min(1, "El modelo es requerido."),
  problem: z.string().min(10, "La descripción del problema debe tener al menos 10 caracteres."),
});

export async function submitServicioTecnicoForm(formData: FormData) {
  const parsed = servicioTecnicoSchema.safeParse({
    fullName: formData.get("fullName"),
    company: formData.get("company"),
    brand: formData.get("brand"),
    model: formData.get("model"),
    problem: formData.get("problem"),
  });

  if (!parsed.success) {
    console.error("Servicio tecnico form validation failed:", parsed.error.format());
    return { success: false, error: "Validation failed" };
  }

  try {
    console.log("Servicio tecnico form data received:", parsed.data);
    // Here you would typically send an email, save to a database, etc.
    return { success: true };
  } catch (error) {
    console.error("Error submitting servicio tecnico form:", error);
    return { success: false, error: "Server error" };
  }
}


const mantenimientoSchema = z.object({
  companyName: z.string().min(1, "El nombre de la empresa es requerido."),
  contactPerson: z.string().min(1, "El nombre de la persona de contacto es requerido."),
  phone: z.string().min(1, "El teléfono es requerido."),
  equipmentCount: z.string(),
  message: z.string(),
});

export async function submitMantenimientoForm(formData: FormData) {
  const parsed = mantenimientoSchema.safeParse({
    companyName: formData.get("companyName"),
    contactPerson: formData.get("contactPerson"),
    phone: formData.get("phone"),
    equipmentCount: formData.get("equipmentCount"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    console.error("Mantenimiento form validation failed:", parsed.error.format());
    return { success: false, error: "Validation failed" };
  }

  try {
    console.log("Mantenimiento form data received:", parsed.data);
    return { success: true };
  } catch (error) {
    console.error("Error submitting mantenimiento form:", error);
    return { success: false, error: "Server error" };
  }
}

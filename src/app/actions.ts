"use server";

export async function submitContactForm(formData: FormData) {
    // Simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Form Submitted:", { name, email, message });

    // In a real app, you would send an email or save to DB here.
    return { success: true, message: "¡Mensaje enviado con éxito!" };
}

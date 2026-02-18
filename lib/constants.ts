// Contact info - single source of truth
const PHONE = "089513192579";
const PHONE_DISPLAY = "0895 1319 2579";
const WHATSAPP_NUMBER = "62" + PHONE.replace(/\D/g, "").replace(/^0/, "");
const EMAIL = "zodra@gmail.com";

export const contact = {
  phone: PHONE_DISPLAY,
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
  email: EMAIL,
};

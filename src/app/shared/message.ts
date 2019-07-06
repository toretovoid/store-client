export interface Message {
  firstname: string;
  lastname: string;
  telnum: number;
  email: string;
  agree: boolean;
  contacttype: string;
  text: string;
}

export const ContactType = ['Chat', 'Whatsapp', 'Tel', 'Email'];

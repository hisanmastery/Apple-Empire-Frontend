export const validators = {
  verifyEmail: (email: string) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(email).toLowerCase()
    );
  },
  verifyPassword: (password: string) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
      String(password)
    );
  },
  verifyName: (name: string) => {
    return /^[a-zA-Z ]{2,30}$/.test(String(name));
  },
  phoneNumber: (phone: number) => {
    return /^\d{10}$/.test(String(phone));
  },
};

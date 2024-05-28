import md5 from "md5";

export const hashPass = (pass: string) => md5(pass);

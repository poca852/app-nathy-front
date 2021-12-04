export interface AuthResponse {
    ok: boolean;
    id?: string;
    nombre?: string;
    token?: string;
    msg?: string;
}

export interface Usuario {
    uid: string;
    nombre: string;
}
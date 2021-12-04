export interface Credito {
    abonos:        number;
    estado:        boolean;
    _id:           string;
    prestado:      number;
    cliente:       Cliente;
    cuotas:        number;
    interes:       number;
    total_a_pagar: number;
    valor_cuota:   number;
    saldo_total:   number;
    fecha_inicio:  Date;
    fecha_fin:     Date;
    ok?:            boolean;
}

export interface Cliente {
    ok?:        boolean
    estado?:    boolean;
    _id?:       string;
    dpi:       string;
    nombre:    string;
    alias:     string;
    ciudad:    string;
    celular:   string;
    direccion: string;
    __v?:       number;
}

export interface Pago {
    ok: boolean
}

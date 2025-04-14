import {AuditDtls} from "./audit.model";

export interface Combo {
    comboId: number;
    code: number;
    name: string;
    auditDtls: AuditDtls;
    active: boolean,
}
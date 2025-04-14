import {AuditDtls} from "./audit.model";

export interface Brand {
    code: string;
    name: string;
    brandId: string;
    isActive?: boolean;
    auditDtls?: AuditDtls;
}
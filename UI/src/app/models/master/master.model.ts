import {AuditDtls} from "./audit.model";

export interface Master {
    code: string;
    name: string;
    brandId: string;
    isActive?: boolean;
    auditDtls?: AuditDtls;
}
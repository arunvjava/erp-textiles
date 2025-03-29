package com.nura.erp.entity.master;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "ms_uom")
public class UOM {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "uom_dtls_generator")
	@SequenceGenerator(name = "uom_dtls_generator", sequenceName = "uom_dtls_seq", allocationSize = 1, initialValue = 1)
	@Column(name = "id")
	private long id;

	@Column(name = "name_v")
	private String name;

	@Column(name = "short_name_v")
	private String shortName;

	@Embedded
	private AuditDtls auditDtls;

}

package com.nura.erp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

@Entity
@Table(name = "ms_tax")
public class MasterTax {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ms_tax_dtls_generator")
	@SequenceGenerator(name = "ms_tax_dtls_generator", sequenceName = "ms_tax_dtls_seq", allocationSize = 1, initialValue = 1)
	@Column(name = "id")
	private long id;
	
	@Column(name = "name_v")
	private String name;
	
	@Column(name = "percent_n")
	private int perCent;
	
	@Embedded
	private AuditDtls auditDtls;

}

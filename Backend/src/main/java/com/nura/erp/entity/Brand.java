package com.nura.erp.entity;

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
@Table(name = "ms_brand")
public class Brand {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "brand_dtls_generator")
	@SequenceGenerator(name = "brand_dtls_generator", sequenceName = "brand_dtls_seq", allocationSize = 1, initialValue = 1)
	@Column(name = "brand_id")
	private long brandId;
	
	@Column(name = "code_v")
	private String code;
	
	@Column(name = "name_v")
	private String name;

	@Embedded
	private AuditDtls auditDtls;
}

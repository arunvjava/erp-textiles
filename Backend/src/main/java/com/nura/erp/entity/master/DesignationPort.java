package com.nura.erp.entity.master;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "ms_designation_port")
public class DesignationPort {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ms_designation_port_dtls_generator")
	@SequenceGenerator(name = "ms_designation_port_dtls_generator", sequenceName = "ms_designation_port_dtls_seq", allocationSize = 1, initialValue = 1)
	@Column(name = "id")
	private long id;

	@NotBlank(message = "Code is required")
	@Column(name = "code_v")
	private String code;

	@NotBlank(message = "Name is required")
	@Size(min = 3, message = "Name must be above 3 chars")
	@Column(name = "name_v")
	private String name;

	@Column(name = "active")
	private boolean isActive;

	@Embedded
	private AuditDtls auditDtls;

	@PrePersist
	public void setDefaultValues() {
		this.isActive = true;
	}

}

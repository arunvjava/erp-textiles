package com.nura.erp.entity.master;

import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "ms_counts")
public class Counts {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ms_color_dtls_generator")
	@SequenceGenerator(name = "ms_color_dtls_generator", sequenceName = "ms_color_dtls_seq", allocationSize = 1, initialValue = 1)
	@Column(name = "counts_id")
	private long countId;

	@NotBlank(message = "Name is required")
	@Size(min = 3, message = "Name must be above 3 chars")
	@Column(name = "name_v")
	private String name;

	@Column(name = "active")
	private boolean isActive;

	@OneToOne
	@JoinColumn(name = "hsn_id")
	private HSN hsn;

	@OneToOne
	@JoinColumn(name = "tax_id")
	private Tax tax;

	@OneToOne
	@JoinColumn(name = "uom_id")
	private UOM uom;

	@Embedded
	private AuditDtls auditDtls;

	@PrePersist
	public void setDefaultValues() {
		this.isActive = true;
	}

}

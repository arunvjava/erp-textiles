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
@Table(name = "user_dtls")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_dtls_generator")
	@SequenceGenerator(name = "user_dtls_generator", sequenceName = "user_dtls_seq", allocationSize = 1, initialValue = 1)
	@Column(name = "user_id_n")
	private long userId;

	@Column(name = "first_name_v")
	private String firstName;

	@Column(name = "last_name_v")
	private String lastName;

	@Column(name = "email_id_v")
	private String emailId;

	@Column(name = "password_v")
	private String password;

	@Embedded
	private AuditDtls auditDtls;
}

package com.nura.erp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "user_dtls")
public class User {

	@Id
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

}

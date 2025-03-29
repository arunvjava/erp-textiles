package com.nura.erp.entity.master;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Embeddable
public class AuditDtls {

	@Column(name = "crtd_user_v")
	private String createdUser;

	@Column(name = "crtd_time")
	@Temporal(value = TemporalType.TIMESTAMP)
	private Date createdTime;

	@Column(name = "updt_user_v")
	private String updatedUser;

	@Column(name = "updt_time")
	@Temporal(value = TemporalType.TIMESTAMP)
	private Date updatedTime;

}

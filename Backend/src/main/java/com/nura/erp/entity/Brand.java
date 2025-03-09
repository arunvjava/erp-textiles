package com.nura.erp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "ms_brand")
public class Brand {

	@Id
	@Column(name = "brand_id")
	private long brandId;
	@Column(name = "code_v")
	private String code;
	@Column(name = "name_v")
	private String name;

}

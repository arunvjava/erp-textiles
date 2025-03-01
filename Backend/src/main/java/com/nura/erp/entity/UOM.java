package com.nura.erp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "m_uom")
public class UOM {

	@Id
	@Column(name = "id")
	private long id;
	@Column(name = "name_v")
	private String name;

}

package com.nura.erp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.UOM;
import com.nura.erp.repo.UOMRepository;

@Service
public class UOMService {

	private UOMRepository uomRepo;

	public UOMService(UOMRepository uomRepo) {
		this.uomRepo = uomRepo;
	}

	public UOM saveMasterTax(UOM uom) {
		return uomRepo.save(uom);
	}

	public List<UOM> getAllMasterTax() {
		return uomRepo.findAll();
	}

}

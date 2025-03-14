package com.nura.erp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nura.erp.entity.MasterTax;
import com.nura.erp.repo.MasterTaxRepository;

@Service
public class TaxService {

	private MasterTaxRepository taxRepo;

	public TaxService(MasterTaxRepository taxRepo) {
		this.taxRepo = taxRepo;
	}

	public MasterTax saveMasterTax(MasterTax masterTax) {
		return taxRepo.save(masterTax);
	}
	
	public List<MasterTax> getAllMasterTax() {
		return taxRepo.findAll();
	}
	
}

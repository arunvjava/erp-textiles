package com.nura.erp.service.master;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.Tax;
import com.nura.erp.repo.master.MasterTaxRepository;

@Service
public class TaxService {

	private MasterTaxRepository taxRepo;

	public TaxService(MasterTaxRepository taxRepo) {
		this.taxRepo = taxRepo;
	}

	public Tax saveMasterTax(Tax masterTax) {
		return taxRepo.save(masterTax);
	}

	public List<Tax> getAllMasterTax() {
		return taxRepo.findAll();
	}

}

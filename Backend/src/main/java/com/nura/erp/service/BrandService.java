package com.nura.erp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nura.erp.entity.Brand;
import com.nura.erp.repo.BrandRepository;

@Service
public class BrandService {

	private BrandRepository brandRepo;

	public BrandService(BrandRepository brandRepo) {
		this.brandRepo = brandRepo;
	}

	/**
	 * Save the brand details
	 */
	public Brand saveBrand(Brand brand) {
		return brandRepo.save(brand);
	}

	public List<Brand> getAllBrands() {
		return brandRepo.findAll();
	}
	
	public void deleteBrands(List<Long> ids) {
		brandRepo.deleteAllById(ids);
	}
}

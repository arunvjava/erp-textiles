package com.nura.erp.service.master;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.Brand;
import com.nura.erp.repo.master.BrandRepository;

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

	public org.springframework.data.domain.Page<Brand> getColorsBsdOnPagination(Pageable pageable) {
		return brandRepo.findAll(pageable);
	}
}

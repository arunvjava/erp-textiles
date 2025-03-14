package com.nura.erp.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nura.erp.entity.Brand;
import com.nura.erp.service.BrandService;
import com.nura.erp.utils.Constants;
import com.nura.erp.utils.Response;

@RestController
@RequestMapping(Constants.API_V1_PREFIX + "/brand")
public class BrandController {

	private BrandService brandService;

	public BrandController(BrandService brandService) {
		this.brandService = brandService;
	}

	@PostMapping
	public ResponseEntity<Response<Brand>> saveBrand(@RequestBody Brand brand) {
		Brand savedBrand = brandService.saveBrand(brand);
		return ResponseEntity.ok(Response.<Brand>builder().status(201).respObj(savedBrand).build());
	}

	@GetMapping("/all")
	public ResponseEntity<Response<List<Brand>>> getAllBrand() {
		return ResponseEntity
				.ok(Response.<List<Brand>>builder().status(200).respObj(brandService.getAllBrands()).build());
	}
}

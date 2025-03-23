package com.nura.erp.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nura.erp.entity.Brand;
import com.nura.erp.service.BrandService;
import com.nura.erp.utils.Constants;
import com.nura.erp.utils.Response;

import jakarta.validation.Valid;

@RestController
@RequestMapping(Constants.API_V1_PREFIX + "/brand")
public class BrandController {

	private BrandService brandService;

	public BrandController(BrandService brandService) {
		this.brandService = brandService;
	}

	@PostMapping
	public ResponseEntity<Response<Brand>> saveBrand(@Valid @RequestBody Brand brand) {
		Brand savedBrand = brandService.saveBrand(brand);
		return ResponseEntity.ok(Response.<Brand>builder().status(201).respObj(savedBrand).build());
	}

	@PutMapping
	public ResponseEntity<Response<Brand>> updateBrand(@Valid @RequestBody Brand brand) {
		Brand savedBrand = brandService.saveBrand(brand);
		return ResponseEntity.ok(Response.<Brand>builder().status(200).respObj(savedBrand).build());
	}

	@GetMapping("/all")
	public ResponseEntity<Response<List<Brand>>> getAllBrand() {
		return ResponseEntity
				.ok(Response.<List<Brand>>builder().status(200).respObj(brandService.getAllBrands()).build());
	}

	@DeleteMapping("/{ids}")
	public ResponseEntity<Response<String>> deleteBrands(@PathVariable String ids) {
		List<Long> idList = Arrays.stream(ids.split(",")).map(Long::parseLong).toList();
		brandService.deleteBrands(idList);
		return ResponseEntity.ok(Response.<String>builder().status(200).respObj(null).build());
	}

}

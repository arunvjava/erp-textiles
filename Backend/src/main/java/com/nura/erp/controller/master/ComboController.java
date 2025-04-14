package com.nura.erp.controller.master;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nura.erp.entity.master.Combo;
import com.nura.erp.service.master.ComboService;
import com.nura.erp.utils.Constants;
import com.nura.erp.utils.Response;

import jakarta.validation.Valid;

@RestController
@RequestMapping(Constants.API_V1_PREFIX + "/combo")
public class ComboController {

	private ComboService comboService;

	public ComboController(ComboService comboService) {
		this.comboService = comboService;
	}

	@GetMapping("/all")
	public ResponseEntity<Response<PagedModel<EntityModel<Combo>>>> getAllCombos(@RequestParam Optional<Integer> pageNo,
			@RequestParam Optional<Integer> size, @RequestParam Optional<String> sortBy,
			PagedResourcesAssembler<Combo> assembler) {
		Pageable pageable = Pageable.unpaged();

		if (pageNo.isPresent() && size.isPresent()) {
			pageable = PageRequest.of(pageNo.get(), size.get(), sortBy.map(Sort::by).orElse(Sort.unsorted()));
		}

		return ResponseEntity.ok(Response.<PagedModel<EntityModel<Combo>>>builder().status(200)
				.respObj(assembler.toModel(comboService.getColorsBsdOnPagination(pageable))).build());
	}

	@PostMapping
	public ResponseEntity<Response<Combo>> saveBrand(@Valid @RequestBody Combo combo) {
		Combo savedCombo = comboService.saveCombo(combo);
		return ResponseEntity.ok(Response.<Combo>builder().status(201).respObj(savedCombo).build());
	}
	
	@PutMapping
	public ResponseEntity<Response<Combo>> updateCombo(@Valid @RequestBody Combo combo) {
		Combo savedCombo = comboService.saveCombo(combo);
		return ResponseEntity.ok(Response.<Combo>builder().status(200).respObj(savedCombo).build());
	}
	
	@DeleteMapping("/{ids}")
	public ResponseEntity<Response<String>> deletecolors(@PathVariable String ids) {
		List<Long> idList = Arrays.stream(ids.split(",")).map(Long::parseLong).toList();
		comboService.deleteComboByID(idList);
		return ResponseEntity.ok(Response.<String>builder().status(200).respObj(null).build());
	}

}

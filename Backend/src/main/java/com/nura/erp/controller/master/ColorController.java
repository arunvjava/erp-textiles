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

import com.nura.erp.entity.master.Color;
import com.nura.erp.service.master.ColorService;
import com.nura.erp.utils.Constants;
import com.nura.erp.utils.Response;

import jakarta.validation.Valid;

@RestController
@RequestMapping(Constants.API_V1_PREFIX + "/color")
public class ColorController {

	private ColorService colorService;

	public ColorController(ColorService colorService) {
		this.colorService = colorService;
	}

	@PostMapping
	public ResponseEntity<Response<Color>> savedColor(@Valid @RequestBody Color color) {
		Color savedColor = colorService.saveColor(color);
		return ResponseEntity.ok(Response.<Color>builder().status(201).respObj(savedColor).build());
	}

	@PutMapping
	public ResponseEntity<Response<Color>> updateColor(@Valid @RequestBody Color color) {
		Color savedColor = colorService.saveColor(color);
		return ResponseEntity.ok(Response.<Color>builder().status(200).respObj(savedColor).build());
	}

	@GetMapping("/all")
	public ResponseEntity<Response<PagedModel<EntityModel<Color>>>> getAllColors(@RequestParam Optional<Integer> pageNo,
			@RequestParam Optional<Integer> size, @RequestParam Optional<String> sortBy,
			PagedResourcesAssembler<Color> assembler) {
		Pageable pageable = Pageable.unpaged();

		if (pageNo.isPresent() && size.isPresent()) {
			pageable = PageRequest.of(pageNo.get(), size.get(), sortBy.map(Sort::by).orElse(Sort.unsorted()));
		}

		return ResponseEntity.ok(Response.<PagedModel<EntityModel<Color>>>builder().status(200)
				.respObj(assembler.toModel(colorService.getColorsBsdOnPagination(pageable))).build());
	}

//	@GetMapping("/all")
//	public ResponseEntity<Response<List<Color>>> getAllColors() {
//
//		return ResponseEntity
//				.ok(Response.<List<Color>>builder().status(200).respObj(colorService.getAllColors()).build());
//	}

	@DeleteMapping("/{ids}")
	public ResponseEntity<Response<String>> deletecolors(@PathVariable String ids) {
		List<Long> idList = Arrays.stream(ids.split(",")).map(Long::parseLong).toList();
		colorService.deleteColor(idList);
		return ResponseEntity.ok(Response.<String>builder().status(200).respObj(null).build());
	}
}

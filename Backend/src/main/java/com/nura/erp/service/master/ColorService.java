package com.nura.erp.service.master;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.Color;

@Service
public class ColorService {

	private JpaRepository<Color, Long> jpaRepository;

	public ColorService(JpaRepository<Color, Long> jpaRepository) {
		this.jpaRepository = jpaRepository;
	}

	public List<Color> getAllColors() {
		return jpaRepository.findAll();
	}

	public Color saveColor(Color color) {
		return jpaRepository.save(color);
	}

	public void deleteColor(List<Long> ids) {
		jpaRepository.deleteAllById(ids);
	}

	public Page<Color> getColorsBsdOnPagination(Pageable pageable) {
		return jpaRepository.findAll(pageable);
	}

}

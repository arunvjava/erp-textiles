package com.nura.erp.service.master;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.Color;

@Service
public class ColorService {

	private JpaRepository<Color, Long> jpaRepository;

	public List<Color> getAllColors() {
		return jpaRepository.findAll();
	}

	public Color saveColor(Color color) {
		return jpaRepository.save(color);
	}

	public void deleteColor(List<Long> ids) {
		jpaRepository.deleteAllById(ids);
	}

}

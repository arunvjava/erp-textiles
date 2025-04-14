package com.nura.erp.service.master;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.Combo;

@Service
public class ComboService {

	private JpaRepository<Combo, Long> jpaRepository;

	public ComboService(JpaRepository<Combo, Long> jpaRepository) {
		this.jpaRepository = jpaRepository;
	}

	public List<Combo> getAllCombos() {
		return jpaRepository.findAll();
	}

	public Combo saveCombo(Combo combo) {
		return jpaRepository.save(combo);
	}

	public void deleteComboByID(List<Long> ids) {
		jpaRepository.deleteAllById(ids);
	}

	public Page<Combo> getColorsBsdOnPagination(Pageable pageable) {
		return jpaRepository.findAll(pageable);
	}

}

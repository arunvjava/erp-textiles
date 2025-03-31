package com.nura.erp.repo.master;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nura.erp.entity.master.Tax;

public interface MasterTaxRepository extends JpaRepository<Tax, Long> {

}

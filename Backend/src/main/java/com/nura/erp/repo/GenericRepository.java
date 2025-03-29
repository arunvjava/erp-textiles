package com.nura.erp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface GenericRepository<T> extends JpaRepository<T, Long> {

}

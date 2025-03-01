package com.nura.erp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nura.erp.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

	public User findByEmailId(String emailId);

}

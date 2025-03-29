package com.nura.erp.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nura.erp.entity.master.User;
import com.nura.erp.repo.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;
	private PasswordEncoder passwordEncoder;

	public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}

	public void saveUser(User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}

	public boolean validateUser(User user) {
		User dbUser = this.userRepository.findByEmailId(user.getEmailId());
		if (passwordEncoder.matches(user.getPassword(), dbUser.getPassword())) {
			return true;
		}

		return false;
	}

}

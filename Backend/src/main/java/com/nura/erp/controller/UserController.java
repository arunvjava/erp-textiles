package com.nura.erp.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nura.erp.entity.master.User;
import com.nura.erp.service.UserService;
import com.nura.erp.utils.Constants;
import com.nura.erp.utils.Response;

@RestController
@RequestMapping(Constants.API_V1_PREFIX + "/user")
public class UserController {

	private UserService userService;

	public UserController(UserService userService) {
		this.userService = userService;
	}

	@PostMapping
	public ResponseEntity<Response<User>> saveUser(@RequestBody User user) {
		this.userService.saveUser(user);
		return ResponseEntity.ok(Response.<User>builder().status(201).respObj(user).build());
	}

	@PostMapping("/validate")
	public ResponseEntity<Response<Boolean>> validateUser(@RequestBody User user) {
		if (this.userService.validateUser(user)) {
			return ResponseEntity.ok(Response.<Boolean>builder().status(200).respObj(true).build());
		}

		return ResponseEntity.ok(Response.<Boolean>builder().status(404).respObj(false).build());
	}

}

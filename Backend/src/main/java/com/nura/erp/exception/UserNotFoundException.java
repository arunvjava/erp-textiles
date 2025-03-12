package com.nura.erp.exception;

public class UserNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 2691540647554006629L;

	public UserNotFoundException(String errorMessage) {
		super(errorMessage);
	}

}

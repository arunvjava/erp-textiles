package com.nura.erp.exception.handler;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.nura.erp.utils.Response;

@RestControllerAdvice
public class GlobalExceptionHandler {

	/**
	 * Handle all Exception class
	 * 
	 * @param exc
	 */
	@ExceptionHandler(exception = Exception.class)
	public ResponseEntity<Response<String>> handleException(Exception exc) {
		return ResponseEntity.ok(Response.<String>builder().status(404).respObj(exc.getLocalizedMessage()).build());
	}

}

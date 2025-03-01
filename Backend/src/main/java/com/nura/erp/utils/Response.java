package com.nura.erp.utils;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Response<T> {

	private int status;

	private T respObj;

	private String message;

}

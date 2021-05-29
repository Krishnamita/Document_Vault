package com.kb.project.exception;

@SuppressWarnings("serial")
/**The set of warnings that are to be suppressed by the compiler in the annotated element. Duplicate names are permitted.  The second and successive occurrences of a name are ignored.**/
public class InvalidDetailsException extends Exception{
	public InvalidDetailsException(String error_Msg) {
		super(error_Msg);/** Constructs a new exception with the specified detail message and cause.**/
	}
}

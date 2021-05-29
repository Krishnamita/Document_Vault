package com.project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DocApplication {

	public static void main(String[] args) {
		SpringApplication.run(DocApplication.class, args);

		/**
		 * The class name of application context that will be used by default for non-web
		 * environments.
		 */
	}

}

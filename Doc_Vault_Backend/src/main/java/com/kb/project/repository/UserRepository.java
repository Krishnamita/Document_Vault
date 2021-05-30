package com.kb.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kb.project.model.User;

// TODO: Auto-generated Javadoc
/**
 * The Interface UserRepository.
 */
public interface UserRepository extends  JpaRepository<User, Integer>{
	
	/**
	 * Gets the by email id and password.
	 *
	 * @param emailId the email id
	 * @param password the password
	 * @return the by email id and password
	 */
	public Optional<User> getByEmailIdAndPassword(String emailId, String password);
}
	
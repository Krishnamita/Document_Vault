package com.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.model.Doc;

@Repository /**for encapsulating storage, retrieval, and search behavior which emulates a collection of objects".**/

public interface DocRepository  extends JpaRepository<Doc,Integer>{

	

}

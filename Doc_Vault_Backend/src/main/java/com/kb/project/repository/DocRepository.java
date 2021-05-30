package com.kb.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.kb.project.model.Doc;

@Repository /**for encapsulating storage, retrieval, and search behavior which emulates a collection of objects".**/

public interface DocRepository  extends JpaRepository<Doc,Integer>{
			@Query("select d from Doc d where d.user.userId like ?1")
			List<Doc> findAllByUserId(int userId);

}

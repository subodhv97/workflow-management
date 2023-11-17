package com.wfms.repository;

import com.wfms.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface QuestionRepo extends JpaRepository<Question,Long> {

    public Question findByQuestionName(String questionName);

    public List<Question> findAll();

    public void deleteById(Long id);

}

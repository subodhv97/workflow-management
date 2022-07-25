package com.wfms.service;

import com.wfms.model.Question;
import com.wfms.repository.QuestionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepo questionRepo;

    public Question saveQuestion(Question question){
        return questionRepo.save(question);
    }

    public List<Question> getAllQuestion(){
        return questionRepo.findAll();
    }

    public void deleteQuestion(Long questionId){
        this.questionRepo.deleteById(questionId);
    }
}

package com.wfms.controller;

import com.wfms.model.Question;
import com.wfms.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/quiz")
@CrossOrigin("*")
public class QuestionController {
    @Autowired
    private QuestionService questionService;

    @PostMapping("/")
    public Question addQuestion(@RequestBody Question question){
        return this.questionService.saveQuestion(question);
    }
    @GetMapping("/quizData")
    public List<Question> getAllQuestions(){return (List<Question>) questionService.getAllQuestion();}

    @DeleteMapping("/{questionId}")
    public void deleteQuestions(@PathVariable("questionId") long questionId){this.questionService.deleteQuestion(questionId);}
}

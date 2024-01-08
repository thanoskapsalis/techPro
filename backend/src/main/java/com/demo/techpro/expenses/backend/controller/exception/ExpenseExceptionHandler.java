package com.demo.techpro.expenses.backend.controller.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.NoSuchElementException;

@RestControllerAdvice
public class ExpenseExceptionHandler {

    @ExceptionHandler(value = {NoSuchElementException.class})
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public String handleNoSuchElementException(NoSuchElementException e) {
        return e.getMessage();
    }
}
